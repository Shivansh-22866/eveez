import { CTA, Metrics, PageShell, SectionHeading } from "@/components/site";
export default function About() {
  return (
    <>
      <PageShell
        label="About VEHZ"
        title="We move people toward possibility."
        intro="VEHZ began with a simple belief: the right vehicle can change the trajectory of a life. Today, we are building the platform to make that belief accessible at scale."
      >
        <div></div>
      </PageShell>
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionHeading eyebrow="Our story" title="From play to purpose." />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [
              "2016",
              "Let’s Play",
              "Electric bicycle rentals begin in the Himalayas.",
            ],
            [
              "2020",
              "Electric mobility",
              "We build the operating model for work-ready EVs.",
            ],
            [
              "Today",
              "Livelihoods",
              "A growing national network connects mobility with earning.",
            ],
          ].map(([y, t, d]) => (
            <div className="border-t-2 border-primary pt-5" key={y}>
              <p className="font-mono text-primary">{y}</p>
              <h3 className="mt-12 text-2xl font-bold">{t}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {d}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-foreground px-6 py-24 text-primary-foreground lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What guides us"
            title="A business built around forward motion."
          />
          <Metrics
            items={[
              ["15,000+", "Vehicles"],
              ["25+", "Cities"],
              ["55+", "Franchises"],
              ["1.2M+", "Trips enabled"],
            ]}
          />
        </div>
      </section>
      <CTA title="Let’s build what’s next." />
    </>
  );
}
