import {
  motion,
  MotionValue,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Battery, Gauge, Zap } from "lucide-react";

const vehicles = [
  {
    name: "SHINE Plan",
    type: "Unregistered",
    image: "https://www.eveez.in/image/supershine1.png",
    range: "100 km",
    speed: "Slow Speed eBike",
    battery: "1.7 kWh",
    description:
      "Built for everyday movement. Compact, efficient and ready for the city.",
    accent: "#D7FF3F",
  },
  {
    name: "SUPER SHINE Plan",
    type: "Unregistered",
    image: "https://www.eveez.in/image/supershine1.png",
    range: "120+ km",
    speed: "Slow Speed eBike",
    battery: "2 battery swaps/day",
    description:
      "More load. More distance. A smarter way to keep India's businesses moving.",
    accent: "#7CFFB2",
  },
  {
    name: "FLARE Plan",
    type: "Registered",
    image: "https://www.eveez.in/image/flare.png",
    range: "70+ km",
    speed: "High Speed eBike",
    battery: "2 kWh",
    description:
      "Longer range and stronger performance for riders who refuse to slow down.",
    accent: "#80E8FF",
  },
  {
    name: "SUPER FLARE Plan",
    type: "Registered",
    image: "https://www.eveez.in/image/superflare1.png",
    range: "120+ km",
    speed: "High Speed eBike",
    battery: "3 kWh",
    description:
      "Maximum range. Maximum utility. Designed for a new generation of mobility.",
    accent: "#FFDB6E",
  },
];

function VehicleShowcase({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  const vehicleCount = vehicles.length;

  /*
   * Phase 3 occupies roughly 0.55 → 0.95
   * of the overall page scroll.
   */
  const progress = useTransform(
    scrollProgress,
    [0.5, 1],
    [0, vehicleCount]
  );

  return (
    <div className="relative mx-auto flex h-full w-full max-w-[1600px] items-center px-6 lg:px-10">
      {/* Background detail */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.035] blur-3xl" />

        <div className="absolute left-10 top-1/2 h-px w-[calc(100%-5rem)] bg-primary-foreground/10" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-foreground/10" />
      </div>

      {/* Eyebrow */}
      <div className="absolute left-6 top-28 z-20 lg:left-10">
        <p className="eyebrow text-primary-foreground/60">
          The VEHZ range
        </p>
      </div>

      {/* Vehicle slides */}
      <div className="relative z-10 w-full">
        {vehicles.map((vehicle, index) => (
          <VehicleSlide
            key={vehicle.name}
            vehicle={vehicle}
            index={index}
            progress={progress}
          />
        ))}
      </div>

      {/* Vertical progress */}
      <VehicleProgress
        progress={progress}
        count={vehicleCount}
      />
    </div>
  );
}

function VehicleSlide({
  vehicle,
  index,
  progress,
}: {
  vehicle: (typeof vehicles)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const distance = useTransform(progress, (value) => value - index);

  const opacity = useTransform(
    distance,
    [-1, -0.35, 0, 0.35, 1],
    [0, 0, 1, 0, 0]
  );

  const scale = useTransform(
    distance,
    [-1, 0, 1],
    [0.82, 1, 0.82]
  );

  const x = useTransform(
    distance,
    [-1, 0, 1],
    [-180, 0, 180]
  );

  const imageY = useTransform(
    distance,
    [-1, 0, 1],
    [50, 0, -50]
  );

  const textY = useTransform(
    distance,
    [-1, 0, 1],
    [30, 0, -30]
  );

  return (
    <motion.div
      style={{
        opacity,
        pointerEvents: "none",
      }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <motion.div
        style={{
          x,
          scale,
        }}
        className="relative flex w-full flex-col items-center justify-center"
      >
        {/* Vehicle metadata */}
        <motion.div
          style={{ y: textY }}
          className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 lg:block"
        >
          <p
            className="mb-3 text-xs font-bold uppercase tracking-[0.25em]"
            style={{ color: vehicle.accent }}
          >
            {vehicle.type}
          </p>

          <h2 className="text-6xl font-black tracking-[-0.07em] xl:text-5xl">
            {vehicle.name}
          </h2>

          <p className="mt-6 max-w-xs text-sm leading-6 text-primary-foreground/60">
            {vehicle.description}
          </p>

          <button className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
            Explore vehicle
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20">
              <ArrowUpRight size={15} />
            </span>
          </button>
        </motion.div>

        {/* Vehicle */}
        <div className="relative flex h-[400px] w-full max-w-[850px] items-center justify-center md:h-[500px]">
          <motion.img
            src={vehicle.image}
            alt={vehicle.name}
            style={{
              y: imageY,
            }}
            className="relative z-10 max-h-full w-auto max-w-[90%] object-contain drop-shadow-[0_35px_80px_rgba(0,0,0,0.35)]"
          />

          {/* Feature indicators */}
          <FeatureIndicator
            icon={<Battery size={15} />}
            label="Battery"
            value={vehicle.battery}
            className="left-[20%] top-[4%]"
            accent={vehicle.accent}
          />

          <FeatureIndicator
            icon={<Gauge size={15} />}
            label="Top speed"
            value={vehicle.speed}
            className="right-[38%] top-[90%]"
            accent={vehicle.accent}
          />

          <FeatureIndicator
            icon={<Zap size={15} />}
            label="Range"
            value={vehicle.range}
            className="right-[18%] bottom-[88%]"
            accent={vehicle.accent}
          />
        </div>

        {/* Mobile title */}
        <div className="mt-4 text-center lg:hidden">
          <p
            className="mb-2 text-xs font-bold uppercase tracking-[0.25em]"
            style={{ color: vehicle.accent }}
          >
            {vehicle.type}
          </p>

          <h2 className="text-5xl font-black tracking-[-0.07em]">
            {vehicle.name}
          </h2>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FeatureIndicator({
  icon,
  label,
  value,
  className,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  className: string;
  accent: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`absolute z-20 hidden md:block ${className}`}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full border bg-primary/80 backdrop-blur-md"
          style={{
            borderColor: `${accent}55`,
            color: accent,
          }}
        >
          {icon}
        </div>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-foreground/40">
            {label}
          </p>

          <p className="mt-0.5 text-sm font-bold">
            {value}
          </p>
        </div>
      </div>

      {/* connector */}
      <div
        className="absolute left-1/2 top-9 h-10 w-px origin-top"
        style={{
          background: `linear-gradient(to bottom, ${accent}80, transparent)`,
        }}
      />
    </motion.div>
  );
}

const VehicleProgress = ({
  progress,
  count,
}: {
  progress: MotionValue<number>;
  count: number;
}) => {
  return (
    <div className="absolute right-6 top-1/2 z-40 -translate-y-1/2 lg:right-10">
      <div className="flex flex-col items-center gap-5">
        {Array.from({ length: count }).map((_, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const distance = useTransform(
            progress,
            (value) => Math.abs(value - index)
          );

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const width = useTransform(
            distance,
            [0, 0.5, 1],
            [28, 8, 8]
          );

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(
            distance,
            [0, 0.5, 1],
            [1, 0.45, 0.2]
          );

          return (
            <motion.div
              key={index}
              style={{
                width,
                opacity,
              }}
              className="h-1 rounded-full bg-foreground"
            />
          );
        })}
      </div>

      <motion.div
        className="mt-5 text-right text-[10px] font-bold tracking-[0.2em] text-primary-foreground/40"
      >
        <motion.span>
          0{1}
        </motion.span>

        <span className="mx-1">/</span>

        <span>0{count}</span>
      </motion.div>
    </div>
  );
}


export default VehicleShowcase