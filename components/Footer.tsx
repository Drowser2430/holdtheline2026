import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white mt-20">
      <div className="container-wide py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-gold font-bold text-lg mb-3">Hold The Line 2026</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            A free, AI-powered companion to The Black Voter Protection Playbook 2026.
            Built in response to Louisiana v. Callais.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Get help now</h4>
          <p className="text-sm mb-2">
            Election Protection Hotline:
          </p>
          <p className="text-2xl font-bold text-gold mb-3">1-866-OUR-VOTE</p>
          <p className="text-xs text-gray-400">
            Spanish: 1-888-VE-Y-VOTA · Arabic: 1-844-YALLA-US · Asian languages: 1-888-API-VOTE
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Site</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/playbook" className="hover:text-gold">Read the Playbook</Link></li>
            <li><Link href="/voter/rights" className="hover:text-gold">Check Your Rights</Link></li>
            <li><Link href="/about" className="hover:text-gold">About</Link></li>
            <li><a href="mailto:drowser@sandiego.edu" className="hover:text-gold">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy/40">
        <div className="container-wide py-4 text-xs text-gray-400 flex flex-col md:flex-row md:justify-between gap-2">
          <p>© 2026 Hold The Line 2026. Open source under the MIT License.</p>
          <p>
            Not legal advice. For urgent voter rights issues, call 1-866-OUR-VOTE.
          </p>
        </div>
      </div>
    </footer>
  );
}
