import { Check } from "lucide-react";
import { CTA, Header, SectionHeading } from "@/components/site";
export default function Franchise() {
  return (
    <>
      <Header dark />
      {/* <PageShell
        dark
        label="Franchise with Eveez"
        title="Own the movement."
        intro="Bring reliable electric mobility to your city, with a proven model and a partner who stays in motion with you."
      >
        <div></div>
      </PageShell> */}

      <section className="w-full bg-foreground text-primary-foreground">
        <div className="mx-auto flex min-h-[58vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-36 lg:px-10">
          <p className="eyebrow text-primary">Franchise with Eveez</p>
          <h1 className="mt-5 max-w-4xl text-balance text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            Own the movement.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-7 opacity-70">
            Bring reliable electric mobility to your city, with a proven model and a partner who stays in motion with you.
          </p>
        </div>
      </section>
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
