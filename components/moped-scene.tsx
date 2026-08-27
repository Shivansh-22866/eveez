import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useScroll, useMotionValueEvent, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import VehicleShowcase from "./vehicle-showcase";
import Image from "next/image";

function Vehicle() {
  const { scene } = useGLTF("/4B2AAPMTY5BZGZG6Z3WSJKS26.glb");

  const vehicleRef = useRef(null);
  const progress = useRef(0);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    progress.current = 1.3*value;
  });

  useFrame(() => {
    if (!vehicleRef.current) return;

    const t = progress.current;

    vehicleRef.current.position.x = 0;
    vehicleRef.current.position.y = 0;
    vehicleRef.current.position.z = 3.2 * t;

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

  const {scrollYProgress} = useScroll()

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 1],
    [1, 0, 0, 0],
    {clamp: true}
  )

  const carouselOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 1],
    [0, 0.4, 0.6, 1],
    {clamp: true}
  )

  const logoOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [1, 0, 0],
    {clamp: true}
  )

  return (
    <div
      style={{
        height: "1200vh",
        width: "100%",
        maxWidth: "100vw",
        backgroundColor: "#FF5634"
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

        <motion.div
          
          style={{
            position: "absolute",
            zIndex: 10,
            top: "50%",
            left: "4%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            color: "white",
            fontSize: "clamp(3rem, 7vw, 8rem)",
            fontWeight: 700,
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
            opacity: titleOpacity
          }}
        >
          <div>Smart</div>
          <div>Electric</div>
          <div>Mobility</div>
        </motion.div>

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

          <motion.div
            style={{
            position: "absolute",
            zIndex: 20,
            top: "50%",
            right: "10%",
            height: "100%",
            pointerEvents: "auto",
            opacity: logoOpacity,
          }}>
            <Image src={"https://www.eveez.in/image/evv.png"} alt="Logo" width={200} height={200} />
          </motion.div>

          <motion.div
          style={{
            position: "absolute",
            zIndex: 20,
            top: 0,
            right: 0,
            width: "60%",
            height: "100%",
            pointerEvents: "auto",
            opacity: carouselOpacity
          }}
        >
          <VehicleShowcase
            scrollProgress={scrollYProgress}
          />
        </motion.div>
      </div>
    </div>
  );
}
