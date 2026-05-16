"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThreeDoors />
      <WhyNow />
      <StatsBand />
      <QuoteBlock />
      <FinalCTA />
    </>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="hero-mesh text-white">
      <div className="hero-grain" aria-hidden="true" />
      <div className="container-wide relative z-10 py-24 md:py-36 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3">
          <p className="eyebrow text-gold animate-fade-in-up">
            After Louisiana v. Callais · April 29, 2026
          </p>

          <h1 className="headline-display text-white mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] animate-fade-in-up delay-100">
            The Voting Rights Act
            <br />
            was{" "}
            <span className="headline-gradient italic">hollowed</span> out.
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-gray-200 max-w-2xl font-light animate-fade-in-up delay-200">
            The work doesn&apos;t stop. A free, AI-powered toolkit for the
            voters, organizers, and campaigns defending Black political power in
            the 2026 midterms.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Link
              href="/voter/rights"
              className="group inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-md hover:bg-gold-dark transition-all hover:gap-3"
            >
              Check your rights
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/playbook"
              className="inline-flex items-center justify-center border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-navy transition-all"
            >
              Read the Playbook
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-gray-300 animate-fade-in delay-500">
            <span className="inline-block w-2 h-2 bg-gold rounded-full pulse-gold" />
            Built in the 14 days since Callais. Open source. Free forever.
          </div>
        </div>

        <div className="lg:col-span-2 animate-fade-in-up delay-400">
          <div className="bg-navy-dark/70 backdrop-blur-md border border-gold/30 rounded-2xl p-7 shadow-2xl">
            <p className="eyebrow text-gold mb-2">Election Protection Hotline</p>
            <p className="text-5xl font-bold mb-3 tracking-tight">
              <a href="tel:+18666687683" className="hover:text-gold transition-colors">
                1-866-OUR-VOTE
              </a>
            </p>
            <p className="text-sm text-gray-300 leading-relaxed mb-5">
              Free legal help on Election Day, in every state. Lawyers on
              standby. Save it in your phone right now.
            </p>
            <div className="divider-pulse my-5" />
            <ul className="text-xs text-gray-400 space-y-1 leading-relaxed">
              <li>Spanish · 1-888-VE-Y-VOTA</li>
              <li>Arabic · 1-844-YALLA-US</li>
              <li>Asian languages · 1-888-API-VOTE</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- THREE DOORS ---------- */
function ThreeDoors() {
  return (
    <section className="container-wide py-24 md:py-32">
      <Reveal>
        <p className="eyebrow text-gold-dark mb-4 text-center">
          Where do you fit in
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-navy text-center mb-4 headline-display">
          What do you need today?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-16">
          Different roles. Different tools. Find yours.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <Reveal delay={0}>
          <DoorCard
            href="/voter"
            number="01"
            tag="For Voters"
            title="Know your rights. Cast your ballot."
            body="A personalized rights guide for your state, registration checks, and exactly what to do if you're turned away."
            cta="Open Voter Portal"
          />
        </Reveal>
        <Reveal delay={120}>
          <DoorCard
            href="/organizer"
            number="02"
            tag="For Organizers"
            title="Build voter protection in 30 days."
            body="A county-level playbook with recruitment scripts, coalition maps, and a rapid-response runbook."
            cta="Open Organizer Portal"
          />
        </Reveal>
        <Reveal delay={240}>
          <DoorCard
            href="/campaign"
            number="03"
            tag="For Campaigns"
            title="The strategic layer."
            body="State leverage analysis, dollar-per-saved-vote math, and policy priorities for state parties and candidates."
            cta="Open Campaign Portal"
          />
        </Reveal>
      </div>
    </section>
  );
}

function DoorCard({
  href, number, tag, title, body, cta,
}: {
  href: string; number: string; tag: string; title: string; body: string; cta: string;
}) {
  return (
    <Link
      href={href}
      className="card-lift group block bg-white border border-gray-200 hover:border-navy rounded-2xl p-8 h-full"
    >
      <div className="flex items-baseline justify-between mb-6">
        <p className="eyebrow text-gold-dark">{tag}</p>
        <span className="text-gray-300 font-serif text-3xl font-bold">{number}</span>
      </div>
      <h3 className="text-2xl font-bold text-navy mb-3 leading-tight">
        {title}
      </h3>
      <p className="text-gray-600 mb-8 leading-relaxed">{body}</p>
      <span className="text-navy font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
        {cta}
        <span aria-hidden>→</span>
      </span>
    </Link>
  );
}

