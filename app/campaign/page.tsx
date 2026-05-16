export const metadata = {
  title: "Campaign Portal — Hold The Line 2026",
};

export default function CampaignPortal() {
  return (
    <div className="container-narrow py-16">
      <p className="text-gold font-semibold uppercase tracking-wide text-sm mb-3">
        For Campaigns & State Parties
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">The strategic layer.</h1>
      <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        This is for paid staff. The argument: the highest-leverage uses of your
        budget between now and November 2026 are not the obvious ones.
      </p>

      <h2 className="text-2xl font-bold mb-4">The Five Highest-Leverage State Targets</h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-800 mb-10 leading-relaxed">
        <li>
          <strong>Georgia.</strong> Defend Black congressional seats targeted by
          mid-decade redistricting. Long-term: flip the legislature to repeal SB
          202.
        </li>
        <li>
          <strong>Texas.</strong> Largest at-risk Black voter base. Protect
          metro turnout in Houston, Dallas, San Antonio.
        </li>
        <li>
          <strong>North Carolina.</strong> Closely divided legislature, growing
          Black electorate in the Triangle and Charlotte.
        </li>
        <li>
          <strong>Louisiana.</strong> Ground zero for <em>Callais</em>.
          Post-ruling redistricting here will set the template others copy or
          reject.
        </li>
        <li>
          <strong>Alabama and Mississippi (joint).</strong> Modest resources go
          further here than anywhere else.
        </li>
      </ol>

      <h2 className="text-2xl font-bold mb-4">The Race Nobody Runs</h2>
      <p className="text-gray-800 leading-relaxed mb-4">
        The most important elected position you have never paid attention to is
        the <strong>county election board</strong>. They decide where polling
        places are located, how many drop boxes exist, when early voting starts,
        and how challenges to voter eligibility are resolved. Usually elected
        with a few thousand votes. Rarely contested.
      </p>
      <p className="text-gray-800 leading-relaxed mb-10">
        Recruit, train, and fund Black candidates for county election boards in
        the 50 highest-Black-voter counties across the South. Cost per seat: a
        fraction of any congressional race. Impact per seat: enormous.
      </p>

      <div className="bg-navy text-white rounded-lg p-8 mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Dollar per saved vote vs. dollar per turned-out vote
        </h2>
        <p className="text-gray-200 leading-relaxed mb-4">
          Every Black voter who is purged, denied a ballot, or assigned to a
          polling place that closed at 4pm is a vote that must be turned out
          twice to net even.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div className="border-l-4 border-gold pl-4">
            <p className="text-gold text-3xl font-bold">$3–7</p>
            <p className="text-sm text-gray-300">to turn out a likely voter</p>
          </div>
          <div className="border-l-4 border-gold pl-4">
            <p className="text-gold text-3xl font-bold">$0.80–2</p>
            <p className="text-sm text-gray-300">to save a vote that would otherwise be suppressed</p>
          </div>
        </div>
        <p className="text-gold font-semibold mt-6">
          Every dollar moved from late-October ad buys to early-summer voter
          protection is doing 2–4x the work.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Federal Policy Priorities</h2>
      <ul className="space-y-3 text-gray-800 mb-10 leading-relaxed">
        <li>
          <strong>John R. Lewis Voting Rights Advancement Act (H.R. 14 / S. 2523).</strong>{" "}
          Restores preclearance. The direct legislative response to{" "}
          <em>Shelby</em> and <em>Callais</em>.
        </li>
        <li>
          <strong>Freedom to Vote Act.</strong> Federal baseline for early
          voting, automatic registration, and mail ballot access.
        </li>
        <li>
          <strong>Defeat the SAVE Act.</strong> The single most important
          defensive federal fight of the cycle.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Messaging Framework</h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-800 leading-relaxed">
        <li>
          <strong>Lead with universal values, ground in specific harm.</strong>{" "}
          &ldquo;Every American should be able to vote without standing in a
          four-hour line&rdquo; travels further than &ldquo;Black voter
          suppression.&rdquo; Both are true. Lead with the first to recruit.
        </li>
        <li>
          <strong>Name the cascade, not just the ruling.</strong> <em>Callais</em>{" "}
          is abstract. Closed polling places, purged registrations, and four-hour
          lines are concrete.
        </li>
        <li>
          <strong>Refuse fatalism.</strong> Every story should end in an action
          a person can take this week.
        </li>
      </ol>
    </div>
  );
}
