"use client";

import * as THREE from "three";
import {
  Canvas,
  ThreeElements,
  useFrame,
} from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import {
  useScroll,
  useMotionValueEvent,
  useTransform,
  useSpring,
  motion,
  MotionValue,
  Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import VehicleShowcase from "./vehicle-showcase";

/* ------------------------------------------------------------------ */
/*  3D VEHICLE                                                         */
/*  Scroll progress is run through a spring so the model settles into  */
/*  each pose instead of snapping frame-to-frame with the scrollbar.   */
/* ------------------------------------------------------------------ */

function Vehicle({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { scene } = useGLTF("/4B2AAPMTY5BZGZG6Z3WSJKS26.glb");

  const vehicleRef = useRef<ThreeElements["primitive"]>(null);
  const rawProgress = useTransform(scrollYProgress, (v) => Math.min(v / 0.55, 1));
  const progress = useSpring(rawProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.6,
  });

  const value = useRef(0);
  useMotionValueEvent(progress, "change", (v) => {
    value.current = v;
  });

  useFrame(() => {
    if (!vehicleRef.current) return;

    const t = value.current;

    vehicleRef.current.position.x = 0;
    vehicleRef.current.position.y = Math.sin(t * Math.PI) * 0.08;
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

function CameraController({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    mass: 0.7,
  });
  const progress = useRef(0);

  useMotionValueEvent(smoothProgress, "change", (v) => {
    progress.current = v;
  });

  useFrame(({ camera }) => {
    const t = progress.current;
    const perspectiveCamera = camera as THREE.PerspectiveCamera;

    // Start at 25, finish at 15 -- a gentle dolly-in as the model turns.
    perspectiveCamera.fov = 25 - 10 * t;
    perspectiveCamera.updateProjectionMatrix();
  });

  return null;
}

/* ------------------------------------------------------------------ */
/*  FEATURE CALLOUTS                                                    */
/*  Each label owns a narrow window of the scroll track and fades/     */
/*  drifts into place as the model rotates past it, then clears out    */
/*  before the next one arrives. One component per item keeps the      */
/*  hook order stable across a fixed-length array.                     */
/* ------------------------------------------------------------------ */

type Feature = {
  title: string;
  description: string;
  position: React.CSSProperties;
};

function FeatureCallout({
  feature,
  index,
  scrollYProgress,
}: {
  feature: Feature;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = 0.2 + index * 0.075;
  const peak = start + 0.035;
  const end = start + 0.09;

  const opacity = useTransform(
    scrollYProgress,
    [start, peak, end, end + 0.03],
    [0, 1, 1, 0],
  );
  const x = useTransform(scrollYProgress, [start, peak], [16, 0], {
    clamp: true,
  });

  return (
    <motion.div
      className="pointer-events-none absolute hidden max-w-[220px] md:block"
      style={{ ...feature.position, opacity, x }}
    >
      <div className="flex items-start gap-3">
        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.04em] text-white">
            {feature.title}
          </div>
          <div className="mt-1 text-xs leading-5 text-white/70">
            {feature.description}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN SECTION                                                        */
/* ------------------------------------------------------------------ */

const titleLine: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { delay: 0.15 + i * 0.09, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  }),
};

const ctaContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.5 },
  },
};

const ctaChild: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

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
    [0, 0.16, 0.6, 1],
    [1, 0, 0, 0],
    { clamp: true },
  );

  const carouselOpacity = useTransform(
    scrollYProgress,
    [0.14, 0.22, 0.6, 1],
    [0, 1, 1, 1],
    { clamp: true },
  );

  const logoOpacity = useTransform(scrollYProgress, [0, 0.16, 1], [1, 0, 0], {
    clamp: true,
  });

  const features: Feature[] = [
    {
      title: "Premium Design",
      description: "A sleek and aerodynamic exterior",
      position: { top: "10%", right: "10%" },
    },
    {
      title: "Long Range",
      description: "Go further on every charge",
      position: { top: "10%", right: "30%" },
    },
    {
      title: "Smart Technology",
      description: "Connected features built around you",
      position: { top: "10%", right: "50%" },
    },
    {
      title: "Fast Charging",
      description: "Spend less time charging",
      position: { top: "10%", right: "70%" },
    },
    {
      title: "Advanced Safety",
      description: "Protection wherever you go",
      position: { top: "10%", right: "90%" },
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
          <motion.div
            className="absolute inset-0 z-[1] h-full w-full"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
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

              <Vehicle scrollYProgress={scrollYProgress} />

              <CameraController scrollYProgress={scrollYProgress} />

              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={true}
              />
            </Canvas>

            {/* Scroll-linked feature callouts, layered over the canvas */}
            <div className="pointer-events-none absolute inset-0 z-10">
              {features.map((feature, i) => (
                <FeatureCallout
                  key={feature.title}
                  feature={feature}
                  index={i}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </motion.div>
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
            {["Smart", "Electric", "Mobility"].map((line, i) => (
              <div key={line} className="">
                <motion.div
                  custom={i}
                  variants={titleLine}
                  initial="hidden"
                  animate="show"
                >
                  {line}
                </motion.div>
              </div>
            ))}
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
            md:right-[0%]
            md:top-1/2
            md:w-[42vw]
            md:max-w-[520px]
            md:-translate-y-1/2
            md:px-0

            lg:right-[4%]
          "
          style={{
            opacity: logoOpacity,
          }}
          variants={ctaContainer}
          initial="hidden"
          animate="show"
        >
          {/* Main heading */}

          <motion.div
            variants={ctaChild}
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
          </motion.div>

          {/* Subheading */}

          <motion.div
            variants={ctaChild}
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
          </motion.div>

          {/* CTA */}

          <motion.a
            href="#subscriptions"
            variants={ctaChild}
            whileHover={{ y: -3, backgroundColor: "#000000" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
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

              md:mt-8
              md:px-7
              md:py-3.5
              md:text-[clamp(0.9rem,1.2vw,1.2rem)]
            "
          >
            Start Saving Now →
          </motion.a>
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

        {/* =====================================================
            SCROLL CUE
            Only relevant while the title is still on screen.
            ===================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            bottom-8
            left-1/2
            z-10
            -translate-x-1/2
            text-white/70
          "
          style={{ opacity: titleOpacity }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em]">
              Scroll
            </span>
            <span className="h-8 w-px bg-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}