/* ---------- WHY NOW ---------- */
function WhyNow() {
  return (
    <section className="bg-navy-dark text-white py-24 md:py-32 relative overflow-hidden">
      <div className="container-narrow relative z-10">
        <Reveal>
          <p className="eyebrow text-gold mb-6">Why now</p>
          <h2 className="headline-display text-white text-4xl md:text-6xl mb-10 leading-[1.05]">
            The Voting Rights Act was not killed in a single ruling.
            It was dismantled in <span className="headline-gradient italic">three</span>.
          </h2>
        </Reveal>
        <div className="space-y-8">
          <Reveal delay={100}>
            <Decision n="2013" name="Shelby County v. Holder">
              Struck down preclearance. Within 24 hours Texas reactivated a
              previously blocked voter ID law.
            </Decision>
          </Reveal>
          <Reveal delay={200}>
            <Decision n="2021" name="Brnovich v. DNC">
              Raised the bar for Section 2 challenges, making it dramatically
              harder to prove a voting rule discriminates.
            </Decision>
          </Reveal>
          <Reveal delay={300}>
            <Decision n="2026" name="Louisiana v. Callais" highlighted>
              Required plaintiffs to disprove that racial bloc voting is just
              partisanship — a near-impossible burden. The federal floor
              collapses.
            </Decision>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Decision({
  n, name, children, highlighted,
}: {
  n: string; name: string; children: React.ReactNode; highlighted?: boolean;
}) {
  return (
    <div className={`grid grid-cols-12 gap-6 items-start border-l-2 pl-6 ${
      highlighted ? "border-gold" : "border-white/20"
    }`}>
      <div className="col-span-12 sm:col-span-3">
        <p className={`text-2xl font-bold font-serif ${highlighted ? "text-gold" : "text-gray-400"}`}>
          {n}
        </p>
      </div>
      <div className="col-span-12 sm:col-span-9">
        <h3 className="text-2xl text-white font-bold mb-2">{name}</h3>
        <p className="text-gray-300 leading-relaxed text-lg">{children}</p>
      </div>
    </div>
  );
}

/* ---------- STATS ---------- */
function StatsBand() {
  return (
    <section className="bg-offwhite py-24 md:py-32 border-y border-gray-200">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow text-gold-dark mb-3 text-center">By the numbers</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16 max-w-3xl mx-auto headline-display">
            The scale of what we&apos;re up against.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <CountUpStat to={469} suffix="" label="restrictive voting bills considered across 47 state legislatures in 2025" />
          <CountUpStat to={77} suffix="%" label="drop in ballot drop boxes in the eight counties where most Black Georgians live, under SB 202" />
          <CountUpStat to={500} suffix="K" label="volunteer goal for the Protect The Vote 2026 election protection coalition" />
        </div>
      </div>
    </section>
  );
}

function CountUpStat({ to, suffix, label }: { to: number; suffix: string; label: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const dur = 1400;
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(to * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return (
    <div ref={ref} className="text-center reveal in-view">
      <p className="stat-number text-7xl md:text-8xl mb-4">
        {value.toLocaleString()}
        {suffix}
      </p>
      <p className="text-gray-700 leading-relaxed max-w-xs mx-auto">{label}</p>
    </div>
  );
}

/* ---------- QUOTE BLOCK ---------- */
function QuoteBlock() {
  return (
    <section className="bg-navy text-white py-24 md:py-32">
      <div className="container-narrow text-center">
        <Reveal>
          <p className="eyebrow text-gold mb-8">A line in the sand</p>
          <blockquote className="headline-display text-3xl md:text-5xl leading-tight max-w-3xl mx-auto">
            &ldquo;Our best defense and offense is the{" "}
            <span className="headline-gradient italic">ballot box</span>, and
            we&apos;re going to turn out voters for the midterm elections to
            make sure we can elect representatives who look out for us.&rdquo;
          </blockquote>
          <p className="mt-8 text-gray-400 text-sm">
            Derrick Johnson, NAACP President · April 30, 2026
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gold text-navy py-24 md:py-32">
      <div className="container-narrow text-center relative z-10">
        <Reveal>
          <p className="eyebrow mb-6">The five-minute version</p>
          <h2 className="headline-display text-4xl md:text-6xl mb-6 text-navy leading-[1.05]">
            Check your registration.
            <br />
            Save the hotline.
            <br />
            <span className="italic">Bring two people with you.</span>
          </h2>
          <p className="text-lg md:text-xl text-navy/80 mb-12 max-w-2xl mx-auto">
            That&apos;s the floor. The rest is in the playbook.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/voter/rights"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white font-bold px-10 py-5 rounded-md hover:bg-navy-dark transition-all group"
            >
              Check your rights now
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/playbook"
              className="inline-flex items-center justify-center border-2 border-navy text-navy font-bold px-10 py-5 rounded-md hover:bg-navy hover:text-white transition-all"
            >
              Read the full playbook
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- REVEAL WRAPPER ---------- */
function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("in-view"), delay);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}
