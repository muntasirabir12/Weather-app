"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-ink text-white">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Sky<span className="text-sun">Now</span>
        </Link>

        <button
          className="md:hidden border border-white/40 rounded px-3 py-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav className="hidden md:flex gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`pb-1 border-b-2 ${
                pathname === l.href ? "border-sun" : "border-transparent hover:border-sky"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col px-4 pb-4 gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={pathname === l.href ? "text-sun" : ""}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
