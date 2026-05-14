"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Check, X } from "lucide-react";
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

type PlanFeature = { text: string; included: boolean };

const plans: {
  name: string;
  price: string;
  per: string;
  desc: string;
  features: PlanFeature[];
  cta: string;
  highlight: boolean;
}[] = [
  {
    name: "Casual",
    price: "$25",
    per: "per session",
    desc: "No commitment, maximum flexibility.",
    features: [
      { text: "Single class access", included: true },
      { text: "All class types", included: true },
      { text: "No lock-in contract", included: true },
      { text: "Equipment loan available", included: true },
      { text: "Open gym access", included: false },
      { text: "Sparring sessions", included: false },
      { text: "Personal training", included: false },
      { text: "Competition prep", included: false },
    ],
    cta: "Book a Class",
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
      { text: "Competition prep access", included: false },
      { text: "Nutrition guidance", included: false },
      { text: "Guest passes", included: false },
    ],
    cta: "Join Now",
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
      { text: "Competition prep access", included: true },
      { text: "Nutrition guidance", included: true },
      { text: "Dedicated locker", included: true },
      { text: "Guest passes (2/month)", included: true },
    ],
    cta: "Join Now",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Do I need experience to join?",
    a: "Not at all. Our Fitness Boxing and Boxing Fundamentals classes are designed for complete beginners. Show up, wrap your hands, and we&apos;ll take care of the rest.",
  },
  {
    q: "What do I need to bring?",
    a: "Comfortable workout gear and water. We have boxing gloves and hand wraps available for loan, or you can bring your own.",
  },
  {
    q: "Are there lock-in contracts?",
    a: "The Fighter and Elite memberships are month-to-month with no lock-in contracts. Cancel anytime with 7 days notice.",
  },
  {
    q: "Is there a joining fee?",
    a: "No joining fees, no hidden costs. The price you see is what you pay.",
  },
  {
    q: "Can I try before I commit?",
    a: "Yes. Your first class is free. Come in, meet the coaches, and get a feel for the gym before you sign up for anything.",
  },
];

export default function MembershipPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <span className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#F5B800]" />
              <span className="text-[#F5B800] text-xs font-semibold tracking-[0.3em] uppercase">
                Membership Plans
              </span>
            </span>
            <h1 className="font-heading text-6xl lg:text-8xl text-white leading-none tracking-wide mb-6">
              Choose Your Plan
            </h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed">
              Transparent pricing. No lock-ins. No surprises. Just great boxing.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((plan, i) => (
              <FadeIn key={i} delay={i * 0.1}>
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
                  <h3
                    className={`font-heading text-4xl tracking-wide mb-1 ${
                      plan.highlight ? "text-[#0A0A0A]" : "text-white"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${
                      plan.highlight ? "text-[#0A0A0A]/60" : "text-white/40"
                    }`}
                  >
                    {plan.desc}
                  </p>
                  <div className="mb-8 pb-8 border-b border-current/10">
                    <span className="font-heading text-6xl leading-none">{plan.price}</span>
                    <span
                      className={`text-sm ml-2 ${
                        plan.highlight ? "text-[#0A0A0A]/60" : "text-white/40"
                      }`}
                    >
                      {plan.per}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-3 mb-10 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm">
                        {f.included ? (
                          <Check
                            size={14}
                            className={plan.highlight ? "text-[#0A0A0A]" : "text-[#F5B800]"}
                          />
                        ) : (
                          <X
                            size={14}
                            className={
                              plan.highlight ? "text-[#0A0A0A]/30" : "text-white/20"
                            }
                          />
                        )}
                        <span
                          className={
                            f.included
                              ? plan.highlight
                                ? "text-[#0A0A0A]/80"
                                : "text-white/70"
                              : plan.highlight
                              ? "text-[#0A0A0A]/30"
                              : "text-white/25"
                          }
                        >
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`text-center font-bold text-sm tracking-widest uppercase py-4 transition-all duration-200 ${
                      plan.highlight
                        ? "bg-[#0A0A0A] text-[#F5B800] hover:bg-[#111111]"
                        : "border border-[#F5B800] text-[#F5B800] hover:bg-[#F5B800] hover:text-[#0A0A0A]"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <FadeIn className="mb-16">
            <span className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#F5B800]" />
              <span className="text-[#F5B800] text-xs font-semibold tracking-[0.3em] uppercase">
                Common Questions
              </span>
            </span>
            <h2 className="font-heading text-5xl text-white leading-none tracking-wide">
              FAQs
            </h2>
          </FadeIn>
          <div className="flex flex-col divide-y divide-white/5">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="py-8">
                  <h3 className="font-heading text-xl text-white tracking-wide mb-3">
                    {faq.q}
                  </h3>
                  <p
                    className="text-white/50 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
