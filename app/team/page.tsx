import { CTA, Footer, Header, PageShell, SectionHeading } from "@/components/site";
const people = [
  {
    name: "Gaurav Rathore",
    role: "Co-Founder",
    description: "Building the infrastructure for everyday electric work.",
    image: "https://www.eveez.in/image/gourav.jpeg",
    contact: "https://www.linkedin.com/in/gaurav-rathore-2577395/"
  },
  {
    name: "Abhishek Dwivedi",
    role: "Co-Founder",
    description: "Turning local operating insight into a national playbook.",
    image: "https://www.eveez.in/image/abhishek.jpg",
    contact: "https://www.linkedin.com/in/abhishek-dwivedi-a4401915/"
  },
  {
    name: "Arjun Singh",
    role: "Head of Network",
    description: "Growing a network partners can believe in.",
    image: "",
    contact: ""
  },
  {
    name: "Neha Kapoor",
    role: "Head of People",
    description: "Making the mission human, inside and out.",
    image: "",
    contact: ""
  },
  {
    name: "Vikram Rao",
    role: "Head of Product",
    description: "Creating tools that make every ride count.",
    image: "",
    contact: ""
  },
  {
    name: "Sara Thomas", 
    role: "Partnerships Lead",
    description: "Connecting ambition with opportunity.",
    image: "",
    contact: ""
  },
];
export default function Team() {
  return (
    <>
      <Header/>
      {/* <PageShell
        label="The people"
        title="Serious about the work. Human about the way."
        intro="We are operators, builders and believers in the compounding power of a good opportunity."
      >
        <div></div>
      </PageShell> */}

      <div className="mx-auto flex min-h-[58vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-36 lg:px-10">
          <p className="eyebrow text-primary">The people</p>
          <h1 className="mt-5 max-w-4xl text-balance text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            Serious about the work. Human about the way.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-7 opacity-70">
            We are operators, builders and believers in the compounding power of a good opportunity.
          </p>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionHeading
          eyebrow="Meet VEHZ"
          title="The team behind the movement."
        />
<div className="grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
  {people.map((person) => {
    const {
      name,
      role,
      description,
      image,
      contact,
    } = person;

    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("");

    return (
      <article key={name} className="group">

        {/* Person Image / Initials */}
        <div className="flex aspect-[4/3] items-end overflow-hidden rounded-2xl bg-secondary">
          {image ? (
            <img
              src={image}
              alt={name}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />
          ) : (
            <div className="flex h-full w-full items-end p-5">
              <span
                className="
                  font-mono
                  text-6xl
                  font-bold
                  tracking-[-0.1em]
                  text-primary/80
                "
              >
                {initials}
              </span>
            </div>
          )}
        </div>

        {/* Name */}
        <h3 className="mt-5 text-xl font-bold">
          {name}
        </h3>

        {/* Role */}
        <p
          className="
            mt-1
            text-xs
            font-bold
            uppercase
            tracking-widest
            text-primary
          "
        >
          {role}
        </p>

        {/* Description */}
        <p
          className="
            mt-3
            text-sm
            leading-6
            text-muted-foreground
          "
        >
          {description}
        </p>

        {/* Optional Contact */}
        {contact && (
          <a
            href={contact}
            className="
              mt-4
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-primary
              transition-opacity
              hover:opacity-70
            "
          >
            Get in touch
            <span aria-hidden="true">→</span>
          </a>
        )}

      </article>
    );
  })}
</div>

      </section>
      <CTA title="Come build with us." />
      <Footer/>
    </>
  );
}
