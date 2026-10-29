import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please fill in all required fields.",
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Simulate sending message
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Auto-hide success message after 6 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#090d16] text-slate-100">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineChatAlt2 className="text-cyan-400 text-sm" />
          <span>Get In Touch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">Connect</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-400">
          Have an entry-level opening, internship, freelance project, or simply want to chat about tech? My inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Info Cards & Social Links (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-800/90 p-6 sm:p-8 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-white">
              Contact Information
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              I am actively looking for full-time junior frontend or full-stack opportunities and am available to join immediately.
            </p>

            <div className="space-y-4 pt-2">
              {/* Email */}
              <a
                href="mailto:dinamonalam@gmail.com"
                className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-500/40 transition group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-950/80 text-cyan-400 border border-blue-800/50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <HiOutlineMail className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">
                    Email Address
                  </span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                    dinamonalam@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:01533500557"
                className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-500/40 transition group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-950/80 text-cyan-400 border border-blue-800/50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <HiOutlinePhone className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">
                    Phone / WhatsApp
                  </span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                    01533500557
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dinamonalamaymin/"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-500/40 transition group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-950/80 text-cyan-400 border border-blue-800/50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <FaLinkedin className="text-xl" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-slate-400 font-medium block">
                    LinkedIn
                  </span>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors truncate block">
                    dinamonalamaymin
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="w-10 h-10 rounded-lg bg-blue-950/80 text-cyan-400 border border-blue-800/50 flex items-center justify-center shrink-0">
                  <HiOutlineLocationMarker className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-slate-200">
                    Chattogram, Bangladesh (Remote / On-site)
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                Social Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/dinamonalam"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 hover:bg-slate-700 hover:text-white flex items-center justify-center text-slate-300 border border-slate-700/70 transition"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dinamonalamaymin/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-xl bg-blue-950/80 text-cyan-400 hover:bg-cyan-500 hover:text-black border border-blue-800/60 flex items-center justify-center transition shadow-xs"
                >
                  <FaLinkedin className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn Network Spotlight Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0A66C2]/90 to-blue-900 border border-blue-500/30 text-white shadow-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-200">
                Professional Network
              </span>
              <h4 className="font-bold text-base mt-0.5 text-white">Let's Connect on LinkedIn</h4>
              <p className="text-xs text-blue-100 mt-1 max-w-xs">
                Open for opportunities, tech collaborations, or engineering chats.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/dinamonalamaymin/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0A66C2] hover:bg-cyan-50 font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition shrink-0"
            >
              <FaLinkedin className="text-base text-[#0A66C2]" />
              <span>Connect &rarr;</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-800/90 p-6 sm:p-10 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Fill out the form below and I'll respond as soon as possible.
            </p>

            {/* Success Toast */}
            {status.submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-700/80 text-emerald-200 flex items-center gap-3">
                <HiOutlineCheckCircle className="text-2xl text-emerald-400 shrink-0" />
                <div>
                  <p className="text-sm font-bold">Message sent successfully!</p>
                  <p className="text-xs text-emerald-300">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status.error && (
              <div className="mb-6 p-3 rounded-xl bg-rose-950/80 border border-rose-800/80 text-rose-300 text-sm">
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-700/80 bg-slate-950/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-700/80 bg-slate-950/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                  Subject / Role
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl border border-slate-700/80 bg-slate-950/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                  Your Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello! We are looking for a Junior Frontend Developer to join our team..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-700/80 bg-slate-950/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-sm" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
