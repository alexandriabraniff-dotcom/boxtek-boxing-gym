"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked — video won't play, background fallback shows
      });
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
        {/* Drop your MP4 file into public/ and name it hero-video.mp4 */}
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Fallback dark background (shows if no video) */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      {/* Dark overlay — heavier at the bottom-left where text lives */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />

      {/* Gold accent line — left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F5B800]" />

      {/* Content — bottom-left positioned (Figma layout) */}
      <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-16 pb-16 lg:pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="block w-8 h-px bg-[#F5B800]" />
            <span className="text-[#F5B800] text-xs font-semibold tracking-[0.3em] uppercase">
              Edwardstown, Adelaide SA
            </span>
          </motion.div>

          {/* H1 — two lines as per Figma */}
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

          {/* Two CTAs — as per Figma */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 bg-[#F5B800] text-[#0A0A0A] font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-[#FFD340] transition-all duration-200 group"
            >
              Join Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/classes"
              className="inline-flex items-center gap-2 border border-white/50 text-white font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:border-[#F5B800] hover:text-[#F5B800] transition-all duration-200"
            >
              View Classes
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-8 lg:right-16 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-[0.2em] uppercase rotate-90 origin-center mb-6">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
