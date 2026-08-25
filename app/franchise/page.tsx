import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { CTA, PageShell, SectionHeading } from "@/components/site";
export default function Franchise() {
  return (
    <>
      <PageShell
        dark
        label="Franchise with VEHZ"
        title="Own the movement."
        intro="Bring reliable electric mobility to your city, with a proven model and a partner who stays in motion with you."
      >
        <div></div>
      </PageShell>
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionHeading
          eyebrow="Why VEHZ"
          title="A head start in a high-growth market."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "An established network of 15,000+ vehicles",
            "Operating support from setup to scale",
            "Technology, brand and ecosystem included",
            "A purpose-led opportunity built for demand",
          ].map((x) => (
            <div className="flex gap-4 rounded-xl bg-card p-6" key={x}>
              <Check className="shrink-0 text-primary" />
              <p className="font-bold">{x}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-muted px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The journey"
            title="From enquiry to impact."
          />
          <div className="grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-3 lg:grid-cols-6">
            {[
              "Enquire",
              "Discuss",
              "Select location",
              "Setup",
              "Launch",
              "Scale",
            ].map((x, i) => (
              <div className="bg-card p-5" key={x}>
                <p className="font-mono text-primary">0{i + 1}</p>
                <p className="mt-10 text-sm font-bold">{x}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-black tracking-tight">
                You bring the ambition.
              </h3>
              <p className="mt-4 leading-7 text-muted-foreground">
                Local knowledge, operating energy and the drive to build a
                business that matters.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-black tracking-tight">
                We bring the engine.
              </h3>
              <p className="mt-4 leading-7 text-muted-foreground">
                Vehicles, systems, rider acquisition, brand support and a
                playbook that keeps improving.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA title="Ready to own the movement?" />
    </>
  );
}
