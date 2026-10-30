import { Link } from "react-router-dom";
import {
  HiArrowLeft,
  HiPrinter,
  HiDownload,
  HiExternalLink,
} from "react-icons/hi";
import {
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import profilePhoto from "../assets/profile.jpg";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#090d16] py-10 px-4 sm:px-6 lg:px-8 text-slate-800 font-sans print:bg-white print:py-0 print:px-0">
      {/* Top Action Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 bg-slate-900 border border-slate-700/80 px-4 py-2.5 rounded-lg shadow-sm hover:bg-slate-800 hover:text-cyan-400 transition"
        >
          <HiArrowLeft className="text-base" /> Back to Portfolio
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/Dinamon_Alam_Aymin_Resume.pdf"
            download="Dinamon_Alam_Aymin_Resume.pdf"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 bg-slate-900 border border-slate-700/80 hover:bg-slate-800 hover:text-cyan-400 px-4 py-2.5 rounded-lg shadow-sm transition cursor-pointer"
          >
            <HiDownload className="text-base text-cyan-400" /> Download PDF
          </a>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-5 py-2.5 rounded-lg shadow-md shadow-blue-500/20 hover:shadow-cyan-500/30 transition cursor-pointer"
          >
            <HiPrinter className="text-base" /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/80 print:shadow-none print:border-none print:rounded-none print:max-w-none print:w-full"
        style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}
      >
        {/* Top Header Banner */}
        <header className="bg-[#2c3440] text-white flex flex-col sm:flex-row print:flex-row">
          {/* Avatar Area (Altered to align with left sidebar) */}
          <div className="w-full sm:w-[35%] print:w-[35%] bg-[#242b36] py-6 px-6 flex items-center justify-center">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-900 shrink-0">
              <img
                src={profilePhoto}
                alt="Dinamon Alam Aymin"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Name & Title Banner */}
          <div className="w-full sm:w-[65%] print:w-[65%] px-6 sm:px-10 py-6 sm:py-8 flex flex-col justify-center text-center sm:text-left print:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider uppercase text-white">
              DINAMON ALAM AYMIN
            </h1>
            <p className="text-xs sm:text-sm font-medium tracking-[0.22em] text-slate-300 uppercase mt-1.5">
              ASPIRING SOFTWARE DEVELOPER
            </p>
          </div>
        </header>

        {/* Two-Column Body */}
        <div className="flex flex-col sm:flex-row print:flex-row min-h-[700px]">
          {/* Left Column (Sidebar) */}
          <aside className="w-full sm:w-[35%] print:w-[35%] bg-[#edf1f7] p-6 sm:p-7 space-y-7 border-r border-gray-200/60 print:bg-[#edf1f7]">
            {/* Contact Section */}
            <div>
              <h2 className="text-[#2c3440] font-black text-sm tracking-widest uppercase border-b-2 border-[#2c3440] pb-1.5 mb-3.5">
                CONTACT
              </h2>
              <div className="space-y-3 text-xs leading-snug text-gray-700">
                <a
                  href="https://www.linkedin.com/in/dinamonalamaymin/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2.5 hover:text-blue-600 transition group"
                >
                  <FaLinkedin className="text-sm text-[#2c3440] shrink-0 mt-0.5 group-hover:text-blue-600" />
                  <span className="break-all font-medium">
                    linkedin.com/in/dinamonalamaymin
                  </span>
                </a>

                <a
                  href="https://github.com/dinamonalam"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2.5 hover:text-blue-600 transition group"
                >
                  <FaGithub className="text-sm text-[#2c3440] shrink-0 mt-0.5 group-hover:text-blue-600" />
                  <span className="break-all font-medium">
                    https://github.com/dinamonalam
                  </span>
                </a>

                <a
                  href="tel:+8801533500557"
                  className="flex items-start gap-2.5 hover:text-blue-600 transition group"
                >
                  <FaPhoneAlt className="text-xs text-[#2c3440] shrink-0 mt-0.5 group-hover:text-blue-600" />
                  <span className="font-medium">+880 1533500557</span>
                </a>

                <a
                  href="mailto:dinamonalam@gmail.com"
                  className="flex items-start gap-2.5 hover:text-blue-600 transition group"
                >
                  <FaEnvelope className="text-xs text-[#2c3440] shrink-0 mt-0.5 group-hover:text-blue-600" />
                  <span className="break-all font-medium">
                    dinamonalam@gmail.com
                  </span>
                </a>

                <div className="flex items-start gap-2.5">
                  <FaMapMarkerAlt className="text-xs text-[#2c3440] shrink-0 mt-0.5" />
                  <span className="font-medium">
                    Halishahar, Chattogram, Bangladesh
                  </span>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h2 className="text-[#2c3440] font-black text-sm tracking-widest uppercase border-b-2 border-[#2c3440] pb-1.5 mb-3.5">
                SKILLS
              </h2>

              {/* Personal Skills */}
              <div className="mb-4">
                <h3 className="text-[11px] font-bold tracking-wider uppercase text-gray-800 mb-2">
                  PERSONAL SKILLS
                </h3>
                <ul className="space-y-1.5 text-xs text-gray-700 pl-3">
                  <li className="list-disc marker:text-[#2c3440]">
                    Problem Solving
                  </li>
                  <li className="list-disc marker:text-[#2c3440]">Teamwork</li>
                  <li className="list-disc marker:text-[#2c3440]">
                    Time Management
                  </li>
                  <li className="list-disc marker:text-[#2c3440]">
                    Adaptability
                  </li>
                  <li className="list-disc marker:text-[#2c3440]">
                    Digital Marketing
                  </li>
                </ul>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-[11px] font-bold tracking-wider uppercase text-gray-800 mb-2">
                  TECHNICAL SKILLS
                </h3>
                <ul className="space-y-1.5 text-xs text-gray-700 pl-3">
                  <li className="list-disc marker:text-[#2c3440]">HTML5</li>
                  <li className="list-disc marker:text-[#2c3440]">CSS3</li>
                  <li className="list-disc marker:text-[#2c3440]">
                    Tailwind CSS
                  </li>
                  <li className="list-disc marker:text-[#2c3440]">JavaScript</li>
                  <li className="list-disc marker:text-[#2c3440]">TypeScript</li>
                  <li className="list-disc marker:text-[#2c3440]">React.js</li>
                  <li className="list-disc marker:text-[#2c3440]">Next.js</li>
                  <li className="list-disc marker:text-[#2c3440]">MySQL</li>
                </ul>
              </div>
            </div>

            {/* Languages Section */}
            <div>
              <h2 className="text-[#2c3440] font-black text-sm tracking-widest uppercase border-b-2 border-[#2c3440] pb-1.5 mb-3.5">
                LANGUAGES
              </h2>
              <ul className="space-y-1.5 text-xs text-gray-700 pl-3">
                <li className="list-disc marker:text-[#2c3440]">
                  English - Intermediate
                </li>
                <li className="list-disc marker:text-[#2c3440]">
                  Bangla - Native
                </li>
                <li className="list-disc marker:text-[#2c3440]">
                  Hindi - Basic
                </li>
              </ul>
            </div>
          </aside>

          {/* Right Column (Main Content) */}
          <main className="w-full sm:w-[65%] print:w-[65%] p-6 sm:p-9 bg-white space-y-7">
            {/* Profile Section */}
            <div className="relative pl-7 border-l-2 border-gray-300">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-[#2c3440] text-white flex items-center justify-center text-xs shadow-sm">
                <FaUser className="text-[11px]" />
              </div>

              <h2 className="text-sm font-black text-[#2c3440] tracking-widest uppercase mb-2">
                PROFILE
              </h2>
              <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed text-justify">
                Computer Science and Engineering student with an interest in web
                development and software development. Experienced in building
                academic projects using modern web technologies and databases.
                Eager to improve programming and problem-solving skills while
                gaining practical experience.
              </p>
            </div>

            {/* Projects Section */}
            <div className="relative pl-7 border-l-2 border-gray-300 space-y-4">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-[#2c3440] text-white flex items-center justify-center text-xs shadow-sm">
                <FaBriefcase className="text-[11px]" />
              </div>

              <h2 className="text-sm font-black text-[#2c3440] tracking-widest uppercase">
                PROJECTS
              </h2>

              <div className="space-y-3.5 text-xs sm:text-[13px]">
                {/* Project 1: FitLog */}
                <div>
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <h3 className="font-bold text-gray-900">
                      FitLog – Workout Library &amp; Tracker
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] print:hidden">
                      <a
                        href="https://fitlog-sigma-eight.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline font-semibold inline-flex items-center gap-0.5"
                      >
                        Live Demo <HiExternalLink className="text-xs" />
                      </a>
                      <span className="text-gray-300">•</span>
                      <a
                        href="https://github.com/dinamonalam/fitlog"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-700 hover:underline font-semibold inline-flex items-center gap-0.5"
                      >
                        GitHub <HiExternalLink className="text-xs" />
                      </a>
                    </div>
                  </div>
                  <ul className="mt-1 pl-4 text-gray-700 leading-relaxed">
                    <li className="list-disc">
                      Developed a fitness web app using Next.js, React, and
                      Tailwind CSS with exercise discovery and workout tracking
                      features.
                    </li>
                  </ul>
                </div>

                {/* Project 2: Hostel Management */}
                <div>
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <h3 className="font-bold text-gray-900">
                      Hostel Management System
                    </h3>
                    <a
                      href="https://github.com/dinamonalam/Hostel_Management"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-gray-700 hover:underline font-semibold inline-flex items-center gap-0.5 print:hidden"
                    >
                      GitHub <HiExternalLink className="text-xs" />
                    </a>
                  </div>
                  <ul className="mt-1 pl-4 text-gray-700 leading-relaxed">
                    <li className="list-disc">
                      Developed a hostel management system using HTML, CSS, PHP,
                      and MySQL for student records and room management.
                    </li>
                  </ul>
                </div>

                {/* Project 3: Edu Ecosystem */}
                <div>
                  <h3 className="font-bold text-gray-900">Edu Ecosystem</h3>
                  <ul className="mt-1 pl-4 text-gray-700 leading-relaxed">
                    <li className="list-disc">
                      Designed an academic software project to improve
                      communication and information sharing among teachers,
                      students, and parents.
                    </li>
                  </ul>
                </div>

                {/* Project 4: SafeStep */}
                <div>
                  <h3 className="font-bold text-gray-900">
                    SafeStep – Smart Assistive Stick
                  </h3>
                  <ul className="mt-1 pl-4 text-gray-700 leading-relaxed">
                    <li className="list-disc">
                      Proposed an Arduino-based smart stick with obstacle and water
                      detection features for visually impaired individuals.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="relative pl-7 border-l-2 border-gray-300 space-y-4">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-[#2c3440] text-white flex items-center justify-center text-xs shadow-sm">
                <FaGraduationCap className="text-[11px]" />
              </div>

              <h2 className="text-sm font-black text-[#2c3440] tracking-widest uppercase">
                EDUCATION
              </h2>

              <div className="space-y-4 text-xs sm:text-[13px]">
                {/* Degree 1 */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
                  <div>
                    <h3 className="font-bold text-gray-900">
                      B.Sc. in Computer Science &amp; Engineering (CSE)
                    </h3>
                    <p className="text-gray-700">
                      Port City International University
                    </p>
                  </div>
                  <span className="text-[11px] sm:text-xs text-gray-600 sm:text-right font-medium shrink-0">
                    2024–2027 (Expected)
                  </span>
                </div>

                {/* Degree 2 */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Higher Secondary Certificate (HSC) – Science
                    </h3>
                    <p className="text-gray-700">
                      Chattogram Bandar Mohila College
                    </p>
                    <p className="text-[11px] sm:text-xs font-semibold text-gray-800 mt-0.5">
                      GPA: 4.33 / 5.00
                    </p>
                  </div>
                  <span className="text-[11px] sm:text-xs text-gray-600 sm:text-right font-medium shrink-0">
                    2020–2021
                  </span>
                </div>

                {/* Degree 3 */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Secondary School Certificate (SSC) – Science
                    </h3>
                    <p className="text-gray-700">P.H. Ameen Academy</p>
                    <p className="text-[11px] sm:text-xs font-semibold text-gray-800 mt-0.5">
                      GPA: 5.00 / 5.00
                    </p>
                  </div>
                  <span className="text-[11px] sm:text-xs text-gray-600 sm:text-right font-medium shrink-0">
                    2018–2019
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Resume;
