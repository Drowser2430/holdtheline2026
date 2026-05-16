import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="container-wide py-20 md:py-28 grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <p className="text-gold font-semibold mb-4 tracking-wide uppercase text-sm">
              After Louisiana v. Callais — April 29, 2026
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
              The Voting Rights Act was hollowed out. The work doesn&apos;t stop.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              A free, AI-powered toolkit for the voters, organizers, and campaigns
              defending Black political power in the 2026 midterms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/voter/rights" className="btn-secondary text-center">
                Check your rights →
              </Link>
              <Link
                href="/playbook"
                className="inline-block border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-navy transition-colors text-center"
              >
                Read the Playbook
              </Link>
            </div>
          </div>
          <div className="md:col-span-2 hidden md:block">
            <div className="bg-navy-dark border border-gold/30 rounded-lg p-6">
              <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-2">
                Election Protection Hotline
              </p>
              <p className="text-4xl font-bold mb-2">1-866-OUR-VOTE</p>
              <p className="text-sm text-gray-300">
                Free legal help on Election Day, in every state. Save it in your phone now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three doors */}
      <section className="container-wide py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What do you need today?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Different roles, different tools. Find yours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DoorCard
            href="/voter"
            tag="For Voters"
            title="Know your rights. Cast your ballot."
            body="Get a personalized rights guide for your state, check your registration, and learn what to do if you're turned away at the polls."
            cta="Open Voter Portal"
          />
          <DoorCard
            href="/organizer"
            tag="For Organizers"
            title="Build voter protection in 30 days."
            body="A county-level playbook with recruitment scripts, coalition maps, and an AI tool that builds your 30/60/90-day plan."
            cta="Open Organizer Portal"
          />
          <DoorCard
            href="/campaign"
            tag="For Campaigns"
            title="The strategic layer."
            body="State-by-state leverage analysis, the dollar-per-saved-vote math, and policy priorities for state parties and candidates."
            cta="Open Campaign Portal"
          />
        </div>
      </section>

      {/* Why now */}
      <section className="bg-navy-dark text-white py-16">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold mb-6 text-white">Why now</h2>
          <div className="space-y-4 text-gray-200 text-lg leading-relaxed">
            <p>
              On April 29, 2026, the Supreme Court ruled 6&ndash;3 in{" "}
              <em>Louisiana v. Callais</em> that compliance with Section 2 of the
              Voting Rights Act could not justify Louisiana&apos;s second
              majority-Black congressional district.
            </p>
            <p>
              Combined with <em>Shelby County v. Holder</em> (2013) and{" "}
              <em>Brnovich v. DNC</em> (2021), the federal floor for Black voter
              protection has effectively collapsed. The work now shifts to the
              states, the streets, and the ballot box itself.
            </p>
            <p className="text-gold font-semibold">
              This site exists to help you do that work.
            </p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="container-wide py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <Stat number="469" label="Restrictive voting bills considered across 47 state legislatures in 2025" />
          <Stat number="77%" label="Drop in ballot drop boxes in the eight counties where most Black Georgians live, under SB 202" />
          <Stat number="500K" label="Volunteer goal for the Protect The Vote 2026 election protection coalition" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gold text-navy py-16">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
            The five-minute version
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Check your registration. Save the hotline. Bring two people with you
            to early voting. That&apos;s the floor. The rest is in the playbook.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/voter/rights" className="bg-navy text-white font-semibold px-8 py-4 rounded-md hover:bg-navy-dark transition-colors">
              Check your rights now
            </Link>
            <Link href="/playbook" className="border-2 border-navy text-navy font-semibold px-8 py-4 rounded-md hover:bg-navy hover:text-white transition-colors">
              Read the full playbook
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function DoorCard({
  href,
  tag,
  title,
  body,
  cta,
}: {
  href: string;
  tag: string;
  title: string;
  body: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-gray-200 hover:border-navy hover:shadow-lg rounded-lg p-8 transition-all"
    >
      <p className="text-gold font-semibold text-xs uppercase tracking-wide mb-3">
        {tag}
      </p>
      <h3 className="text-xl font-bold mb-3 group-hover:text-navy-dark">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{body}</p>
      <span className="text-navy font-semibold group-hover:text-gold-dark inline-flex items-center gap-1">
        {cta} <span aria-hidden>→</span>
      </span>
    </Link>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="text-5xl md:text-6xl font-bold text-navy mb-2">{number}</p>
      <p className="text-gray-700 leading-snug">{label}</p>
    </div>
  );
}
