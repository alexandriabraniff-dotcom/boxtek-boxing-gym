"use client";

import { useState } from "react";
import { X, CheckCircle } from "lucide-react";

const classOptions = [
  "Boxing Fundamentals",
  "Strength & Conditioning",
  "Sparring Sessions",
  "Defensive Boxing",
  "Competition Prep",
  "Fitness Boxing",
  "General Enquiry",
];

interface EnquiryModalProps {
  onClose: () => void;
}

export default function EnquiryModal({ onClose }: EnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    classType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens mailto with form data pre-filled
    const subject = encodeURIComponent(`Boxtek Enquiry — ${form.classType || "General"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nClass: ${form.classType}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@boxtekboxinggym.com.au?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[#111111] border border-white/10 shadow-2xl">
        {/* Gold top bar */}
        <div className="h-1 bg-[#F5B800] w-full" />

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="font-heading text-3xl text-white tracking-wide">
                Make an Enquiry
              </h2>
              <p className="text-white/40 text-sm mt-1">
                Fill in your details and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white/40 hover:text-white transition-colors p-1 shrink-0"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <CheckCircle size={48} className="text-[#F5B800]" />
              <h3 className="font-heading text-2xl text-white tracking-wide">
                Enquiry Sent
              </h3>
              <p className="text-white/50 text-sm">
                Thanks, {form.name.split(" ")[0]}! We&apos;ll be in touch shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-4 bg-[#F5B800] text-[#0A0A0A] font-bold text-xs tracking-widest uppercase px-8 py-3 hover:bg-[#FFD340] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name + Phone row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/50 text-xs uppercase tracking-widest font-medium">
                    Full Name <span className="text-[#F5B800]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="bg-[#1A1A1A] border border-white/10 text-white text-sm px-4 py-3 placeholder-white/20 focus:outline-none focus:border-[#F5B800]/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/50 text-xs uppercase tracking-widest font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="04xx xxx xxx"
                    className="bg-[#1A1A1A] border border-white/10 text-white text-sm px-4 py-3 placeholder-white/20 focus:outline-none focus:border-[#F5B800]/50 transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-white/50 text-xs uppercase tracking-widest font-medium">
                  Email <span className="text-[#F5B800]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className="bg-[#1A1A1A] border border-white/10 text-white text-sm px-4 py-3 placeholder-white/20 focus:outline-none focus:border-[#F5B800]/50 transition-colors"
                />
              </div>

              {/* Class select */}
              <div className="flex flex-col gap-1.5">
                <label className="text-white/50 text-xs uppercase tracking-widest font-medium">
                  I&apos;m interested in <span className="text-[#F5B800]">*</span>
                </label>
                <select
                  required
                  value={form.classType}
                  onChange={(e) => setForm({ ...form, classType: e.target.value })}
                  className="bg-[#1A1A1A] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#F5B800]/50 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-white/30">
                    Select a class or enquiry type
                  </option>
                  {classOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#1A1A1A]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-white/50 text-xs uppercase tracking-widest font-medium">
                  Message
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Any questions or additional info..."
                  className="bg-[#1A1A1A] border border-white/10 text-white text-sm px-4 py-3 placeholder-white/20 focus:outline-none focus:border-[#F5B800]/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-[#F5B800] text-[#0A0A0A] font-bold text-sm tracking-widest uppercase py-4 hover:bg-[#FFD340] transition-colors"
              >
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
