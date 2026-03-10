import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ===============================
   Laptop Model
================================ */

function LaptopModel() {

  const { scene } = useGLTF("/models/laptop.glb");

  return (
    <primitive
      object={scene}
      scale={2}
      rotation={[0, Math.PI, 0]}
      position={[0, +0.2, 0]}
    />
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
        x:0,
        y:0.6,
        z:0.3,
        scrollTrigger:{
          trigger:"#home",
          start:"top top",
          end:"+=2500",
          scrub:true,
          pin:true
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