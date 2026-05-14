"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Classes / Memberships", href: "/training" },
  { label: "Find Us", href: "/#find-us" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-[#0A0A0A]/98 backdrop-blur-md border-b border-[#F5B800]/20"
            : "bg-[#0A0A0A]/30 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* Logo — left, circular with gold ring */}
            <Link href="/" className="flex items-center gap-4 group shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-full border-2 border-[#F5B800] group-hover:border-[#FFD340] transition-colors duration-300" />
                <Image
                  src="/logo.png"
                  alt="Boxtek Boxing Gym"
                  width={72}
                  height={72}
                  className="w-16 h-16 lg:w-20 lg:h-20 object-contain rounded-full"
                />
              </div>
            </Link>

            {/* Desktop nav — right side */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-white/70 hover:text-white text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#F5B800] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-10">
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white"
            onClick={() => setOpen(false)}
          >
            <X size={28} />
          </button>
          <div className="mb-4">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-full border-2 border-[#F5B800]" />
              <Image
                src="/logo.png"
                alt="Boxtek Boxing Gym"
                width={96}
                height={96}
                className="w-24 h-24 object-contain rounded-full"
              />
            </div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-heading text-3xl text-white/80 hover:text-[#F5B800] tracking-widest uppercase transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
