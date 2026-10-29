import Link from "next/link";
export default function NotFound(){return <section className="page-hero container"><span className="section-kicker">404 / PAGE NOT FOUND</span><h1>Wrong turn.<br/><em>Right direction.</em></h1><p>That page doesn't exist. Head home and explore the rest.</p><Link href="/" className="btn">Back to homepage ↗</Link></section>}
