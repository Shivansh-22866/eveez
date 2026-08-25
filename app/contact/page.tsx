"use client";
import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Footer, Header } from "@/components/site";
export default function Contact() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <>
      <main className="bg-muted">
        <Header />
        <div className="mx-auto grid min-h-screen max-w-7xl gap-16 px-6 pb-20 pt-40 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
          <div>
            <p className="eyebrow text-primary">Contact VEHZ</p>
            <h1 className="mt-5 text-6xl font-black leading-[.9] tracking-[-.07em] md:text-8xl">
              Let&apos;s move
              <br />
              <span className="text-primary">forward.</span>
            </h1>
            <p className="mt-8 max-w-sm leading-7 text-muted-foreground">
              Have a question, an idea or a city in mind? Tell us where you want
              to go.
            </p>
            <div className="mt-12 flex flex-col gap-4 text-sm">
              <a
                href="mailto:hello@vehz.in"
                className="flex items-center gap-3"
              >
                <Mail size={17} className="text-primary" /> hello@vehz.in
              </a>
              <a href="tel:+911244500000" className="flex items-center gap-3">
                <Phone size={17} className="text-primary" /> +91 124 450 0000
              </a>
              <span className="flex items-center gap-3">
                <MapPin size={17} className="text-primary" /> Gurugram, India
              </span>
            </div>
          </div>
          <form
            onSubmit={submit}
            className="self-end rounded-2xl bg-card p-7 shadow-sm md:p-10"
          >
            {sent ? (
              <div className="flex min-h-[420px] flex-col justify-center">
                <p className="eyebrow text-primary">Message received</p>
                <h2 className="mt-5 text-5xl font-black tracking-[-.06em]">
                  We&apos;ll be in touch.
                </h2>
                <p className="mt-5 text-muted-foreground">
                  Thanks for reaching out to VEHZ.
                </p>
              </div>
            ) : (
              <>
                <p className="eyebrow text-primary">Start here</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight">
                  What can we help with?
                </h2>
                <div className="mt-8 grid gap-5">
                  {[
                    ["name", "Your name", "text"],
                    ["email", "Email address", "email"],
                    ["message", "Tell us a little more", "textarea"],
                  ].map(([id, ph, type]) => (
                    <div key={id}>
                      <label htmlFor={id} className="sr-only">
                        {ph}
                      </label>
                      {type === "textarea" ? (
                        <textarea
                          id={id}
                          required
                          placeholder={ph}
                          rows={4}
                          className="w-full resize-none border-b border-border bg-transparent px-0 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
                        />
                      ) : (
                        <input
                          id={id}
                          required
                          type={type}
                          placeholder={ph}
                          className="w-full border-b border-border bg-transparent px-0 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
                        />
                      )}
                    </div>
                  ))}
                  <select
                    aria-label="Enquiry type"
                    className="w-full border-b border-border bg-transparent px-0 py-3 text-sm outline-none"
                  >
                    <option>Franchise enquiry</option>
                    <option>Business partnership</option>
                    <option>Investor enquiry</option>
                    <option>General question</option>
                  </select>
                  <button className="mt-4 flex w-fit items-center gap-3 rounded-full bg-primary px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                    Send enquiry <ArrowUpRight size={17} />
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
