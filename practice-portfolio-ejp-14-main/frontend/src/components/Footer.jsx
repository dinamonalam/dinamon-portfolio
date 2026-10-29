import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail, HiArrowUp } from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060911] border-t border-slate-800/80 text-slate-400 print:hidden mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <Link
              to="/"
              className="text-xl font-extrabold text-white flex items-center gap-2.5"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-500 flex items-center justify-center text-white font-mono text-sm shadow-xs">
                D
              </span>
              <span>
                Dinamon<span className="text-cyan-400">.dev</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Passionate Fresher Web Developer specializing in building clean, responsive, and user-centric web applications with React, Next.js, and modern technologies.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs text-slate-400 font-medium">
                Open to Junior Frontend / Full-Stack Opportunities
              </span>
            </div>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Get in Touch
            </h4>
            <p className="text-sm text-slate-400">
              Have a question or looking to hire? Feel free to reach out anytime.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/dinamonalam"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-800 flex items-center justify-center text-slate-300 transition"
              >
                <FaGithub className="text-base" />
              </a>
              <a
                href="https://www.linkedin.com/in/dinamonalamaymin/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white border border-slate-800 flex items-center justify-center text-slate-300 transition"
              >
                <FaLinkedin className="text-base" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter Profile"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-sky-500 hover:text-white border border-slate-800 flex items-center justify-center text-slate-300 transition"
              >
                <FaTwitter className="text-base" />
              </a>
              <a
                href="mailto:dinamonalam@gmail.com"
                aria-label="Send Email"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-rose-500 hover:text-white border border-slate-800 flex items-center justify-center text-slate-300 transition"
              >
                <HiMail className="text-base" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Dinamon Alam Aymin. Designed &amp; Built with React &amp; Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 font-medium transition cursor-pointer"
          >
            <span>Back to top</span>
            <HiArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
