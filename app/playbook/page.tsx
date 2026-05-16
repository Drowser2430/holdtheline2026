import Link from "next/link";

export const metadata = {
  title: "The Playbook — Hold The Line 2026",
  description:
    "The Black Voter Protection Playbook 2026: A post-Callais strategy for voters, organizers, and campaigns.",
};

export default function PlaybookPage() {
  return (
    <article className="container-narrow py-16">
      <header className="mb-12 border-b border-gray-200 pb-8">
        <p className="text-gold font-semibold uppercase tracking-wide text-sm mb-3">
          The Playbook
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          The Black Voter Protection Playbook 2026
        </h1>
        <p className="text-xl text-gray-600 italic">
          A Post-Callais Strategy for Voters, Organizers, and Campaigns
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Prepared by Darius Rowser · Applied Artificial Intelligence, University of San Diego · May 2026
        </p>
      </header>

      <div className="prose-custom">
        <blockquote>
          &ldquo;When we lose the right to be different, we lose the privilege to
          be free.&rdquo;
          <br />
          <span className="not-italic text-sm">— Charles Evans Hughes</span>
        </blockquote>

        <h2>Executive Summary</h2>
        <p>
          On April 29, 2026, the Supreme Court ruled 6&ndash;3 in{" "}
          <em>Louisiana v. Callais</em> that compliance with Section 2 of the
          Voting Rights Act could not justify Louisiana&apos;s second
          majority-Black congressional district. Justice Alito&apos;s majority
          opinion required Section 2 challengers to disprove that racial bloc
          voting is merely a function of partisan affiliation &mdash; a legal
          burden that, in practice, is nearly impossible to meet.
        </p>
        <p>
          <em>Callais</em> did not formally repeal the Voting Rights Act. It
          hollowed out the enforcement mechanism that has protected Black
          political representation since 1965. The work now shifts to the states,
          the streets, and the ballot box itself.
        </p>
        <p>This playbook is built for that shift.</p>
        <ul>
          <li>
            <strong>For voters:</strong> a clear, plain-English guide to
            understanding what changed, knowing your rights, and casting a ballot
            that counts.
          </li>
          <li>
            <strong>For organizers:</strong> a county-level voter protection
            framework that can be stood up in 30 days.
          </li>
          <li>
            <strong>For campaigns and state parties:</strong> the strategic chess
            game &mdash; which state legislative chambers, county election boards,
            and federal bills carry the highest leverage between now and November
            2026.
          </li>
        </ul>

        <h2>1. The Stakes: Why 2026 Is Not 2024</h2>
        <h3>1.1 What the Voting Rights Act Used to Do</h3>
        <p>
          The Voting Rights Act of 1965 had two primary enforcement engines.{" "}
          <strong>Section 5</strong> required jurisdictions with a documented
          history of discrimination to obtain federal preclearance before
          changing voting rules. <strong>Section 2</strong> prohibited any
          voting practice that resulted in racial discrimination.
        </p>

        <h3>1.2 The Three Decisions That Dismantled It</h3>
        <ol>
          <li>
            <strong>Shelby County v. Holder (2013).</strong> Struck down the
            coverage formula in Section 4(b), rendering preclearance dormant.
          </li>
          <li>
            <strong>Brnovich v. DNC (2021).</strong> New &ldquo;guideposts&rdquo;
            for Section 2 challenges that made it dramatically harder to prove a
            voting rule discriminates.
          </li>
          <li>
            <strong>Louisiana v. Callais (2026).</strong> Required plaintiffs to
            show racial bloc voting that cannot be explained by partisanship
            &mdash; a near-impossible burden in the post-2020 South.
          </li>
        </ol>

        <h3>1.3 The Cascade That Followed Callais</h3>
        <p>
          Within weeks of <em>Callais</em>, GOP-controlled legislatures in
          Louisiana, Alabama, Mississippi, Tennessee, Missouri, and Virginia
          signaled new mid-decade redistricting efforts targeting majority-Black
          districts. The NAACP convened an emergency town hall on April 30,
          2026. Black Voters Matter launched its &ldquo;We Got Us&rdquo;
          campaign. This is the moment the playbook is built for.
        </p>

        <h2>2. For Voters: Know Your Rights, Use Your Vote</h2>
        <p>
          Most voter suppression works because voters give up at the first
          obstacle. The point: <strong>do not go home.</strong>
        </p>
        <h3>The Five-Minute Voter Readiness Check</h3>
        <ol>
          <li>Verify your registration at vote.org or your state&apos;s Secretary of State website.</li>
          <li>Confirm your address on file matches your current address.</li>
          <li>Check your state&apos;s ID requirements at vote.org/voter-id-laws.</li>
          <li>Find your polling place and a backup polling place.</li>
          <li>Save the Election Protection hotline: <strong>1-866-OUR-VOTE</strong>.</li>
        </ol>
        <p>
          <Link href="/voter/rights" className="text-navy underline font-semibold">
            Want a personalized one-pager for your state? Use the Rights Generator →
          </Link>
        </p>

        <h2>3. For Organizers: Build the Wall</h2>
        <p>
          Black voter protection is built on the institutions that already hold
          trust in Black communities: the Black church, HBCUs, the Divine Nine,
          barbershops and salons, and mutual aid networks. Build relationships
          before you need them.
        </p>

        <h2>4. For Campaigns and State Parties: The Strategic Layer</h2>
        <h3>The Five Highest-Leverage State Targets</h3>
        <ol>
          <li><strong>Georgia.</strong> Defend Black congressional seats.</li>
          <li><strong>Texas.</strong> Largest at-risk Black voter base.</li>
          <li><strong>North Carolina.</strong> Closely divided legislature, growing Black electorate.</li>
          <li><strong>Louisiana.</strong> Ground zero for <em>Callais</em>.</li>
          <li><strong>Alabama and Mississippi.</strong> Where preclearance was originally aimed.</li>
        </ol>
        <h3>The Math</h3>
        <p>
          Across multiple voter protection programs, it costs roughly{" "}
          <strong>$3 to $7 to turn out a likely voter</strong>, and roughly{" "}
          <strong>$0.80 to $2 to save a vote that would otherwise be suppressed</strong>.
          Every dollar moved from late-October ad buys to early-summer voter
          protection infrastructure does two to four times the work.
        </p>

        <h2>5. The AI Tools That Make This Playbook Operational</h2>
        <ul>
          <li>
            <strong>State Voter Rights Generator</strong> &mdash;{" "}
            <Link href="/voter/rights">live now</Link>.
          </li>
          <li><strong>Bill Translator</strong> &mdash; coming next.</li>
          <li><strong>Voter Rights Chatbot</strong> &mdash; in development.</li>
          <li><strong>Action Plan Generator</strong> &mdash; in development.</li>
          <li><strong>Battleground Race Map</strong> &mdash; in development.</li>
        </ul>

        <h2>7. The Ask</h2>
        <p><strong>From voters:</strong> run the readiness check. Save the hotline. Bring two people with you to early voting.</p>
        <p><strong>From organizers:</strong> adopt one tool from this playbook in the next 30 days.</p>
        <p><strong>From campaigns:</strong> move one budget line from late-cycle persuasion to early-cycle voter protection.</p>
        <p><strong>From policymakers:</strong> pass the John R. Lewis Voting Rights Advancement Act and the Freedom to Vote Act. Defeat the SAVE Act.</p>

        <hr className="my-12 border-gray-200" />

        <p className="text-sm text-gray-600">
          Full playbook with appendices, partner directory, and source citations
          available on request: <a href="mailto:drowser@sandiego.edu" className="font-semibold">drowser@sandiego.edu</a>.
        </p>
      </div>
    </article>
  );
}
