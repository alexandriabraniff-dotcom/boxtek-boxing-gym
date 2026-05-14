"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero({ onEnquire }: { onEnquire?: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Fallback dark background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />

      {/* Gold accent — top horizontal bar, extended down */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[#F5B800]" />

      {/* Content — bottom-left */}
      <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-16 pb-16 lg:pb-24">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-heading text-[clamp(4rem,10vw,9rem)] text-white leading-none tracking-wide mb-2"
          >
            Train Hard.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-heading text-[clamp(4rem,10vw,9rem)] text-[#F5B800] leading-none tracking-wide mb-8"
          >
            Fight Smart.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={onEnquire}
              className="inline-flex items-center gap-2 bg-[#F5B800] text-[#0A0A0A] font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-[#FFD340] transition-all duration-200 group"
            >
              Get Started
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              href="/training"
              className="inline-flex items-center gap-2 border border-white/50 text-white font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:border-[#F5B800] hover:text-[#F5B800] transition-all duration-200"
            >
              View Classes
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
