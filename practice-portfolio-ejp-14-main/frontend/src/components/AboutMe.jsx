import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineSparkles,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineBriefcase,
} from "react-icons/hi";
import { FaLaptopCode, FaLinkedin, FaBullseye } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

const focusedItems = [
  "Building a strong foundation in web development.",
  "Developing practical projects to gain hands-on experience.",
  "Improving problem-solving and programming skills.",
  "Exploring new technologies and modern development practices.",
  "Connecting with developers and collaborating on interesting projects.",
];

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#090d16] text-slate-100">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineUser className="text-cyan-400 text-sm" />
          <span>About Me</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">Am</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-400">
          A glimpse into my passion, core focus areas, and career goals as a dedicated software developer.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Real Photo & Quick Profile Card (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-800/90 p-6 sm:p-7 shadow-xl overflow-hidden">
            {/* Ambient Accent Glow */}
            <div className="w-32 h-32 bg-blue-500/15 rounded-full blur-2xl absolute -top-4 -right-4 -z-0 pointer-events-none"></div>

            {/* Profile Image Frame */}
            <div className="relative mb-6 group">
              <div className="w-full aspect-[4/4.8] sm:aspect-[4/4.5] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-sm">
                <img
                  src={profileImg}
                  alt="Dinamon Alam Aymin - Fresher Web Developer"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Status Pill Badge */}
              <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-md border border-slate-700/80 py-1.5 px-3 rounded-full shadow-md flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-200">
                  Open to Opportunities
                </span>
              </div>
            </div>

            {/* Profile Meta */}
            <div className="border-b border-slate-800/90 pb-4 mb-4">
              <h3 className="text-2xl font-black text-white">
                Dinamon Alam Aymin
              </h3>
              <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                Aspiring Software Developer | Frontend &amp; React
              </p>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1.5">
                <HiOutlineLocationMarker className="text-cyan-400 text-sm" />
                <span>Chattogram, Bangladesh</span>
              </div>
            </div>

            {/* Quick Specs List */}
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                <span className="flex items-center gap-2 text-slate-400">
                  <HiOutlineBriefcase className="text-cyan-400" /> Availability:
                </span>
                <span className="font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded text-xs">
                  Immediate Joining
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                <span className="flex items-center gap-2 text-slate-400">
                  <FaLaptopCode className="text-cyan-400" /> Core Focus:
                </span>
                <span className="font-semibold text-slate-200">
                  Web &amp; Software Dev
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="flex items-center gap-2 text-slate-400">
                  <HiOutlineMail className="text-cyan-400" /> Communication:
                </span>
                <span className="font-semibold text-slate-200">
                  English &amp; Bengali
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative, What I'm Focused On, and Goal (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Narrative */}
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Passionate about technology &amp; building meaningful digital solutions.
            </h3>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              I am passionate about technology, web development, and building meaningful digital solutions.
            </p>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              My focus is on improving my programming skills, developing practical projects, and growing as a software developer.
            </p>
          </div>

          {/* What I'm Focused On */}
          <div className="space-y-3 pt-2">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400 inline-block"></span>
              <span>What I’m Focused On</span>
            </h4>

            <div className="grid grid-cols-1 gap-2.5">
              {focusedItems.map((item, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/90 shadow-2xs hover:border-cyan-500/40 hover:bg-slate-850/80 transition-all flex items-start gap-3.5 group"
                >
                  <span className="w-6 h-6 rounded-lg bg-blue-950/80 text-cyan-400 border border-blue-800/60 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                    {index + 1}
                  </span>
                  <p className="text-sm sm:text-[15px] font-medium text-slate-200 leading-snug pt-0.5">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* My Goal Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 via-indigo-950/30 to-slate-900/60 border border-blue-500/30 shadow-xs relative overflow-hidden">
            {/* Accent side border */}
            <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-cyan-400"></div>

            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <FaBullseye className="text-sm" />
              </div>
              <h4 className="text-lg font-bold text-white">
                My Goal
              </h4>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium pl-1">
              My goal is to become a skilled software developer, contribute to impactful projects, and build user-friendly applications that solve real-world problems.
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-blue-500/25 hover:shadow-lg transition-all duration-300"
            >
              <HiOutlineSparkles className="text-lg" />
              <span>Inspect Full Resume</span>
            </Link>

            <a
              href="https://www.linkedin.com/in/dinamonalamaymin/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 text-[#70b5f9] border border-slate-700/80 hover:bg-slate-800 px-5 py-3 rounded-xl font-semibold shadow-xs transition-all duration-300"
            >
              <FaLinkedin className="text-lg" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
