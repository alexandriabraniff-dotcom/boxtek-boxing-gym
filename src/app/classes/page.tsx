"use client";

import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Swords, Dumbbell, Users, Shield, Trophy, Heart, Clock, Plus, Minus } from "lucide-react";
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
    number: "01",
    title: "Boxing Fundamentals",
    level: "All Levels",
    duration: "60 min",
    times: "Mon, Wed, Fri — 6:00am & 6:00pm",
    desc: "The foundation of everything. Learn stance, guard, footwork, jabs, crosses, hooks, and uppercuts. Delivered in a structured, progressive format so you build correctly from day one.",
  },
  {
    icon: Dumbbell,
    number: "02",
    title: "Strength & Conditioning",
    level: "All Levels",
    duration: "45 min",
    times: "Tue, Thu — 9:00am & 6:00pm",
    desc: "Boxing-specific fitness training. Expect bag work, circuit training, skipping, and functional strength exercises. Build the engine you need to last every round.",
  },
  {
    icon: Users,
    number: "03",
    title: "Sparring Sessions",
    level: "Intermediate+",
    duration: "90 min",
    times: "Sat — 8:00am",
    desc: "Supervised technical sparring with matched partners. Work your combinations, timing, and ring craft in a safe, structured environment under coach supervision.",
  },
  {
    icon: Shield,
    number: "04",
    title: "Defensive Boxing",
    level: "All Levels",
    duration: "60 min",
    times: "Wed — 7:30pm",
    desc: "Master the art of not getting hit. Deep-dive into slipping, rolling, blocking, and parrying. The more you learn to defend, the harder you become to beat.",
  },
  {
    icon: Trophy,
    number: "05",
    title: "Competition Prep",
    level: "Advanced",
    duration: "120 min",
    times: "By invitation — Tue, Thu, Sat",
    desc: "A dedicated program for licensed amateur and competitive fighters. Periodised training cycles aligned to your fight calendar, managed by our accredited coaching team.",
  },
  {
    icon: Heart,
    number: "06",
    title: "Fitness Boxing",
    level: "Beginner",
    duration: "45 min",
    times: "Mon, Wed, Fri — 9:00am",
    desc: "Get fit without the fight. This non-contact class uses boxing drills and bag work to deliver a full-body workout. No experience needed, just a willingness to work hard.",
  },
];

export default function ClassesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

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

      {/* Classes accordion */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="divide-y divide-white/5 border-y border-white/5">
            {classes.map((cls, i) => {
              const isOpen = openIndex === i;
              return (
                <FadeIn key={i} delay={i * 0.05}>
                  <div>
                    <button
                      onClick={() => toggle(i)}
                      className="w-full text-left py-7 flex items-center gap-6 group cursor-pointer"
                    >
                      {/* Number */}
                      <span className="font-heading text-sm text-[#F5B800]/40 tracking-widest shrink-0 w-8">
                        {cls.number}
                      </span>

                      {/* Icon */}
                      <div className={`w-10 h-10 flex items-center justify-center shrink-0 transition-colors duration-200 ${isOpen ? "bg-[#F5B800]/20" : "bg-[#F5B800]/10 group-hover:bg-[#F5B800]/20"}`}>
                        <cls.icon size={18} className="text-[#F5B800]" />
                      </div>

                      {/* Title */}
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-heading text-2xl lg:text-3xl tracking-wide transition-colors duration-200 ${isOpen ? "text-[#F5B800]" : "text-white group-hover:text-[#F5B800]"}`}>
                          {cls.title}
                        </h3>
                      </div>

                      {/* Level + Duration */}
                      <div className="hidden sm:flex items-center gap-6 shrink-0">
                        <span className="text-[10px] text-[#F5B800]/60 font-semibold uppercase tracking-widest border border-[#F5B800]/20 px-2 py-1">
                          {cls.level}
                        </span>
                        <span className="flex items-center gap-1.5 text-white/30 text-xs">
                          <Clock size={11} />
                          {cls.duration}
                        </span>
                      </div>

                      {/* Toggle icon */}
                      <div className={`w-8 h-8 border flex items-center justify-center shrink-0 transition-all duration-200 ${isOpen ? "border-[#F5B800] bg-[#F5B800] text-[#0A0A0A]" : "border-white/10 text-white/40 group-hover:border-[#F5B800]/40 group-hover:text-[#F5B800]"}`}>
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pl-14 lg:pl-24 pr-0 lg:pr-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-end">
                            <div>
                              <p className="text-white/55 text-sm leading-relaxed mb-4">
                                {cls.desc}
                              </p>
                              <p className="text-[#F5B800]/70 text-xs font-medium uppercase tracking-wider">
                                {cls.times}
                              </p>
                            </div>
                            <Link
                              href="/contact"
                              className="inline-block border border-[#F5B800] text-[#F5B800] text-xs font-bold tracking-widest uppercase px-8 py-3 hover:bg-[#F5B800] hover:text-[#0A0A0A] transition-all duration-200 whitespace-nowrap shrink-0"
                            >
                              Book This Class
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })}
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
