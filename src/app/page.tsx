"use client";

import Hero from "@/components/hero";
import EnquiryModal from "@/components/enquiry-modal";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Swords,
  Dumbbell,
  Users,
  Shield,
  Trophy,
  Heart,
  MapPin,
  Phone,
  Check,
} from "lucide-react";

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
    desc: "Master the basics of stance, footwork, and combinations. Perfect for beginners starting their boxing journey.",
    tag: "All Levels",
  },
  {
    icon: Dumbbell,
    title: "Strength & Conditioning",
    desc: "Build the explosive power and endurance that every boxer needs. High-intensity circuits designed around boxing fitness.",
    tag: "All Levels",
  },
  {
    icon: Users,
    title: "Sparring Sessions",
    desc: "Controlled sparring under expert supervision. Develop your timing, distance management, and ring IQ.",
    tag: "Intermediate+",
  },
  {
    icon: Shield,
    title: "Defensive Boxing",
    desc: "Slips, rolls, blocks, and parries. Learn to make your opponent miss and make them pay.",
    tag: "All Levels",
  },
  {
    icon: Trophy,
    title: "Competition Prep",
    desc: "Dedicated program for amateurs and licensed fighters. Structured training cycles for peak fight performance.",
    tag: "Advanced",
  },
  {
    icon: Heart,
    title: "Fitness Boxing",
    desc: "Get fit, lose weight, and relieve stress without stepping in the ring. High energy, non-contact boxing fitness.",
    tag: "Beginner",
  },
];

const plans = [
  {
    name: "Casual",
    price: "$25",
    per: "per session",
    desc: "Drop in when it suits you.",
    features: [
      "Single class access",
      "All class types",
      "No lock-in contract",
      "Equipment loan available",
    ],
    cta: "Book a Class",
    highlight: false,
  },
  {
    name: "Fighter",
    price: "$89",
    per: "per month",
    desc: "For committed athletes.",
    features: [
      "Unlimited classes",
      "Open gym access",
      "Sparring sessions",
      "Priority booking",
      "1 PT session / month",
    ],
    cta: "Join Now",
    highlight: true,
  },
  {
    name: "Elite",
    price: "$149",
    per: "per month",
    desc: "Full-access premium membership.",
    features: [
      "Everything in Fighter",
      "Unlimited PT sessions",
      "Competition prep access",
      "Nutrition guidance",
      "Dedicated locker",
      "Guest passes (2/mo)",
    ],
    cta: "Join Now",
    highlight: false,
  },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Hero onEnquire={() => setModalOpen(true)} />
      {modalOpen && <EnquiryModal onClose={() => setModalOpen(false)} />}

      {/* About section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border border-[#F5B800]/30" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#F5B800]/30" />
                <Image
                  src="https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800&q=80"
                  alt="Boxing training at Boxtek"
                  width={600}
                  height={750}
                  className="w-full object-cover grayscale contrast-110"
                  style={{ aspectRatio: "4/5" }}
                  unoptimized
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <span className="flex items-center gap-3 mb-6">
                  <span className="block w-8 h-px bg-[#F5B800]" />
                  <span className="text-[#F5B800] text-xs font-semibold tracking-[0.3em] uppercase">
                    About Boxtek
                  </span>
                </span>
                <h2 className="font-heading text-5xl lg:text-6xl text-white leading-none tracking-wide mb-6">
                  Built for Fighters.
                  <br />
                  <span className="text-[#F5B800]">Open to Everyone.</span>
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  Boxtek Boxing Gym was founded with one purpose: to build a genuine boxing community in Adelaide. Whether you&apos;re stepping into a gym for the first time or preparing for your next fight, we have the coaching, the equipment, and the culture to take you further.
                </p>
                <p className="text-white/60 leading-relaxed mb-10">
                  Based in Edwardstown and led by AIBA-accredited coaches, our gym is a place where discipline is earned and respect is given. We don&apos;t just teach boxing. We build character.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-[#F5B800] text-[#F5B800] font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:bg-[#F5B800] hover:text-[#0A0A0A] transition-all duration-200"
                >
                  Our Story
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Classes section */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <span className="flex items-center gap-3 mb-6">
                  <span className="block w-8 h-px bg-[#F5B800]" />
                  <span className="text-[#F5B800] text-xs font-semibold tracking-[0.3em] uppercase">
                    What We Offer
                  </span>
                </span>
                <h2 className="font-heading text-5xl lg:text-6xl text-white leading-none tracking-wide">
                  Classes for Every
                  <br />
                  <span className="text-[#F5B800]">Level of Fighter</span>
                </h2>
              </div>
              <Link
                href="/training"
                className="shrink-0 text-[#F5B800] text-sm font-semibold tracking-widest uppercase hover:opacity-70 transition-opacity"
              >
                View All &rarr;
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {classes.map((cls, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-[#111111] border border-white/5 p-8 hover:border-[#F5B800]/30 transition-all duration-300 group h-full">
                  <div className="flex items-start justify-between mb-6">
                    <cls.icon
                      size={28}
                      className="text-[#F5B800] group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-[10px] text-[#F5B800]/70 font-semibold uppercase tracking-widest border border-[#F5B800]/20 px-2 py-1">
                      {cls.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl text-white tracking-wide mb-3">
                    {cls.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{cls.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width CTA banner */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=1600&q=80"
            alt="Boxing gym"
            fill
            className="object-cover grayscale opacity-20"
            unoptimized
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <FadeIn>
            <h2 className="font-heading text-5xl lg:text-7xl text-white leading-none tracking-wide mb-4">
              Your First Class Is On Us.
            </h2>
            <p className="text-white/50 mb-10 text-lg">
              Come in, wrap up, and see what Boxtek is about.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#F5B800] text-[#0A0A0A] font-bold text-sm tracking-widest uppercase px-10 py-5 hover:bg-[#FFD340] transition-all duration-200"
            >
              Book Your Free Session
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Location section */}
      <section id="find-us" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-[#F5B800]" />
                <span className="text-[#F5B800] text-xs font-semibold tracking-[0.3em] uppercase">
                  Find Us
                </span>
              </span>
              <h2 className="font-heading text-5xl lg:text-6xl text-white leading-none tracking-wide mb-8">
                Come Train With Us
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <MapPin size={20} className="text-[#F5B800] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-white/50 text-sm">3 Lagunta Ave, Edwardstown SA 5039</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone size={20} className="text-[#F5B800] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <a href="tel:0409800626" className="text-white/50 text-sm hover:text-white transition-colors">
                      0409 800 626
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#F5B800] text-[#0A0A0A] font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-[#FFD340] transition-all duration-200"
                >
                  Make an Enquiry
                </button>
              </div>

              <div className="mt-10">
                <h3 className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-4">
                  Class Times
                </h3>
                <div className="bg-[#111111] border border-white/5 divide-y divide-white/5">
                  {[
                    ["Monday - Friday", "6:00am, 9:00am, 6:00pm"],
                    ["Tue / Thu Early", "6:15am Boxing Session"],
                    ["Saturday", "8:00am, 9:30am"],
                    ["Sunday", "Closed"],
                  ].map(([day, times]) => (
                    <div key={day} className="flex justify-between px-5 py-4">
                      <span className="text-white/60 text-sm">{day}</span>
                      <span className="text-white text-sm font-medium">{times}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="aspect-square bg-[#111111] border border-white/5 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.8!2d138.5793!3d-35.0038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c4c8c3b3b3b3%3A0x0!2s3+Lagunta+Ave%2C+Edwardstown+SA+5039!5e0!3m2!1sen!2sau!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Boxtek Boxing Gym location"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
