"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

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

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <span className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#F5B800]" />
              <span className="text-[#F5B800] text-xs font-semibold tracking-[0.3em] uppercase">
                Get In Touch
              </span>
            </span>
            <h1 className="font-heading text-6xl lg:text-8xl text-white leading-none tracking-wide mb-6">
              Come Find Us
            </h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed">
              Questions about classes, membership, or just want to come have a look? Get in touch or drop by the gym.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact details + map */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Details */}
            <FadeIn>
              <div className="flex flex-col gap-8">
                {/* Address */}
                <div className="bg-[#111111] border border-white/5 p-8">
                  <div className="flex gap-4 mb-2">
                    <MapPin size={20} className="text-[#F5B800] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Address</h3>
                      <p className="text-white/50 text-sm">3 Lagunta Ave</p>
                      <p className="text-white/50 text-sm">Edwardstown SA 5039</p>
                      <a
                        href="https://www.google.com/maps/search/3+Lagunta+Ave+Edwardstown+SA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F5B800] text-xs uppercase tracking-widest font-semibold mt-3 inline-block hover:opacity-70 transition-opacity"
                      >
                        Get Directions &rarr;
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-[#111111] border border-white/5 p-8">
                  <div className="flex gap-4">
                    <Phone size={20} className="text-[#F5B800] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:0409800626"
                        className="text-white/50 text-sm hover:text-white transition-colors"
                      >
                        0409 800 626
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-[#111111] border border-white/5 p-8">
                  <div className="flex gap-4">
                    <Clock size={20} className="text-[#F5B800] shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-4">Class Times</h3>
                      <div className="divide-y divide-white/5">
                        {[
                          ["Mon - Fri", "6:00am, 9:00am, 6:00pm"],
                          ["Tue / Thu Early", "6:15am Boxing Session"],
                          ["Saturday", "8:00am, 9:30am"],
                          ["Sunday", "Closed"],
                        ].map(([day, time]) => (
                          <div
                            key={day}
                            className="flex justify-between py-3 text-sm"
                          >
                            <span className="text-white/50">{day}</span>
                            <span className="text-white font-medium">{time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="bg-[#111111] border border-white/5 p-8">
                  <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/people/Boxtek-Boxing-Gym/100063717121132/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-white/10 text-white/50 hover:border-[#F5B800] hover:text-[#F5B800] px-4 py-3 text-sm transition-all duration-200"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                      Facebook
                    </a>
                    <a
                      href="https://www.tiktok.com/@boxtekboxinggym"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-white/10 text-white/50 hover:border-[#F5B800] hover:text-[#F5B800] px-4 py-3 text-sm transition-all duration-200"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.84a8.16 8.16 0 0 0 4.77 1.52V6.91a4.85 4.85 0 0 1-1-.22z" />
                      </svg>
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Map */}
            <FadeIn delay={0.2}>
              <div className="h-full min-h-[500px] bg-[#111111] border border-white/5 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.8!2d138.5793!3d-35.0038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c4c8c3b3b3b3%3A0x0!2s3+Lagunta+Ave%2C+Edwardstown+SA+5039!5e0!3m2!1sen!2sau!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)", minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Boxtek Boxing Gym location map"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Free trial CTA */}
      <section className="py-20 bg-[#F5B800]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <FadeIn>
            <h2 className="font-heading text-4xl lg:text-6xl text-[#0A0A0A] leading-none tracking-wide mb-4">
              Your First Class Is Free.
            </h2>
            <p className="text-[#0A0A0A]/60 mb-8 text-lg">
              Call us or come in to book your free trial session.
            </p>
            <a
              href="tel:0409800626"
              className="inline-flex items-center gap-2 bg-[#0A0A0A] text-[#F5B800] font-bold text-sm tracking-widest uppercase px-10 py-5 hover:bg-[#111111] transition-all duration-200"
            >
              <Phone size={16} />
              Call 0409 800 626
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
