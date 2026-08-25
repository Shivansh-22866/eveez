import { ArrowUpRight } from "lucide-react";
import { CTA, Metrics, PageShell, SectionHeading } from "@/components/site";
export default function Impact() {
  return (
    <>
      <PageShell
        label="Impact"
        title="Movement creates momentum."
        intro="Mobility is not just about moving people. It enables people to work, earn and access opportunity."
      >
        <div></div>
      </PageShell>
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionHeading
          eyebrow="Measured movement"
          title="The numbers behind the change."
        />
        <Metrics
          items={[
            ["15,000+", "Riders enabled"],
            ["12M+", "Km travelled"],
            ["2.8M L", "Fuel saved"],
            ["6.5K t", "CO₂ avoided"],
          ]}
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-foreground p-8 text-primary-foreground md:p-12">
            <p className="eyebrow text-primary">A rider’s day</p>
            <p className="mt-20 text-3xl font-bold leading-tight">
              “With my VEHZ, I spend less on fuel and more time earning.”
            </p>
            <p className="mt-8 font-mono text-xs uppercase tracking-widest text-primary-foreground/50">
              — Rajesh / Delivery partner / Gurugram
            </p>
          </div>
          <div className="rounded-2xl bg-primary p-8 text-primary-foreground md:p-12">
            <p className="eyebrow text-foreground">Our point of view</p>
            <p className="mt-20 text-3xl font-bold leading-tight">
              The cleanest vehicle is the one that makes a living possible.
            </p>
            <p className="mt-8 text-sm leading-6 text-primary-foreground/70">
              We measure impact where it is felt: in household income, operating
              costs, access and air quality.
            </p>
          </div>
        </div>
      </section>
      <CTA title="Make movement matter." />
    </>
  );
}
