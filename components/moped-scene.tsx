import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

function Vehicle() {
  const { scene } = useGLTF("/4B2AAPMTY5BZGZG6Z3WSJKS26.glb");

  const vehicleRef = useRef(null);
  const progress = useRef(0);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    progress.current = value;
  });

  useFrame(() => {
    if (!vehicleRef.current) return;

    const t = progress.current;

    vehicleRef.current.position.x = 0;
    vehicleRef.current.position.y = 0;
    vehicleRef.current.position.z = 4 * t;

    vehicleRef.current.rotation.x = 0;
    vehicleRef.current.rotation.y =
      (45 + 90 * t) * (Math.PI / 180);
    vehicleRef.current.rotation.z = 0;
  });

  return (
    <primitive
      ref={vehicleRef}
      object={scene}
      scale={2.4}
      position={[0, 0, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

function CameraController() {
  const { scrollYProgress } = useScroll();
  const progress = useRef(0);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    progress.current = value;
  });

  useFrame(({ camera }) => {
    const t = progress.current;

    // Start at 20, finish at 8
    camera.fov = 25 - 10 * t;

    camera.updateProjectionMatrix();
  });

  return null;
}

export default function VehicleModel() {
  return (
    <div
      style={{
        height: "300vh",
        width: "100%",
        maxWidth: "100vw"
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          height: "100vh",
        }}
      >
        <Canvas
          style={{
    width: "100%",
    height: "100%",
    display: "block",
  }}
          camera={{
            position: [15, 3, 0],
            fov: 25,
          }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={1.5} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={3}
          />

          <Environment preset="studio" />

          <Vehicle />

          <CameraController />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
          />
        </Canvas>
      </div>
    </div>
  );
}
