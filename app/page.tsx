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
import VehicleModel from "@/components/moped-scene";
import { WorldMap } from "@/components/ui/world-map";

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

            <VehicleModel/>

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
          {/* <NetworkVisual /> */}
<div
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
</div>
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
