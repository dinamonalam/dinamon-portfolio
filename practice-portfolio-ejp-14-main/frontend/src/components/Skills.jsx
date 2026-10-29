import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaChrome,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiVercel,
} from "react-icons/si";
import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineTerminal,
  HiOutlineDeviceMobile,
  HiOutlineGlobeAlt,
} from "react-icons/hi";
import { VscVscode } from "react-icons/vsc";

const categories = [
  { id: "all", name: "All Skills", icon: HiOutlineCode },
  { id: "frontend", name: "Frontend", icon: HiOutlineCode },
  { id: "backend", name: "Backend", icon: HiOutlineServer },
  { id: "tools", name: "Tools", icon: HiOutlineTerminal },
];

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "Client-side architecture & responsive UI/UX",
    icon: HiOutlineCode,
    accentGradient: "from-blue-600 via-indigo-600 to-cyan-500",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    iconBg: "bg-blue-100 text-blue-600",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-500" },
      { name: "React", icon: FaReact, color: "text-cyan-500" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-500" },
      { name: "Responsive design", icon: HiOutlineDeviceMobile, color: "text-indigo-600" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "APIs, server runtime & database management",
    icon: HiOutlineServer,
    accentGradient: "from-indigo-600 via-purple-600 to-emerald-500",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    iconBg: "bg-indigo-100 text-indigo-600",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-emerald-500" },
      { name: "Express", icon: SiExpress, color: "text-slate-700" },
      { name: "REST APIs", icon: HiOutlineGlobeAlt, color: "text-blue-600" },
      { name: "MongoDB", icon: SiMongodb, color: "text-emerald-600" },
      { name: "MySQL", icon: SiMysql, color: "text-sky-600" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    subtitle: "Development environment, version control & deployment",
    icon: HiOutlineTerminal,
    accentGradient: "from-teal-600 via-cyan-600 to-blue-600",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    iconBg: "bg-teal-100 text-teal-600",
    skills: [
      { name: "Git and GitHub", icon: FaGitAlt, color: "text-orange-600" },
      { name: "VS Code", icon: VscVscode, color: "text-blue-500" },
      { name: "Figma", icon: FaFigma, color: "text-purple-500" },
      { name: "Chrome DevTools", icon: FaChrome, color: "text-amber-500" },
      { name: "Vercel", icon: SiVercel, color: "text-slate-900" },
      { name: "Netlify", icon: SiNetlify, color: "text-teal-500" },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const visibleCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section
      id="skills"
      className="w-full bg-[#070b14] border-y border-slate-800/80 py-24 px-6 md:px-12 relative overflow-hidden text-slate-100"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <HiOutlineCode className="text-cyan-400 text-sm" />
            <span>Technical Arsenal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">Skills</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400">
            The technologies, libraries, and developer tools I leverage to build fast, responsive, and delightful web applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                    : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white hover:bg-slate-800 shadow-2xs"
                }`}
              >
                <Icon className="text-base" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Category Cards Grid */}
        <div
          className={`grid gap-6 lg:gap-8 ${
            visibleCategories.length === 1
              ? "max-w-2xl mx-auto grid-cols-1"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {visibleCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={category.id}
                className="bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-800/90 shadow-xl hover:shadow-2xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Accent Top Gradient Line */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${category.accentGradient}`}
                ></div>

                <div className="p-6 sm:p-7 flex-grow">
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-800/90 text-cyan-400 border border-slate-700/70 shadow-2xs group-hover:scale-105 transition-transform"
                      >
                        <CategoryIcon className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-500/30 bg-blue-950/70 text-cyan-300"
                    >
                      {category.skills.length} Skills
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 mb-6">
                    {category.subtitle}
                  </p>

                  {/* Skills Pills Container */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;

                      return (
                        <div
                          key={skill.name}
                          className="bg-slate-800/80 hover:bg-slate-750 border border-slate-700/70 hover:border-cyan-400/50 text-slate-200 hover:text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-2 shadow-2xs hover:shadow-xs transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                        >
                          <SkillIcon className={`text-base shrink-0 ${skill.color}`} />
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card Bottom Indicator Bar */}
                <div className="px-6 py-3 bg-slate-950/70 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Ready for production</span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">
                    {category.title.toLowerCase()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
