"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const leftLinks = [
  { label: "Classes", href: "/classes" },
  { label: "About", href: "/about" },
  { label: "Schedule", href: "/#schedule" },
];

const rightLinks = [
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 top-0"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left nav links */}
            <nav className="hidden lg:flex items-center gap-8">
              {leftLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-[#F5B800] text-sm font-medium tracking-widest uppercase transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Center logo */}
            <Link href="/" className="flex-shrink-0 mx-auto lg:mx-0">
              <Image
                src="/logo.png"
                alt="Boxtek Boxing Gym"
                width={64}
                height={64}
                className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
              />
            </Link>

            {/* Right nav links + CTA */}
            <nav className="hidden lg:flex items-center gap-8">
              {rightLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-[#F5B800] text-sm font-medium tracking-widest uppercase transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/membership"
                className="bg-[#F5B800] text-[#0A0A0A] text-sm font-bold tracking-widest uppercase px-5 py-2.5 hover:bg-[#FFD340] transition-colors duration-200"
              >
                Join Now
              </Link>
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
        <div className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setOpen(false)}
          >
            <X size={28} />
          </button>
          <Image
            src="/logo.png"
            alt="Boxtek Boxing Gym"
            width={80}
            height={80}
            className="object-contain mb-4"
          />
          {[...leftLinks, ...rightLinks].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-heading text-4xl text-white hover:text-[#F5B800] tracking-wider transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/membership"
            onClick={() => setOpen(false)}
            className="mt-4 bg-[#F5B800] text-[#0A0A0A] font-bold tracking-widest uppercase px-8 py-3 text-sm hover:bg-[#FFD340] transition-colors"
          >
            Join Now
          </Link>
        </div>
      )}
    </>
  );
}
