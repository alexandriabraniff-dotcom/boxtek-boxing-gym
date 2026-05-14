"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { Award, Target, Users } from "lucide-react";

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
    desc: "Boxing demands consistency and mental fortitude. We build habits that carry beyond the gym.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "From your first class to your first fight, you train with people who have your back.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "AIBA-accredited coaching means every technique is taught right, every time.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F5B800]" />
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

      {/* Story section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border border-[#F5B800]/30" />
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
              <div className="flex flex-col gap-6 text-white/60 leading-relaxed">
                <p>
                  Boxtek was born out of a simple belief: everyone deserves access to world-class boxing coaching, regardless of their background or experience. We opened our doors in Edwardstown to give South Australians a gym that trains people the right way.
                </p>
                <p>
                  Led by AIBA International Boxing Coach Steph Bloomfield, our team brings decades of competitive and coaching experience to every session. Whether you&apos;re a complete beginner or a licensed amateur, you&apos;ll find a program that challenges and grows you.
                </p>
                <p>
                  We&apos;re proud of the fighters we&apos;ve developed and prouder still of the community we&apos;ve built around them. The gym floor at Boxtek is where champions are made and where ordinary people discover what they&apos;re made of.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#080808]">
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
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#111111] border border-white/5 p-10 hover:border-[#F5B800]/30 transition-all duration-300">
                  <v.icon size={32} className="text-[#F5B800] mb-6" />
                  <h3 className="font-heading text-3xl text-white tracking-wide mb-3">
                    {v.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Head coach */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="mb-16">
            <span className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#F5B800]" />
              <span className="text-[#F5B800] text-xs font-semibold tracking-[0.3em] uppercase">
                The Team
              </span>
            </span>
            <h2 className="font-heading text-5xl lg:text-6xl text-white leading-none tracking-wide">
              Coached by the Best
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            <FadeIn>
              <div className="bg-[#111111] border border-white/5 overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=600&q=80"
                    alt="Head Coach"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl text-white tracking-wide">
                    Steph Bloomfield
                  </h3>
                  <p className="text-[#F5B800] text-xs uppercase tracking-widest font-semibold mt-1 mb-3">
                    Head Coach
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Australia Registered Coach. AIBA International Boxing Coach. Decades of competitive boxing and coaching at the highest levels.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
