import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80 mt-12">
      <div className="mx-auto max-w-5xl px-4 py-6 flex flex-col sm:flex-row gap-3 justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} SkyNow. Weather data by Open-Meteo.</p>
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-sun">About</Link>
          <Link href="/services" className="hover:text-sun">Services</Link>
          <Link href="/contact" className="hover:text-sun">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
