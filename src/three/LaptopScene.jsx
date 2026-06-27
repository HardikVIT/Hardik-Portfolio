import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF, Html, Preload, useProgress } from "@react-three/drei";
import { Suspense } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectLoading from "../components/ProjectLoading";

gsap.registerPlugin(ScrollTrigger);

function LoadingCard({ progress }) {
  const safeProgress = Math.max(8, Math.round(progress));

  return (
    <div
      style={{
        width: "280px",
        padding: "22px 24px",
        borderRadius: "16px",
        background: "rgba(0, 0, 0, 0.78)",
        border: "1px solid rgba(96, 165, 250, 0.35)",
        boxShadow: "0 0 40px rgba(96, 165, 250, 0.22)",
        color: "#d4d4d4",
        textAlign: "center",
        backdropFilter: "blur(14px)",
        pointerEvents: "none",
      }}
    >
      <p
        style={{
          margin: "0 0 14px",
          fontSize: "12px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#93c5fd",
        }}
      >
        Loading 3D Model
      </p>
      <div
        style={{
          height: "6px",
          width: "100%",
          overflow: "hidden",
          borderRadius: "999px",
          background: "#262626",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${safeProgress}%`,
            borderRadius: "999px",
            background: "#60a5fa",
            transition: "width 0.2s ease",
          }}
        />
      </div>
      <p style={{ margin: "12px 0 0", fontSize: "12px", color: "#a3a3a3" }}>
        {safeProgress}%
      </p>
    </div>
  );
}

function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html center zIndexRange={[100, 0]}>
      <LoadingCard progress={progress} />
    </Html>
  );
}

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

function LaptopModel({ progress, onReady }) {
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

  useEffect(() => {
    onReady();
  }, [onReady]);

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
        x: 0.18, y: 0.6, z: 0.3,
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
  const [modelReady, setModelReady] = useState(false);
  const { progress: assetProgress } = useProgress();
  const handleModelReady = useCallback(() => {
    setModelReady(true);
  }, []);

  // Single source of truth for scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const percentage = Math.min((window.scrollY / 800) * 100, 100);
      setProgress(percentage);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {!modelReady && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoadingCard progress={assetProgress} />
        </div>
      )}

      <Canvas
        camera={{ position: [0, 0.25, 6], fov: 18 }}
        style={{
          width: "100%",
          height: "100%",
          opacity: modelReady ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
        gl={{ alpha: true }}
        frameloop="always"
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <Suspense fallback={<CanvasLoader />}>
          <CameraMove />
          <LaptopModel
            progress={progress}
            onReady={handleModelReady}
          />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/laptop.glb");
