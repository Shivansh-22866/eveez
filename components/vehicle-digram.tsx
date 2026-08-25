import { motion, MotionValue, useTransform } from "framer-motion";
import VehicleModel from "./moped-scene";

type VehicleDiagramProps = {
  scrollProgress: MotionValue<number>;
};

export default function VehicleDiagram({
  scrollProgress,
}: VehicleDiagramProps) {
  const modelY = useTransform(
    scrollProgress,
    [0.7, 0.9],
    ["80px", "0px"]
  );

  const modelOpacity = useTransform(
    scrollProgress,
    [0.7, 1],
    [0, 1]
  );

  const calloutOpacity = useTransform(
    scrollProgress,
    [0.78, 0.84],
    [0, 1]
  );

  return (
    <div className="relative h-[75vh] w-full max-w-7xl">
      <motion.div
        style={{
          y: modelY,
          opacity: modelOpacity,
        }}
        className="absolute inset-0"
      >
        <VehicleModel />
      </motion.div>

      <motion.div
        style={{ opacity: calloutOpacity }}
        className="pointer-events-none absolute inset-0"
      >
        <FeatureCallouts />
      </motion.div>
    </div>
  );
}

function FeatureCallouts() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 700"
      fill="none"
    >
      <motion.path
        d="M 300 220 L 150 130 L 50 130"
        stroke="currentColor"
        strokeWidth="1"
        className="text-foreground/60"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        animate={{
          pathLength: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.15,
        }}
      />

      <motion.path
        d="M 760 270 L 940 180 L 1130 180"
        stroke="currentColor"
        strokeWidth="1"
        className="text-foreground/60"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        animate={{
          pathLength: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
      />

      <motion.path
        d="M 700 430 L 900 520 L 1120 520"
        stroke="currentColor"
        strokeWidth="1"
        className="text-foreground/60"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        animate={{
          pathLength: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.45,
        }}
      />
    </svg>
  );
}