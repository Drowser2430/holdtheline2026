import Link from "next/link";

export const metadata = {
  title: "Voter Portal — Hold The Line 2026",
};

export default function VoterPortal() {
  return (
    <div className="container-narrow py-16">
      <p className="text-gold font-semibold uppercase tracking-wide text-sm mb-3">
        For Voters
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Know your rights. Use your vote.
      </h1>
      <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        Most voter suppression works because voters give up at the first
        obstacle. Don&apos;t. Start with the tools below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <ToolCard
          href="/voter/rights"
          tag="AI Tool — Live"
          title="State Voter Rights Generator"
          body="Enter your state, ZIP, and voter type. Get a personalized one-page rights summary with registration steps, ID rules, and what to do if you're turned away."
          cta="Generate my rights guide"
          live
        />
        <ToolCard
          href="#chatbot"
          tag="Coming Soon"
          title="Voter Rights Chatbot"
          body="Ask any question about voting in your state. Get an answer and a direct line to the Election Protection hotline if needed."
          cta="In development"
        />
      </div>

      <section className="border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-bold mb-6">The Five-Minute Readiness Check</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-800 mb-8 leading-relaxed">
          <li>
            Verify your voter registration at{" "}
            <a href="https://vote.org" className="underline font-semibold" target="_blank" rel="noopener noreferrer">vote.org</a>{" "}
            or your state&apos;s Secretary of State website.
          </li>
          <li>
            Confirm your address on file matches your current address. If you&apos;ve moved, re-register.
          </li>
          <li>
            Check your state&apos;s ID requirements at{" "}
            <a href="https://www.vote.org/voter-id-laws/" className="underline font-semibold" target="_blank" rel="noopener noreferrer">vote.org/voter-id-laws</a>.
          </li>
          <li>Find your polling place. Save a backup polling place too.</li>
          <li>
            Save the Election Protection hotline in your phone:{" "}
            <strong>1-866-OUR-VOTE</strong>.
          </li>
        </ol>
      </section>

      <section className="bg-navy text-white rounded-lg p-8 my-10">
        <h2 className="text-2xl font-bold text-white mb-4">If You Are Turned Away</h2>
        <ol className="list-decimal pl-6 space-y-3 leading-relaxed">
          <li>
            <strong className="text-gold">Ask for a provisional ballot.</strong> Every polling place is required by federal law to offer one. Cast it. Get a receipt.
          </li>
          <li>
            <strong className="text-gold">Call 1-866-OUR-VOTE before you leave.</strong> Lawyers are on standby in every state.
          </li>
          <li>
            <strong className="text-gold">Document everything.</strong> Time, poll worker names, what was said, any witnesses.
          </li>
        </ol>
      </section>

      <div className="text-center mt-12">
        <Link href="/playbook" className="text-navy underline font-semibold">
          Read the full playbook →
        </Link>
      </div>
    </div>
  );
}

function ToolCard({
  href,
  tag,
  title,
  body,
  cta,
  live,
}: {
  href: string;
  tag: string;
  title: string;
  body: string;
  cta: string;
  live?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`block border rounded-lg p-6 transition-all ${
        live
          ? "bg-white border-gold hover:shadow-lg"
          : "bg-gray-50 border-gray-200 opacity-70 cursor-not-allowed"
      }`}
    >
      <p
        className={`font-semibold text-xs uppercase tracking-wide mb-2 ${
          live ? "text-gold-dark" : "text-gray-500"
        }`}
      >
        {tag}
      </p>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4 leading-relaxed text-sm">{body}</p>
      <span
        className={`font-semibold inline-flex items-center gap-1 ${
          live ? "text-navy" : "text-gray-500"
        }`}
      >
        {cta} {live && <span aria-hidden>→</span>}
      </span>
    </Link>
  );
}
