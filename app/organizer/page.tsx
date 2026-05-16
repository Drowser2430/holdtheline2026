export const metadata = {
  title: "Organizer Portal — Hold The Line 2026",
};

export default function OrganizerPortal() {
  return (
    <div className="container-narrow py-16">
      <p className="text-gold font-semibold uppercase tracking-wide text-sm mb-3">
        For Organizers
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Build voter protection in 30 days.
      </h1>
      <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        A county-level operating manual. Assumes you have a small budget, a few
        committed people, and roughly six months until November 2026.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-10">
        <p className="text-gold font-semibold text-xs uppercase tracking-wide mb-2">
          Coming Soon
        </p>
        <h2 className="text-xl font-bold mb-2">Action Plan Generator</h2>
        <p className="text-gray-700 leading-relaxed">
          Enter your county, your volunteer count, and your budget. The AI
          generates a 30/60/90-day plan with recruitment scripts, coalition
          contact templates, and a rapid-response runbook.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-6">The 30-Day Setup</h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-navy text-white">
              <th className="text-left p-3 font-semibold w-24">Week</th>
              <th className="text-left p-3 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-3 align-top font-semibold bg-gray-50">Week 1</td>
              <td className="p-3 align-top leading-relaxed">
                Map your county&apos;s voter file, polling places, and drop
                boxes. Identify the three highest-risk precincts. Compile a
                contact list of every Black church, HBCU campus office, NAACP
                branch, Divine Nine chapter, barbershop, salon, and mutual aid
                group in your county.
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-3 align-top font-semibold bg-gray-50">Week 2</td>
              <td className="p-3 align-top leading-relaxed">
                Recruit your core team of 10: coordinator, recruiter, data lead,
                transportation lead, legal liaison, communications lead, two
                field captains, two floaters. One-hour kickoff. Open a free
                Slack or Signal workspace.
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-3 align-top font-semibold bg-gray-50">Week 3</td>
              <td className="p-3 align-top leading-relaxed">
                Sign up your county to the Election Protection coalition. Begin
                recruiting poll monitors, drivers, and door-knockers. Schedule
                one trusted-messenger event per week for 12 weeks.
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top font-semibold bg-gray-50">Week 4</td>
              <td className="p-3 align-top leading-relaxed">
                Run your first training (use NAACP LDF Prepared to Vote or
                Election Protection curriculum — don&apos;t invent your own).
                Stand up your rapid-response system. Send your first weekly
                community update through the trusted-messenger network.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-4">The Coalition Map</h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-800 mb-10 leading-relaxed">
        <li>
          <strong>The Black church.</strong> The Sunday before early voting is
          the single most important mobilization moment. Souls to the Polls is
          infrastructure, not a slogan.
        </li>
        <li>
          <strong>HBCUs.</strong> Campus voter registration is a federal right
          under the NVRA. Embed a part-time student organizer on every HBCU
          campus in your state.
        </li>
        <li>
          <strong>The Divine Nine.</strong> Already running voter mobilization.
          Coordinate, do not duplicate.
        </li>
        <li>
          <strong>Barbershops, beauty salons, and corner stores.</strong>{" "}
          Trusted-messenger spaces with high foot traffic and low political
          polarization.
        </li>
        <li>
          <strong>Mutual aid networks.</strong> The most agile field operations
          in many cities. Show up, ask, bring something to the table.
        </li>
      </ol>

      <h2 className="text-2xl font-bold mb-4">National Partners</h2>
      <ul className="space-y-2 text-gray-800 leading-relaxed">
        <li>
          <strong>NAACP LDF Prepared to Vote</strong> — training and rapid-response legal support.
        </li>
        <li>
          <strong>Election Protection (866-OUR-VOTE)</strong> — national hotline.
        </li>
        <li>
          <strong>Black Voters Matter &ldquo;We Got Us&rdquo;</strong> — organizing infrastructure.
        </li>
        <li>
          <strong>Fair Fight Action</strong> — voter protection in battleground states.
        </li>
        <li>
          <strong>Protect The Vote 2026</strong> — 250-day, 500K-volunteer coalition. Sign up as a Resilience Hub.
        </li>
      </ul>
    </div>
  );
}
