import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Projects from "../sections/Projects";
import ProjectLoading from "../components/ProjectLoading";
gsap.registerPlugin(ScrollTrigger);

/* ===============================
   Laptop Model
================================ */

function LaptopModel() {

  const { scene } = useGLTF("/models/laptop.glb");

  const screenMeshes = [];

  scene.traverse((child) => {
    if (child.name === "Node-Mesh_1") {
      screenMeshes.push(child);
      child.material.color.set("black");
    }
  });

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
          <meshBasicMaterial transparent opacity={0} />

          <Html
            transform
            occlude
            scale={0.0200}
            position={[-0.0199, 0.045, -0.01]}
            rotation={[0, Math.PI, 0]}
          >
            <div
              style={{
                width: "500px",
                height: "600px",
                background: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "40px"
              }}
            >
              <ProjectLoading />
            </div>
          </Html>

        </mesh>
      ))}

    </group>
  );
}

/* ===============================
   Apple-style Camera Zoom
================================ */

function CameraMove() {

  const { camera } = useThree();

  useEffect(() => {

    gsap.fromTo(
      camera.position,
      { x:0, y:0.6, z:6 },  
      {
        x:0.18,
        y:0.6,
        z:0.3,
        scrollTrigger:{
          trigger:"#home",
          start:"top top",
          end:"+=2500",
          scrub:true,
          pin:true
        },
        onUpdate: () => {
          camera.lookAt(0.03, 0.45, 0); // aim camera at screen
        }
      }
      
    );

  }, [camera]);

  return null;

}

/* ===============================
   Scene
================================ */

export default function LaptopScene() {

  return (

    <Canvas
      camera={{ position:[0,0.25,6], fov:18 }}
      style={{ width:"100%", height:"100%" }}
      gl={{ alpha:true }}
    >

      <ambientLight intensity={1.5}/>
      <directionalLight position={[5,5,5]} intensity={2}/>

      <CameraMove/>

      <LaptopModel/>

    </Canvas>

  );

}

useGLTF.preload("/models/laptop.glb");