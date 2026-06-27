import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF, Html, Preload } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectLoading from "../components/ProjectLoading";

gsap.registerPlugin(ScrollTrigger);

function ScreenHtml({ progress }) {
  const { size } = useThree();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (size.width > 0 && size.height > 0) {
      setReady(true);
    }
  }, [size.width, size.height]);

  if (!ready) return null;

  return (
    <Html
      transform
      occlude={false}
      prepend
      scale={0.02}
      position={[-0.0199, 0.045, -0.01]}
      rotation={[0, Math.PI, 0]}
      zIndexRange={[0, 10]}
    >
      <ProjectLoading progress={progress} />
    </Html>
  );
}

function LaptopModel({ progress }) {
  const { scene } = useGLTF("/models/laptop.glb");

  const screenMeshes = useMemo(() => {
    const meshes = [];

    scene.traverse((child) => {
      if (child.name === "Node-Mesh_1") {
        meshes.push(child);
        child.material.color.set("black");
      }
    });

    return meshes;
  }, [scene]);

  return (
    <group scale={1.85} rotation={[0, Math.PI, 0]} position={[0, 0.2, 0]}>
      <primitive object={scene} />

      {screenMeshes.map((mesh, i) => (
        <mesh
          key={i}
          geometry={mesh.geometry}
          position={mesh.position}
          rotation={mesh.rotation}
          scale={mesh.scale}
        >
          <meshBasicMaterial transparent opacity={0} />
          <ScreenHtml progress={progress} />
        </mesh>
      ))}
    </group>
  );
}

function CameraMove() {
  const { camera } = useThree();

  useEffect(() => {
    gsap.fromTo(
      camera.position,
      { x: 0, y: 0.6, z: 6 },
      {
        x: 0.18,
        y: 0.6,
        z: 0.3,
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "+=2500",
          scrub: true,
          pin: true,
        },
        onUpdate: () => camera.lookAt(0.03, 0.45, 0),
      }
    );
  }, [camera]);

  return null;
}

export default function LaptopScene() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const percentage = Math.min((window.scrollY / 800) * 100, 100);
      setProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        camera={{ position: [0, 0.25, 6], fov: 18 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ alpha: true }}
        frameloop="always"
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <Suspense fallback={null}>
          <CameraMove />
          <LaptopModel progress={progress} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
