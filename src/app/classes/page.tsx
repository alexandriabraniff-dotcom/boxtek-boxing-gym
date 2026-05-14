"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Swords, Dumbbell, Users, Shield, Trophy, Heart, Clock, Star } from "lucide-react";
import Link from "next/link";

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

const classes = [
  {
    icon: Swords,
    title: "Boxing Fundamentals",
    level: "All Levels",
    duration: "60 min",
    times: "Mon, Wed, Fri — 6:00am & 6:00pm",
    desc: "The foundation of everything. Learn stance, guard, footwork, jabs, crosses, hooks, and uppercuts. Delivered in a structured, progressive format so you build correctly from day one.",
    color: "#F5B800",
  },
  {
    icon: Dumbbell,
    title: "Strength & Conditioning",
    level: "All Levels",
    duration: "45 min",
    times: "Tue, Thu — 9:00am & 6:00pm",
    desc: "Boxing-specific fitness training. Expect bag work, circuit training, skipping, and functional strength exercises. Build the engine you need to last every round.",
    color: "#F5B800",
  },
  {
    icon: Users,
    title: "Sparring Sessions",
    level: "Intermediate+",
    duration: "90 min",
    times: "Sat — 8:00am",
    desc: "Supervised technical sparring with matched partners. Work your combinations, timing, and ring craft in a safe, structured environment under coach supervision.",
    color: "#F5B800",
  },
  {
    icon: Shield,
    title: "Defensive Boxing",
    level: "All Levels",
    duration: "60 min",
    times: "Wed — 7:30pm",
    desc: "Master the art of not getting hit. Deep-dive into slipping, rolling, blocking, and parrying. The more you learn to defend, the harder you become to beat.",
    color: "#F5B800",
  },
  {
    icon: Trophy,
    title: "Competition Prep",
    level: "Advanced",
    duration: "120 min",
    times: "By invitation — Tue, Thu, Sat",
    desc: "A dedicated program for licensed amateur and competitive fighters. Periodised training cycles aligned to your fight calendar, managed by our accredited coaching team.",
    color: "#F5B800",
  },
  {
    icon: Heart,
    title: "Fitness Boxing",
    level: "Beginner",
    duration: "45 min",
    times: "Mon, Wed, Fri — 9:00am",
    desc: "Get fit without the fight. This non-contact class uses boxing drills and bag work to deliver a full-body workout. No experience needed, just a willingness to work hard.",
    color: "#F5B800",
  },
];

export default function ClassesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <span className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#F5B800]" />
              <span className="text-[#F5B800] text-xs font-semibold tracking-[0.3em] uppercase">
                Training Programs
              </span>
            </span>
            <h1 className="font-heading text-6xl lg:text-8xl text-white leading-none tracking-wide mb-6">
              Our Classes
            </h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed">
              From your first session to your first fight, we have a program designed for where you are right now.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Classes grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-4">
            {classes.map((cls, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="bg-[#111111] border border-white/5 hover:border-[#F5B800]/30 transition-all duration-300 group">
                  <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 p-8 items-center">
                    {/* Icon + title */}
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-[#F5B800]/10 flex items-center justify-center shrink-0 group-hover:bg-[#F5B800]/20 transition-colors">
                        <cls.icon size={24} className="text-[#F5B800]" />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl lg:text-3xl text-white tracking-wide">
                          {cls.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="flex items-center gap-1.5 text-white/40 text-xs">
                            <Star size={10} className="text-[#F5B800]" />
                            {cls.level}
                          </span>
                          <span className="text-white/20">|</span>
                          <span className="flex items-center gap-1.5 text-white/40 text-xs">
                            <Clock size={10} />
                            {cls.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="lg:px-8">
                      <p className="text-white/50 text-sm leading-relaxed mb-2">{cls.desc}</p>
                      <p className="text-[#F5B800]/70 text-xs font-medium">{cls.times}</p>
                    </div>

                    {/* CTA */}
                    <div className="shrink-0">
                      <Link
                        href="/contact"
                        className="inline-block border border-[#F5B800]/40 text-[#F5B800] text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-[#F5B800] hover:text-[#0A0A0A] transition-all duration-200 whitespace-nowrap"
                      >
                        Book Class
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl lg:text-5xl text-white tracking-wide mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-white/50 mb-8">
              Come in for a free trial class and we&apos;ll find the right fit for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F5B800] text-[#0A0A0A] font-bold text-sm tracking-widest uppercase px-10 py-4 hover:bg-[#FFD340] transition-all duration-200"
            >
              Get Your Free Class
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
