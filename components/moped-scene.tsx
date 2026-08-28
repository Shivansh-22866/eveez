"use client";

import * as THREE from "three";
import {
  Canvas,
  ReactThreeFiber,
  ThreeElements,
  useFrame,
} from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import {
  useScroll,
  useMotionValueEvent,
  useTransform,
  motion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
    vehicleRef.current.rotation.y = (45 + 90 * t) * (Math.PI / 180);
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateScreenSize = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateScreenSize();

    mediaQuery.addEventListener("change", updateScreenSize);

    return () => {
      mediaQuery.removeEventListener("change", updateScreenSize);
    };
  }, []);

  const { scrollYProgress } = useScroll();

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 1],
    [1, 0, 0, 0],
    { clamp: true },
  );

  const carouselOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 1],
    [0, 1, 1, 1],
    { clamp: true },
  );

  const logoOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0, 0], {
    clamp: true,
  });

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
    <section className="relative h-[600vh] w-full max-w-[100vw] overflow-x-clip bg-[#FF5634] md:h-[900vh] lg:h-[1200vh] -top-10">
      <div className="sticky top-0 h-screen min-h-[620px] w-full overflow-hidden">
        {/* =====================================================
            3D VEHICLE
            Only mounted on desktop/tablet.
            ===================================================== */}

        {!isMobile && (
          <div className="absolute inset-0 z-[1] h-full w-full">
            <Canvas
              className="block h-full w-full"
              camera={{
                position: [15, 3, 0],
                fov: 25,
              }}
              dpr={[1, 2]}
              gl={{
                antialias: true,
                alpha: true,
              }}
            >
              <ambientLight intensity={1.5} />

              <directionalLight position={[5, 5, 5]} intensity={3} />

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
        )}

        {/* =====================================================
            TITLE
            ===================================================== */}

        <motion.div
          className="
            absolute
            z-10

            left-1/2
            top-[12%]
            w-full
            -translate-x-1/2

            px-5
            text-center

            text-white

            md:left-[3%]
            md:top-1/2
            md:w-auto
            md:translate-x-0
            md:-translate-y-1/2
            md:px-0
            md:text-left
          "
          style={{
            opacity: titleOpacity,
          }}
        >
          <div
            className="
              text-[clamp(3.2rem,17vw,5rem)]
              font-bold
              leading-[0.82]
              tracking-[-0.06em]

              md:text-[clamp(3rem,7vw,8rem)]
              md:leading-[0.9]
              md:tracking-[-0.05em]
            "
          >
            <div>Smart</div>
            <div>Electric</div>
            <div>Mobility</div>
          </div>
        </motion.div>

        {/* =====================================================
            RIGHT CONTENT / MOBILE CTA
            ===================================================== */}

        <motion.div
          className="
            absolute
            z-20

            bottom-[13%]
            left-0
            right-0

            mx-auto
            w-full
            max-w-[600px]

            px-5

            text-center
            text-white

            md:bottom-auto
            md:left-auto
            md:right-[4%]
            md:top-1/2
            md:w-[42vw]
            md:max-w-[520px]
            md:-translate-y-1/2
            md:px-0

            lg:right-[8%]
          "
          style={{
            opacity: logoOpacity,
          }}
        >
          {/* Main heading */}

          <div
            className="
              text-[clamp(1.8rem,9vw,2.7rem)]
              font-bold
              leading-[1.05]
              tracking-[-0.05em]

              md:text-[clamp(1.5rem,3vw,3.5rem)]
              md:leading-[1.1]
            "
          >
            <div>Worried about</div>
            <div>Rising Petrol</div>
            <div>Prices?</div>
          </div>

          {/* Subheading */}

          <div
            className="
              mt-4

              text-[0.85rem]
              font-semibold
              uppercase
              leading-[1.25]
              tracking-[0.02em]

              md:mt-6
              md:text-[clamp(1rem,1.5vw,1.5rem)]
              md:leading-[1.2]
            "
          >
            Introducing All-Inclusive
            <br />
            <span className="text-[#15110d]">eBike Subscriptions</span>
          </div>

          {/* CTA */}

          <a
            href="#subscriptions"
            className="
              pointer-events-auto
              mt-6
              inline-flex
              items-center
              justify-center

              rounded-full
              bg-[#15110d]

              px-6
              py-3

              text-[0.9rem]
              font-bold
              tracking-[0.02em]
              text-white

              no-underline

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-black

              md:mt-8
              md:px-7
              md:py-3.5
              md:text-[clamp(0.9rem,1.2vw,1.2rem)]
            "
          >
            Start Saving Now →
          </a>
        </motion.div>

        {/* =====================================================
            DESKTOP VEHICLE SHOWCASE / CAROUSEL

            Completely removed on mobile.
            ===================================================== */}

        {!isMobile && (
          <motion.div
            className="
              absolute
              right-0
              top-0
              z-20

              h-full
              w-[65%]

              pointer-events-auto

              lg:w-[60%]
            "
            style={{
              opacity: carouselOpacity,
            }}
          >
            <VehicleShowcase scrollProgress={scrollYProgress} />
          </motion.div>
        )}
      </div>
    </section>
  );
}
