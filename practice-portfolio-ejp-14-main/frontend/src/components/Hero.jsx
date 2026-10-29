import { Link } from "react-router-dom";
import { HiDocumentText, HiArrowRight } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 bg-[#090d16] text-slate-100 overflow-hidden"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[22rem] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      {/* Subtle modern dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none -z-0"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column: Heading, Subtitle & Actions */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-300 text-xs sm:text-sm font-semibold shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for Hire • Fresher Web Developer</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 font-extrabold">
                Dinamon Alam Aymin
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-200 tracking-tight leading-snug">
              Transforming ideas into fast, interactive web applications.
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
            Fresher web developer with hands-on project experience in HTML, CSS, JavaScript, React, and Next.js. Looking for my first role on a team where I can ship real features and keep learning.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              to="/resume"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
            >
              <HiDocumentText className="text-xl" />
              <span>View Resume / CV</span>
            </Link>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-500 px-6 py-3.5 rounded-xl font-semibold shadow-xs hover:shadow-md transition-all duration-300 text-sm sm:text-base cursor-pointer"
            >
              <span>Explore Projects</span>
              <HiArrowRight className="text-base text-slate-400" />
            </a>

            <a
              href="https://www.linkedin.com/in/dinamonalamaymin/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0A66C2]/20 hover:bg-[#0A66C2]/30 text-[#70b5f9] border border-[#0A66C2]/40 px-5 py-3.5 rounded-xl font-semibold shadow-xs hover:shadow-md transition-all duration-300 text-sm sm:text-base cursor-pointer"
            >
              <FaLinkedin className="text-lg text-[#70b5f9]" />
              <span>LinkedIn</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center text-sm font-semibold text-slate-400 hover:text-cyan-400 px-3 py-3.5 transition"
            >
              Get in Touch &rarr;
            </a>
          </div>


        </div>

        {/* Right Column: Code Showcase & Terminal */}
        <div className="lg:col-span-5 relative w-full pt-4 lg:pt-0">
          <div className="relative mx-auto max-w-lg lg:max-w-none group">
            {/* Glowing Offset Shadow Card */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 opacity-60 blur-xs shadow-2xl pointer-events-none -z-0 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>

            {/* Terminal Window Box */}
            <div className="relative z-10 bg-[#0d1527] rounded-2xl border border-slate-700/90 shadow-2xl overflow-hidden text-left">
              {/* Terminal Window Header */}
              <div className="bg-[#090e1a] px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-xs"></span>
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-xs"></span>
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-xs"></span>
                  <span className="text-xs sm:text-sm text-slate-400 font-mono ml-2">profile.js</span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-xs sm:text-sm md:text-[15px] leading-relaxed text-slate-200 overflow-x-auto">
                <p className="mb-1">
                  <span className="text-sky-400">const</span>{" "}
                  <span className="text-slate-100">developer</span>{" "}
                  <span className="text-slate-400">=</span>{" "}
                  <span className="text-slate-100">&#123;</span>
                </p>
                <p className="pl-5 sm:pl-6 mb-1">
                  <span className="text-sky-300">name</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-amber-300">"Dinamon Alam Aymin"</span>
                  <span className="text-slate-400">,</span>
                </p>
                <p className="pl-5 sm:pl-6 mb-1">
                  <span className="text-sky-300">role</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-amber-300">"Frontend Developer"</span>
                  <span className="text-slate-400">,</span>
                </p>
                <p className="pl-5 sm:pl-6 mb-1">
                  <span className="text-sky-300">stack</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-slate-300">[</span>
                  <span className="text-amber-300">"HTML"</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-amber-300">"CSS"</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-amber-300">"JS"</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-amber-300">"React"</span>
                  <span className="text-slate-300">]</span>
                  <span className="text-slate-400">,</span>
                </p>
                <p className="pl-5 sm:pl-6 mb-1">
                  <span className="text-sky-300">location</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-amber-300">"Chattogram, Bangladesh"</span>
                  <span className="text-slate-400">,</span>
                </p>
                <p className="pl-5 sm:pl-6 mb-1">
                  <span className="text-sky-300">openToWork</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-emerald-400 font-semibold">true</span>
                  <span className="text-slate-400">,</span>
                </p>
                <p>
                  <span className="text-slate-100">&#125;;</span>
                  <span className="inline-block w-2.5 h-4.5 bg-emerald-400 ml-1.5 align-middle animate-pulse"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;