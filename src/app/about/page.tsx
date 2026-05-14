"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { Target, Users, Award, Flame, ShieldCheck, Heart } from "lucide-react";


function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


const values = [
  {
    icon: Target,
    title: "Discipline",
    desc: "Boxing demands consistency, focus, and mental fortitude. We build habits that carry beyond the gym and into everyday life.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "From your first class to your first fight, you train alongside people who push you, support you, and have your back.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "AIBA-accredited coaching means every technique is taught correctly, every single time. We don't cut corners.",
  },
  {
    icon: Flame,
    title: "Passion",
    desc: "We love boxing. That passion shows in how we coach, how we train, and the energy we bring to every session.",
  },
  {
    icon: ShieldCheck,
    title: "Respect",
    desc: "In the ring and out of it, respect is non-negotiable. Every member, every coach, every visitor is treated with dignity.",
  },
  {
    icon: Heart,
    title: "Inclusion",
    desc: "Beginners, seasoned fighters, kids, adults. Boxtek is for everyone who shows up ready to work.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <span className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#F5B800]" />
              <span className="text-[#F5B800] text-xs font-semibold tracking-[0.3em] uppercase">
                About Us
              </span>
            </span>
            <h1 className="font-heading text-6xl lg:text-8xl text-white leading-none tracking-wide">
              The Boxtek Story
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 1: The Gym ── */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border border-[#F5B800]/20" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#F5B800]/20" />
                <Image
                  src="https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?w=800&q=80"
                  alt="Boxtek Boxing Gym"
                  width={600}
                  height={700}
                  className="w-full object-cover grayscale"
                  style={{ aspectRatio: "4/5" }}
                  unoptimized
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h2 className="font-heading text-5xl lg:text-6xl text-white leading-none tracking-wide mb-8">
                  Built for Fighters.
                  <br />
                  <span className="text-[#F5B800]">Open to Everyone.</span>
                </h2>
                <div className="flex flex-col gap-5 text-white/60 leading-relaxed">
                  <p>
                    Boxtek was born out of a simple belief: everyone deserves access to world-class boxing coaching, regardless of their background or experience level. We opened our doors in Edwardstown to give South Australians a gym that trains people the right way.
                  </p>
                  <p>
                    Our facility is purpose-built for boxing. Full-size ring, heavy bags, speed bags, and everything in between. Whether you train to compete, to get fit, or to learn something new, the equipment and environment at Boxtek will meet you where you are.
                  </p>
                  <p>
                    We&apos;re proud of the fighters we&apos;ve developed and prouder still of the community we&apos;ve built around them. The gym floor at Boxtek is where champions are made and where ordinary people discover what they&apos;re capable of.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: The Coaches ── */}
      <section className="py-28 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="mb-16">
            <span className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#F5B800]" />
              <span className="text-[#F5B800] text-xs font-semibold tracking-[0.3em] uppercase">
                The Team
              </span>
            </span>
            <h2 className="font-heading text-5xl lg:text-6xl text-white leading-none tracking-wide">
              Meet Our Coaches
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Write-up — left */}
            <FadeIn>
              <div>
                <h3 className="font-heading text-5xl lg:text-6xl text-white leading-none tracking-wide mb-2">
                  Steph Bloomfield
                </h3>
                <p className="text-[#F5B800] text-xs uppercase tracking-widest font-semibold mb-8">
                  Head Coach
                </p>
                <div className="flex flex-col gap-5 text-white/60 leading-relaxed">
                  <p>
                    Steph Bloomfield is the driving force behind Boxtek. With decades of competitive boxing experience and accreditation at the highest international level, she brings a standard of coaching that is rare in South Australia.
                  </p>
                  <p>
                    As an AIBA-accredited coach, Steph has developed fighters across all levels, from complete beginners finding their footing for the first time to licensed amateurs competing on the national stage. Her approach is technical, patient, and deeply invested in the individual progress of every person she trains.
                  </p>
                  <p>
                    Steph built Boxtek on the belief that great coaching should be accessible to everyone, and that belief is visible in every class, every session, and every fighter who walks through the door.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Photo — right */}
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border border-[#F5B800]/20" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#F5B800]/20" />
                <div
                  className="w-full bg-[#111111] flex flex-col items-center justify-center"
                  style={{ aspectRatio: "4/5" }}
                >
                  <div className="w-16 h-16 rounded-full border-2 border-[#F5B800]/30 flex items-center justify-center mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#F5B800]/40">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <p className="text-white/25 text-xs uppercase tracking-widest font-medium">
                    Head Coach Photo Coming Soon
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Our Values ── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="mb-16">
            <span className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#F5B800]" />
              <span className="text-[#F5B800] text-xs font-semibold tracking-[0.3em] uppercase">
                What We Stand For
              </span>
            </span>
            <h2 className="font-heading text-5xl lg:text-6xl text-white leading-none tracking-wide">
              Our Values
            </h2>
            <p className="text-white/40 text-sm mt-4 max-w-lg leading-relaxed">
              These aren&apos;t words on a wall. They&apos;re the principles that shape how we coach, how we train, and how we treat each other.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="bg-[#111111] border border-white/5 p-8 hover:border-[#F5B800]/30 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 bg-[#F5B800]/10 flex items-center justify-center mb-6 group-hover:bg-[#F5B800]/20 transition-colors">
                    <v.icon size={22} className="text-[#F5B800]" />
                  </div>
                  <h3 className="font-heading text-2xl text-white tracking-wide mb-3">
                    {v.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
