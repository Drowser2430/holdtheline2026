export const metadata = {
  title: "About — Hold The Line 2026",
};

export default function AboutPage() {
  return (
    <div className="container-narrow py-16">
      <p className="text-gold font-semibold uppercase tracking-wide text-sm mb-3">
        About
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Why this exists.
      </h1>
      <div className="prose-custom">
        <p>
          On April 29, 2026, the Supreme Court ruled 6&ndash;3 in{" "}
          <em>Louisiana v. Callais</em> that compliance with Section 2 of the
          Voting Rights Act could not justify Louisiana&apos;s second
          majority-Black congressional district. The decision didn&apos;t repeal
          the Voting Rights Act. It hollowed out the enforcement mechanism that
          has protected Black political representation since 1965.
        </p>
        <p>
          Hold The Line 2026 is a free, AI-powered companion to{" "}
          <em>The Black Voter Protection Playbook 2026</em>. It exists because
          the gap between the country&apos;s most well-resourced voter rights
          organizations and the voters they serve has always been wider than it
          should be &mdash; and post-<em>Callais</em>, that gap is a crisis.
        </p>
        <p>
          The tools on this site are designed to be{" "}
          <strong>white-labeled</strong> by established voting rights
          organizations &mdash; NAACP, NAACP LDF, Black Voters Matter, Fair Fight,
          the Election Protection coalition. The brand here is not the point.
          The work is.
        </p>

        <h2>Who built it</h2>
        <p>
          Darius Rowser is a master&apos;s student in Applied Artificial
          Intelligence at the University of San Diego with a background in
          sales, content creation, and digital products.
        </p>

        <h2>Open source</h2>
        <p>
          The full codebase is on GitHub under the MIT license. Fork it. Improve
          it. Deploy it under your own brand.
        </p>

        <h2>Get in touch</h2>
        <p>
          Email:{" "}
          <a href="mailto:drowser@sandiego.edu" className="font-semibold">
            drowser@sandiego.edu
          </a>
        </p>
      </div>
    </div>
  );
}
