import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-navy text-white">
      <div className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tight">
            Hold The Line <span className="text-gold">2026</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/voter" className="hover:text-gold transition-colors">
            Voters
          </Link>
          <Link href="/organizer" className="hover:text-gold transition-colors">
            Organizers
          </Link>
          <Link href="/campaign" className="hover:text-gold transition-colors">
            Campaigns
          </Link>
          <Link href="/playbook" className="hover:text-gold transition-colors">
            Playbook
          </Link>
          <Link
            href="/voter/rights"
            className="bg-gold text-navy font-semibold px-4 py-2 rounded-md hover:bg-gold-dark transition-colors"
          >
            Check Your Rights
          </Link>
        </nav>
      </div>
    </header>
  );
}
