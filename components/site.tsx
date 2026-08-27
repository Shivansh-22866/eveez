"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X, MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";

export const navItems = [
  ["About", "/about"],
  ["Network", "/network"],
  ["Franchise", "/franchise"],
  ["Impact", "/impact"],
  ["Team", "/team"],
];

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`font-mono text-xl font-black tracking-[-0.12em] ${light ? "text-primary-foreground" : "text-foreground"}`}
      aria-label="VEHZ home"
    >
      Eveez<span className="text-primary">.</span>
    </Link>
  );
}

export function Header({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`sticky bg-primary/40 backdrop-blur-3xl inset-x-0 top-0 z-50 ${dark ? "text-primary-foreground" : "text-foreground"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Logo light={dark} />
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-xs font-bold uppercase tracking-[0.16em] opacity-75 transition hover:text-primary hover:opacity-100"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground transition hover:bg-primary/90"
          >
            Start a conversation <ArrowUpRight size={15} />
          </Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          className="mx-4 flex flex-col gap-5 rounded-2xl bg-card p-6 shadow-xl md:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map(([label, href]) => (
            <Link
              onClick={() => setOpen(false)}
              key={href}
              href={href}
              className="text-sm font-bold uppercase tracking-widest"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-3 text-center text-xs font-bold uppercase tracking-widest text-primary-foreground"
          >
            Start a conversation
          </Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-10">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/60">
            Mobility that moves livelihoods forward.
          </p>
          <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.22em] text-primary-foreground/40">
            © 2026 Eveez Mobility
          </p>
        </div>
        <div>
          <p className="eyebrow text-primary">Explore</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-primary-foreground/70">
            {navItems.map(([l, h]) => (
              <Link key={h} href={h} className="hover:text-primary">
                {l}
              </Link>
            ))}
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <p className="eyebrow text-primary">Connect</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-primary-foreground/70">
            <a href="mailto:hello@vehz.in" className="flex items-center gap-2">
              <Mail size={15} /> hello@vehz.in
            </a>
            <a href="tel:+911244500000" className="flex items-center gap-2">
              <Phone size={15} /> +91 124 450 0000
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={15} /> Gurugram, India
            </span>
          </div>
        </div>
        <div className="lg:text-right">
          <p className="eyebrow text-primary">Let&apos;s move</p>
          <Link
            href="/franchise"
            className="mt-5 inline-flex items-center gap-2 text-2xl font-bold tracking-tight hover:text-primary"
          >
            Become a partner <ArrowUpRight size={21} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({
  children,
  title,
  label,
  intro,
  dark = false,
}: {
  children: React.ReactNode;
  title: string;
  label: string;
  intro?: string;
  dark?: boolean;
}) {
  return (
    <>
      <section
        className={`relative overflow-hidden ${dark ? "bg-foreground text-primary-foreground" : "bg-muted"}`}
      >
        <Header dark={dark} />
        <div className="mx-auto flex min-h-[58vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-36 lg:px-10">
          <p className="eyebrow text-primary">{label}</p>
          <h1 className="mt-5 max-w-4xl text-balance text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-8 max-w-xl text-lg leading-7 opacity-70">
              {intro}
            </p>
          )}
        </div>
      </section>
      {children}
      <Footer />
    </>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p className="eyebrow text-primary">{eyebrow}</p>
        <h2 className="mt-4 max-w-2xl text-balance text-4xl font-black leading-none tracking-[-0.05em] md:text-6xl">
          {title}
        </h2>
      </div>
      {children && (
        <div className="max-w-sm text-sm leading-6 text-muted-foreground">
          {children}
        </div>
      )}
    </div>
  );
}

export function Metrics({ items }: { items: [string, string][] }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-4">
      {items.map(([value, label]) => (
        <div key={label} className="bg-card p-6 lg:p-8">
          <p className="font-mono text-4xl font-bold tracking-[-0.08em] text-primary md:text-5xl">
            {value}
          </p>
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.13em] text-muted-foreground">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

export function CTA({ title = "Move with us." }: { title?: string }) {
  return (
    <section className="bg-primary px-6 py-20 text-primary-foreground lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <h2 className="max-w-2xl text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
          {title}
        </h2>
        <Link
          href="/contact"
          className="flex shrink-0 items-center gap-3 rounded-full bg-foreground px-6 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition hover:bg-foreground/80"
        >
          Start a conversation <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
      {children}
    </span>
  );
}

export function NetworkVisual() {
  return (
    <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-2xl bg-foreground p-8 text-primary-foreground">
      <div className="network-grid absolute inset-0 opacity-20" />
      <div className="relative h-[320px] w-[240px] rotate-[-4deg] border-2 border-primary/80 [clip-path:polygon(31%_0,68%_6%,83%_20%,75%_34%,90%_49%,68%_64%,73%_83%,49%_100%,26%_88%,16%_70%,3%_58%,12%_40%,4%_22%,20%_13%)]">
        <span className="absolute left-[43%] top-[17%] h-3 w-3 rounded-full bg-primary shadow-[0_0_0_8px] shadow-primary/20" />
        <span className="absolute left-[30%] top-[48%] h-3 w-3 rounded-full bg-primary shadow-[0_0_0_8px] shadow-primary/20" />
        <span className="absolute left-[57%] top-[69%] h-3 w-3 rounded-full bg-primary shadow-[0_0_0_8px] shadow-primary/20" />
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-widest text-primary-foreground/50">
        Eveez / INDIA NETWORK
      </div>
    </div>
  );
}
