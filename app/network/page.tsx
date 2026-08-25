import { MapPin } from "lucide-react";
import {
  Metrics,
  NetworkVisual,
  PageShell,
  SectionHeading,
} from "@/components/site";
const cities = [
  "Gurugram",
  "Dehradun",
  "Manali",
  "Bengaluru",
  "Jaipur",
  "Kochi",
  "Pune",
  "Hyderabad",
  "Lucknow",
  "Chandigarh",
];
export default function Network() {
  return (
    <>
      <PageShell
        label="Our network"
        title="Where opportunity connects."
        intro="Our footprint is more than a map. It is a living network of hubs, vehicles and people making electric work possible."
      >
        <div></div>
      </PageShell>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Metrics
          items={[
            ["25+", "Cities"],
            ["80+", "Hubs"],
            ["55+", "Franchises"],
            ["15,000+", "Vehicles"],
          ]}
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <NetworkVisual />
          <div className="rounded-2xl bg-card p-8">
            <SectionHeading
              eyebrow="Live footprint"
              title="Growing by design."
            />
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {cities.map((city, i) => (
                <div
                  key={city}
                  className="flex items-center gap-2 border-b border-border pb-3 text-sm"
                >
                  <MapPin size={15} className="text-primary" />
                  {city}
                  <span className="ml-auto font-mono text-[10px] text-muted-foreground">
                    {(i % 3) + 2} hubs
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
