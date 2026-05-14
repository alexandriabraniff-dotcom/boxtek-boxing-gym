"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Swords, Dumbbell, Users, Shield, Trophy, Heart, Clock, Check, X } from "lucide-react";
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
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
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
    desc: "Stance, guard, footwork, and combinations. Build a correct foundation from your very first session.",
  },
  {
    icon: Dumbbell,
    title: "Strength & Conditioning",
    level: "All Levels",
    duration: "45 min",
    times: "Tue, Thu — 9:00am & 6:00pm",
    desc: "Boxing-specific fitness. Bag work, circuits, skipping, and functional strength to build your engine.",
  },
  {
    icon: Users,
    title: "Sparring Sessions",
    level: "Intermediate+",
    duration: "90 min",
    times: "Saturday — 8:00am",
    desc: "Supervised technical sparring with matched partners. Work your timing and ring craft safely.",
  },
  {
    icon: Shield,
    title: "Defensive Boxing",
    level: "All Levels",
    duration: "60 min",
    times: "Wednesday — 7:30pm",
    desc: "Slips, rolls, blocks, and parries. The harder you are to hit, the more dangerous you become.",
  },
  {
    icon: Trophy,
    title: "Competition Prep",
    level: "Advanced",
    duration: "120 min",
    times: "By invitation — Tue, Thu, Sat",
    desc: "Periodised training cycles for licensed amateur and competitive fighters.",
  },
  {
    icon: Heart,
    title: "Fitness Boxing",
    level: "Beginner",
    duration: "45 min",
    times: "Mon, Wed, Fri — 9:00am",
    desc: "Non-contact, high-energy boxing fitness. Get fit without stepping in the ring.",
  },
];

type PlanFeature = { text: string; included: boolean };

const plans: {
  name: string;
  price: string;
  per: string;
  desc: string;
  features: PlanFeature[];
  highlight: boolean;
}[] = [
  {
    name: "Casual",
    price: "$25",
    per: "per session",
    desc: "Maximum flexibility, no commitment.",
    features: [
      { text: "Single class access", included: true },
      { text: "All class types", included: true },
      { text: "No lock-in contract", included: true },
      { text: "Equipment loan", included: true },
      { text: "Open gym access", included: false },
      { text: "Sparring sessions", included: false },
      { text: "Personal training", included: false },
    ],
    highlight: false,
  },
  {
    name: "Fighter",
    price: "$89",
    per: "per month",
    desc: "For athletes who train consistently.",
    features: [
      { text: "Unlimited classes", included: true },
      { text: "Open gym access", included: true },
      { text: "Sparring sessions", included: true },
      { text: "Priority booking", included: true },
      { text: "1 PT session / month", included: true },
      { text: "Competition prep", included: false },
      { text: "Guest passes", included: false },
    ],
    highlight: true,
  },
  {
    name: "Elite",
    price: "$149",
    per: "per month",
    desc: "Everything Boxtek has to offer.",
    features: [
      { text: "Unlimited classes", included: true },
      { text: "Open gym access", included: true },
      { text: "Sparring sessions", included: true },
      { text: "Unlimited PT sessions", included: true },
      { text: "Competition prep", included: true },
      { text: "Nutrition guidance", included: true },
      { text: "Guest passes (2/mo)", included: true },
    ],
    highlight: false,
  },
];

export default function TrainingPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <span className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#F5B800]" />
              <span className="text-[#F5B800] text-xs font-semibold tracking-[0.3em] uppercase">
                Classes &amp; Membership
              </span>
            </span>
            <h1 className="font-heading text-6xl lg:text-8xl text-white leading-none tracking-wide">
              Train With Us
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Classes */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="mb-12">
            <h2 className="font-heading text-4xl lg:text-5xl text-white leading-none tracking-wide">
              Our Classes
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-3">
            {classes.map((cls, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-[#111111] border border-white/5 hover:border-[#F5B800]/25 transition-all duration-300 group">
                  <div className="grid grid-cols-1 lg:grid-cols-[56px_1fr_auto] gap-6 p-7 items-center">
                    <cls.icon
                      size={24}
                      className="text-[#F5B800] group-hover:scale-110 transition-transform duration-300 shrink-0"
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-heading text-2xl text-white tracking-wide">
                            {cls.title}
                          </h3>
                          <span className="text-[10px] text-[#F5B800]/60 font-semibold uppercase tracking-widest border border-[#F5B800]/20 px-2 py-0.5 shrink-0">
                            {cls.level}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-white/30 text-xs">
                          <Clock size={10} />
                          <span>{cls.duration}</span>
                          <span className="text-white/15">|</span>
                          <span>{cls.times}</span>
                        </div>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed">{cls.desc}</p>
                    </div>
                    <Link
                      href="/#find-us"
                      className="shrink-0 border border-[#F5B800]/40 text-[#F5B800] text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-[#F5B800] hover:text-[#0A0A0A] transition-all duration-200 whitespace-nowrap"
                    >
                      Book Class
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="border-t border-white/5" />
      </div>

      {/* Membership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="mb-12">
            <h2 className="font-heading text-4xl lg:text-5xl text-white leading-none tracking-wide">
              Membership Plans
            </h2>
            <p className="text-white/40 text-sm mt-3">
              No lock-ins. No joining fees. Cancel anytime.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((plan, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div
                  className={`relative p-8 h-full flex flex-col ${
                    plan.highlight
                      ? "bg-[#F5B800] text-[#0A0A0A]"
                      : "bg-[#111111] text-white border border-white/5"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-[#0A0A0A] text-[#F5B800] text-xs font-bold tracking-widest uppercase px-4 py-1">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className={`font-heading text-4xl tracking-wide mb-1 ${plan.highlight ? "text-[#0A0A0A]" : "text-white"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.highlight ? "text-[#0A0A0A]/60" : "text-white/40"}`}>
                    {plan.desc}
                  </p>
                  <div className="mb-8 pb-8 border-b border-current/10">
                    <span className="font-heading text-6xl leading-none">{plan.price}</span>
                    <span className={`text-sm ml-2 ${plan.highlight ? "text-[#0A0A0A]/60" : "text-white/40"}`}>
                      {plan.per}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-3 mb-10 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm">
                        {f.included ? (
                          <Check size={13} className={plan.highlight ? "text-[#0A0A0A]" : "text-[#F5B800]"} />
                        ) : (
                          <X size={13} className={plan.highlight ? "text-[#0A0A0A]/25" : "text-white/15"} />
                        )}
                        <span className={
                          f.included
                            ? plan.highlight ? "text-[#0A0A0A]/80" : "text-white/70"
                            : plan.highlight ? "text-[#0A0A0A]/25" : "text-white/25"
                        }>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/#find-us"
                    className={`text-center font-bold text-sm tracking-widest uppercase py-4 transition-all duration-200 ${
                      plan.highlight
                        ? "bg-[#0A0A0A] text-[#F5B800] hover:bg-[#111111]"
                        : "border border-[#F5B800] text-[#F5B800] hover:bg-[#F5B800] hover:text-[#0A0A0A]"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Free trial CTA */}
      <section className="py-20 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl lg:text-5xl text-white tracking-wide mb-3">
              Not Sure Where to Start?
            </h2>
            <p className="text-white/40 mb-8">
              Your first class is free. Come in and see what Boxtek is about.
            </p>
            <Link
              href="/#find-us"
              className="inline-flex items-center gap-2 bg-[#F5B800] text-[#0A0A0A] font-bold text-sm tracking-widest uppercase px-10 py-4 hover:bg-[#FFD340] transition-all duration-200"
            >
              Book a Free Class
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
