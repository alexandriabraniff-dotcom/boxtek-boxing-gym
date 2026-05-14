import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-4">
            <div className="relative inline-block w-fit">
              <div className="absolute inset-0 rounded-full border-2 border-[#F5B800]/60" />
              <Image
                src="/logo.png"
                alt="Boxtek Boxing Gym"
                width={72}
                height={72}
                className="w-16 h-16 object-contain rounded-full"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Adelaide&apos;s premier boxing gym. Train with purpose. Fight with heart.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/people/Boxtek-Boxing-Gym/100063717121132/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#F5B800] transition-colors text-xs uppercase tracking-widest font-medium"
              >
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@boxtekboxinggym"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#F5B800] transition-colors text-xs uppercase tracking-widest font-medium"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-xl text-[#F5B800] mb-6 tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Classes / Memberships", href: "/training" },
                { label: "Find Us", href: "/#find-us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-xl text-[#F5B800] mb-6 tracking-wider">
              Find Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 text-sm text-white/50">
                <MapPin size={16} className="text-[#F5B800] shrink-0 mt-0.5" />
                <span>3 Lagunta Ave, Edwardstown SA 5039</span>
              </li>
              <li className="flex gap-3 text-sm text-white/50">
                <Phone size={16} className="text-[#F5B800] shrink-0 mt-0.5" />
                <a href="tel:0409800626" className="hover:text-white transition-colors">
                  0409 800 626
                </a>
              </li>
              <li className="flex gap-3 text-sm text-white/50">
                <Clock size={16} className="text-[#F5B800] shrink-0 mt-0.5" />
                <div>
                  <p>Mon – Fri: 6:00am – 8:00pm</p>
                  <p>Saturday: 8:00am – 12:00pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Boxtek Boxing Gym. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Site by{" "}
            <a href="mailto:alexandriabraniff@gmail.com" className="hover:text-white/40 transition-colors">
              Alexandria Braniff
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
