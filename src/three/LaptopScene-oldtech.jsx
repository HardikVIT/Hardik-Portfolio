import { Canvas, useThree } from "@react-three/fiber";
import { Html, Preload, useGLTF } from "@react-three/drei";
import {
  Suspense,
  useEffect,
  useMemo,
  useState,
  memo,
} from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import ProjectLoading from "../components/ProjectLoading";

gsap.registerPlugin(ScrollTrigger);

useGLTF.preload("/models/laptop.glb");

const ScreenHtml = memo(function ScreenHtml({ progress }) {
  const { size } = useThree();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (size.width > 0) {
      setReady(true);
    }
  }, [size.width]);

  if (!ready) return null;

  return (
    <Html
      transform
      prepend
      occlude={false}
      scale={0.02}
      position={[-0.0199, 0.045, -0.01]}
      rotation={[0, Math.PI, 0]}
      zIndexRange={[0, 10]}
      distanceFactor={1}
    >
      <ProjectLoading progress={progress} />
    </Html>
  );
});
const LaptopModel = memo(function LaptopModel({ progress }) {
  const { scene } = useGLTF("/models/laptop.glb");

  const screenMeshes = useMemo(() => {
    const meshes = [];

    scene.traverse((child) => {
      if (!child.isMesh) return;

      child.castShadow = false;
      child.receiveShadow = false;

      if (child.name === "Node-Mesh_1") {
        meshes.push(child);

        if (child.material) {
          child.material.color.set("#000000");
        }
      }
    });

    return meshes;
  }, [scene]);

  return (
    <group
      scale={1.85}
      rotation={[0, Math.PI, 0]}
      position={[0, 0.2, 0]}
    >
      <primitive object={scene} />

      {screenMeshes.map((mesh, i) => (
        <mesh
          key={i}
          geometry={mesh.geometry}
          position={mesh.position}
          rotation={mesh.rotation}
          scale={mesh.scale}
        >
          <meshBasicMaterial
            transparent
            opacity={0}
            depthWrite={false}
          />

          <ScreenHtml progress={progress} />
        </mesh>
      ))}
    </group>
  );
});
