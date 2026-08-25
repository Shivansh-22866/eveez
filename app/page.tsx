"use client"

import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  BatteryCharging,
  BriefcaseBusiness,
  CircleDollarSign,
  Route,
  Zap,
} from "lucide-react";
import {
  CTA,
  Footer,
  Header,
  Metrics,
  NetworkVisual,
  Pill,
  SectionHeading,
} from "@/components/site";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import VehicleShowcase from "@/components/vehicle-showcase";

export default function Home() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

// HEADLINE
const headlineX = useTransform(
  scrollYProgress,
  [0, 0.12, 0.32],
  ["0%", "0%", "-120%"]
);

const headlineOpacity = useTransform(
  scrollYProgress,
  [0.12, 0.38],
  [1, 0]
);

// ZAP
const zapX = useTransform(
  scrollYProgress,
  [0.28, 0.3, 0.4, 0.5, 1],
  ["35vw", "35vw", "0vw", "0vw", "0vw"],
  { clamp: true }
);

const zapScale = useTransform(
  scrollYProgress,
  [0.28, 0.3, 0.4, 0.5, 0.6, 1],
  [1, 1, 7, 15, 15, 15],
  { clamp: true }
);

const zapOpacity = useTransform(
  scrollYProgress,
  [0.28, 0.3, 0.4, 0.6, 1],
  [1, 1, 0, 0, 0],
  { clamp: true }
);

// VEHICLE
const diagramOpacity = useTransform(
  scrollYProgress,
  [0.5, 0.64, 0.92, 0.97],
  [0, 1, 1, 0],
  { clamp: true }
);

const diagramScale = useTransform(
  scrollYProgress,
  [0.55, 0.64],
  [0.8, 1],
  { clamp: true }
);

const diagramY = useTransform(
  scrollYProgress,
  [0.5, 0.64],
  [100, 0],
  { clamp: true }
);



  
  return (
    <>
      <main>
        <section
          ref={sectionRef}
          className="relative h-[600vh] bg-primary text-primary-foreground"
        >
          <div className="sticky top-0 h-screen overflow-hidden">
            <Header dark />

            {/* -------------------------------- */}
            {/* PHASE 1 + 2 — HERO */}
            {/* -------------------------------- */}

            <motion.div
              style={{
                x: headlineX,
                opacity: headlineOpacity,
              }}
              className="absolute inset-0 z-10 flex items-end"
            >
              <div className="mx-auto w-full max-w-7xl px-6 pb-64 lg:px-10">
                <div className="max-w-5xl">
                  <p className="eyebrow mb-6">
                    Electric mobility / India / 2026
                  </p>

                  <h1 className="text-balance text-[clamp(4.5rem,7vw,8rem)] font-black leading-[0.78] tracking-[-0.09em]">
                    Smart Electric
                    <br />
                    <span className="text-foreground">
                      Mobility.
                    </span>
                  </h1>

                  <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
                    <p className="max-w-sm text-lg leading-7 text-primary-foreground/80">
                      Eveez makes electric mobility work for everyone —
                      riders, entrepreneurs and the businesses that keep
                      India moving.
                    </p>

                    <a
                      href="/about"
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground"
                    >
                      Discover Eveez
                      <ArrowDownRight size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* -------------------------------- */}
            {/* ZAP TRANSITION */}
            {/* -------------------------------- */}

            <motion.div
              style={{
                x: zapX,
                scale: zapScale,
                opacity: zapOpacity,
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-foreground/30"
            >
              <div className="absolute inset-10 rounded-full border border-primary-foreground/30" />

              <motion.div
                style={{
                  rotate: useTransform(
                    scrollYProgress,
                    [0.35, 0.7],
                    [0, 180]
                  ),
                }}
                className="absolute inset-0"
              >
                <Zap
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground"
                  size={48}
                />
              </motion.div>
            </motion.div>
            
            {/* -------------------------------- */}
            {/* PHASE 3 — VEHICLE SHOWCASE */}
            {/* -------------------------------- */}

            <motion.div
              style={{
                opacity: diagramOpacity,
                scale: diagramScale,
                translateY: diagramY,
              }}
              className="absolute inset-0 z-30"
            >
              <VehicleShowcase scrollProgress={scrollYProgress} />
            </motion.div>

          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionHeading
            eyebrow="What we do"
            title="Mobility is access. Access is opportunity."
          >
            We build and operate the electric mobility infrastructure that helps
            people get to work, earn more and go further.
          </SectionHeading>
          <div className="grid gap-4 md:grid-cols-3">
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
              <div
                key={n as string}
                className="group rounded-2xl bg-card p-7 transition hover:bg-primary hover:text-primary-foreground"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-primary group-hover:text-foreground">
                    {n as string}
                  </span>
                  {I && (
                    <I
                      size={24}
                      className="text-primary group-hover:text-foreground"
                    />
                  )}
                </div>
                <h3 className="mt-20 text-2xl font-bold tracking-tight">
                  {t as string}
                </h3>
                <p className="mt-3 text-sm leading-6 opacity-60">
                  {d as string}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-foreground px-6 py-20 text-primary-foreground lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Our scale" title="Already in motion." />
            <Metrics
              items={[
                ["15,000+", "Vehicles on road"],
                ["25+", "Cities reached"],
                ["55+", "Franchise partners"],
                ["1.2M+", "Rider trips"],
              ]}
            />
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.1fr] lg:px-10">
          <div>
            <Pill>Footprint / 01</Pill>
            <h2 className="mt-6 text-5xl font-black leading-none tracking-[-0.06em] md:text-7xl">
              A national
              <br />
              <span className="text-primary">network.</span>
            </h2>
            <p className="mt-6 max-w-md leading-7 text-muted-foreground">
              From mountain towns to India&apos;s fastest-growing cities, our
              network brings dependable electric mobility closer to opportunity.
            </p>
            <Link
              href="/network"
              className="mt-8 inline-flex items-center gap-2 font-bold uppercase tracking-widest text-primary"
            >
              Explore the network <ArrowUpRight size={17} />
            </Link>
          </div>
          <NetworkVisual />
        </section>
        <section className="bg-muted px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Why it matters"
              title="Every vehicle carries a possibility."
            />
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-primary p-8 text-primary-foreground md:p-12">
                <BriefcaseBusiness size={32} />
                <p className="mt-24 max-w-lg text-3xl font-bold leading-tight tracking-tight">
                  When mobility becomes affordable, livelihoods become possible.
                </p>
              </div>
              <div className="flex flex-col justify-between rounded-2xl bg-card p-8 md:p-12">
                <p className="max-w-md text-2xl font-bold leading-tight">
                  We are building the operating system for everyday electric
                  work.
                </p>
                <Link
                  href="/impact"
                  className="mt-12 flex items-center gap-2 font-bold uppercase tracking-widest text-primary"
                >
                  See our impact <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionHeading
            eyebrow="The opportunity"
            title="Build the next chapter with us."
          />
          <div className="flex flex-col justify-between gap-8 border-t border-border pt-8 md:flex-row">
            <p className="max-w-md text-lg leading-7 text-muted-foreground">
              Join a growing ecosystem of franchise partners powering electric
              mobility in their communities.
            </p>
            <Link
              href="/franchise"
              className="flex items-center gap-2 font-bold uppercase tracking-widest text-primary"
            >
              Explore franchising <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
