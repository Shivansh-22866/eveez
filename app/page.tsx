"use client"

import Link from "next/link";
import {
  ArrowUpRight,
  BatteryCharging,
  BriefcaseBusiness,
  CircleDollarSign,
  Route,
} from "lucide-react";
import {
  Footer,
  Header,
  Metrics,
  Pill,
  SectionHeading,
} from "@/components/site";
import { useRef } from "react";
import { motion } from "framer-motion";
import VehicleModel from "@/components/moped-scene";
import { WorldMap } from "@/components/ui/world-map";

/* ------------------------------------------------------------------ */
/*  SHARED MOTION VARIANTS                                              */
/*  A handful of restrained, reused patterns rather than one-off        */
/*  tweaks per section, so the page reads as a single considered pass.  */
/* ------------------------------------------------------------------ */

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const stagger = (delayChildren = 0, staggerChildren = 0.12) => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren },
  },
});

const viewport = { once: true, amount: 0.3 as const };

const CITIES = [
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Haryana",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Indore",
  "Bhopal",
];

function Marquee() {
  const doubled = [...CITIES, ...CITIES];
  return (
    <div className="relative overflow-hidden border-y border-border py-5">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((city, i) => (
          <span
            key={`${city}-${i}`}
            className="flex items-center gap-10 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/60"
          >
            {city}
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Home() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <>
      <main>
        <section
          ref={sectionRef}
          className="relative h-screen md:h-[1900vh] lg:h-[2600vh] bg-primary text-primary-foreground"
        >
          <div className="sticky top-0 h-screen overflow-hidden">
            <Header dark />

            <VehicleModel />
          </div>
        </section>

        {/* =====================================================
            WHAT WE DO
            ===================================================== */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
          >
            <SectionHeading
              eyebrow="What we do"
              title="Mobility is access. Access is opportunity."
            >
              We build and operate the electric mobility infrastructure that
              helps people get to work, earn more and go further.
            </SectionHeading>
          </motion.div>

          <motion.div
            className="grid gap-4 md:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0.1)}
          >
            {[
              [
                "01",
                "Vehicles that work",
                "Reliable, affordable electric vehicles designed for everyday livelihoods.",
                BatteryCharging,
              ],
              [
                "02",
                "A network that grows",
                "Hubs, service and support where people need it most.",
                Route,
              ],
              [
                "03",
                "More ways to earn",
                "An ecosystem built around riders, partners and local businesses.",
                CircleDollarSign,
              ],
            ].map(([n, t, d, I]) => (
              <motion.div
                key={n as string}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group rounded-2xl bg-card p-7 shadow-[0_0_0_1px_rgba(0,0,0,0.04)] transition-colors duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-primary group-hover:text-foreground">
                    {n as string}
                  </span>
                  {I && (
                    <I
                      size={24}
                      className="text-primary transition-transform duration-300 group-hover:rotate-12 group-hover:text-foreground"
                    />
                  )}
                </div>
                <h3 className="mt-20 text-2xl font-bold tracking-tight">
                  {t as string}
                </h3>
                <p className="mt-3 text-sm leading-6 opacity-60">
                  {d as string}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* =====================================================
            SCALE / METRICS
            ===================================================== */}
        <section className="bg-foreground px-6 py-20 text-primary-foreground lg:px-10">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={fadeUp}
            >
              <SectionHeading eyebrow="Our scale" title="Already in motion." />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={stagger(0.15, 0.08)}
            >
              <Metrics
                items={[
                  ["15,000+", "Vehicles on road"],
                  ["25+", "Cities reached"],
                  ["55+", "Franchise partners"],
                  ["1.2M+", "Rider trips"],
                ]}
              />
            </motion.div>
          </div>
        </section>

        {/* A quiet strip of the cities the network already reaches --
            picks up the map below and keeps the page moving between
            two dense sections without adding new information. */}
        <Marquee />

        {/* =====================================================
            FOOTPRINT / NETWORK MAP
            ===================================================== */}
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.1fr] lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={stagger(0)}
          >
            <motion.div variants={fadeUp}>
              <Pill>Footprint / 01</Pill>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-6 text-5xl font-black leading-none tracking-[-0.06em] md:text-7xl"
            >
              A national
              <br />
              <span className="text-primary">network.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md leading-7 text-muted-foreground"
            >
              From mountain towns to India&apos;s fastest-growing cities, our
              network brings dependable electric mobility closer to
              opportunity.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/network"
                className="group mt-8 inline-flex items-center gap-2 font-bold uppercase tracking-widest text-primary"
              >
                Explore the network
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: EASE }}
            className="
              relative
              w-full
              max-w-[600px]
              aspect-[2/1]
              overflow-clip

              mx-auto

              sm:w-[90%]
              md:w-[600px]
            "
          >
            <WorldMap
              lineColor="#FF5634"
              full
              dots={[
                {
                  start: {
                    lat: 46.4519,
                    lng: -12.0418,
                  },
                  end: {
                    lat: 41.4519,
                    lng: -17.9,
                    label: "Haryana",
                  },
                },
                {
                  start: {
                    lat: -44.4834,
                    lng: -28.3936,
                  },
                  end: {
                    lat: -35.9117,
                    lng: -2.6433,
                    label: "Hyderabad",
                  },
                },
                {
                  end: {
                    lat: 46.4519,
                    lng: -12.0418,
                    label: "Delhi",
                  },
                  start: {
                    lat: -35.9117,
                    lng: -2.6433,
                  },
                },
                {
                  start: {
                    lat: 41.4519,
                    lng: -17.9,
                  },
                  end: {
                    lat: -44.4834,
                    lng: -28.3936,
                    label: "Bangalore",
                  },
                },
              ]}
            />
          </motion.div>
        </section>

        {/* =====================================================
            WHY IT MATTERS
            ===================================================== */}
        <section className="bg-muted px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={fadeUp}
            >
              <SectionHeading
                eyebrow="Why it matters"
                title="Every vehicle carries a possibility."
              />
            </motion.div>
            <motion.div
              className="grid gap-8 md:grid-cols-2"
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={stagger(0.1)}
            >
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="rounded-2xl bg-primary p-8 text-primary-foreground md:p-12"
              >
                <BriefcaseBusiness size={32} />
                <p className="mt-24 max-w-lg text-3xl font-bold leading-tight tracking-tight">
                  When mobility becomes affordable, livelihoods become
                  possible.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="flex flex-col justify-between rounded-2xl bg-card p-8 md:p-12"
              >
                <p className="max-w-md text-2xl font-bold leading-tight">
                  We are building the operating system for everyday electric
                  work.
                </p>
                <Link
                  href="/impact"
                  className="group mt-12 flex items-center gap-2 font-bold uppercase tracking-widest text-primary"
                >
                  See our impact
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            CLOSING CTA
            ===================================================== */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
          >
            <SectionHeading
              eyebrow="The opportunity"
              title="Build the next chapter with us."
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
            className="flex flex-col justify-between gap-8 border-t border-border pt-8 md:flex-row"
          >
            <p className="max-w-md text-lg leading-7 text-muted-foreground">
              Join a growing ecosystem of franchise partners powering electric
              mobility in their communities.
            </p>
            <Link
              href="/franchise"
              className="group flex items-center gap-2 font-bold uppercase tracking-widest text-primary"
            >
              Explore franchising
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}