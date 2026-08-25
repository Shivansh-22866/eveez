import { CTA, PageShell, SectionHeading } from "@/components/site";
const people = [
  [
    "Amit Kumar",
    "Founder & CEO",
    "Building the infrastructure for everyday electric work.",
  ],
  [
    "Riya Mehta",
    "Co-founder & COO",
    "Turning local operating insight into a national playbook.",
  ],
  [
    "Arjun Singh",
    "Head of Network",
    "Growing a network partners can believe in.",
  ],
  [
    "Neha Kapoor",
    "Head of People",
    "Making the mission human, inside and out.",
  ],
  [
    "Vikram Rao",
    "Head of Product",
    "Creating tools that make every ride count.",
  ],
  ["Sara Thomas", "Partnerships Lead", "Connecting ambition with opportunity."],
];
export default function Team() {
  return (
    <>
      <PageShell
        label="The people"
        title="Serious about the work. Human about the way."
        intro="We are operators, builders and believers in the compounding power of a good opportunity."
      >
        <div></div>
      </PageShell>
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionHeading
          eyebrow="Meet VEHZ"
          title="The team behind the movement."
        />
        <div className="grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {people.map(([n, r, d]) => (
            <article key={n}>
              <div className="flex aspect-[4/3] items-end rounded-2xl bg-secondary p-5">
                <span className="font-mono text-6xl font-bold tracking-[-0.1em] text-primary/80">
                  {n
                    .split(" ")
                    .map((x) => x[0])
                    .join("")}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{n}</h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-primary">
                {r}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {d}
              </p>
            </article>
          ))}
        </div>
      </section>
      <CTA title="Come build with us." />
    </>
  );
}
