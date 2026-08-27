import { CTA, Footer, Header, Metrics, PageShell, SectionHeading } from "@/components/site";
export default function About() {
  return (
    <>
      <Header/>
      {/* <PageShell
        label="About Eveez"
        title="We move people toward possibility."
        intro="Eveez began with a simple belief: the right vehicle can change the trajectory of a life. Today, we are building the platform to make that belief accessible at scale."
      >
        <div></div>
      </PageShell> */}
        <div className="mx-auto flex min-h-[58vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-36 lg:px-10">
          <p className="eyebrow text-primary">About Eveez</p>
          <h1 className="mt-5 max-w-4xl text-balance text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            We move people toward possibility.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-7 opacity-70">
            Eveez began with a simple belief: the right vehicle can change the trajectory of a life. Today, we are building the platform to make that belief accessible at scale.
          </p>
        </div>
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

      <Footer/>
    </>
  );
}
