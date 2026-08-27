import * as THREE from "three";
import { Canvas, ReactThreeFiber, ThreeElements, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useScroll, useMotionValueEvent, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import VehicleShowcase from "./vehicle-showcase";

function Vehicle() {
  const { scene } = useGLTF("/4B2AAPMTY5BZGZG6Z3WSJKS26.glb");

  const vehicleRef = useRef<ThreeElements["primitive"]>(null);
  const progress = useRef(0);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    progress.current = Math.min(value / 0.55, 1);
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

  const perspectiveCamera = camera as THREE.PerspectiveCamera;

  // Start at 25, finish at 15
  perspectiveCamera.fov = 25 - 10 * t;
  perspectiveCamera.updateProjectionMatrix();
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
    [0, 1, 1, 1],
    {clamp: true}
  )

  const logoOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [1, 0, 0],
    {clamp: true}
  )

  const features = [
  {
    title: "Premium Design",
    description: "A sleek and aerodynamic exterior",
    position: { top: "20%", right: "12%" },
  },
  {
    title: "Long Range",
    description: "Go further on every charge",
    position: { top: "38%", right: "4%" },
  },
  {
    title: "Smart Technology",
    description: "Connected features built around you",
    position: { top: "58%", right: "8%" },
  },
  {
    title: "Fast Charging",
    description: "Spend less time charging",
    position: { top: "72%", left: "8%" },
  },
  {
    title: "Advanced Safety",
    description: "Protection wherever you go",
    position: { top: "32%", left: "5%" },
  },
];


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
            right: "8%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            color: "white",
            opacity: logoOpacity,
            textAlign: "right",
            maxWidth: "520px",
          }}
        >
          <div
            style={{
              fontSize: "clamp(1.5rem, 3vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.05em",
            }}
          >
            <div>Worried about</div>
            <div>Rising Petrol</div>
            <div>Prices?</div>
          </div>

          <div
            style={{
              marginTop: "1.5rem",
              fontSize: "clamp(1rem, 1.5vw, 1.5rem)",
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            Introducing All-Inclusive
            <br />
            <span style={{ color: "#15110d" }}>eBike Subscriptions</span>
          </div>

          <div
            style={{
              display: "inline-block",
              marginTop: "2rem",
              padding: "0.9rem 1.8rem",
              borderRadius: "999px",
              background: "#15110d",
              color: "#fff",
              fontSize: "clamp(0.9rem, 1.2vw, 1.2rem)",
              fontWeight: 700,
              letterSpacing: "0.02em",
            }}
          >
            Start Saving Now →
          </div>
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
