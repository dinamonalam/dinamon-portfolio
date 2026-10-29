import { Link } from "react-router-dom";
import {
  HiArrowLeft,
  HiPrinter,
  HiDownload,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiAcademicCap,
  HiCode,
  HiFolder,
  HiSparkles,
  HiTranslate,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePhoto from "../assets/profile.jpg";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#090d16] py-10 px-4 sm:px-6 lg:px-8 text-gray-800 font-sans print:bg-white print:py-0 print:px-0">
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
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200/80 p-8 sm:p-12 print:shadow-none print:border-none print:p-0 print:rounded-none">
        
        {/* Header Section with Profile Picture */}
        <header className="border-b-2 border-gray-200 pb-6 mb-6">
          <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-6">
            
            {/* Left Info: Name, Title & Contacts */}
            <div className="text-center sm:text-left flex-1">
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight uppercase">
                DINAMON ALAM AYMIN
              </h1>
              <p className="text-base sm:text-lg font-bold text-blue-600 mt-1 tracking-wide uppercase">
                CSE STUDENT | ASPIRING SOFTWARE DEVELOPER
              </p>

              {/* Contact Bar */}
              <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-600">
                <span className="flex items-center gap-1.5">
                  <HiLocationMarker className="text-blue-600 text-base shrink-0" />
                  <span>Chattogram, Bangladesh</span>
                </span>
                <span className="text-gray-300 hidden sm:inline">•</span>
                <a
                  href="tel:01533500557"
                  className="flex items-center gap-1.5 hover:text-blue-600 transition"
                >
                  <HiPhone className="text-blue-600 text-base shrink-0" />
                  <span>01533500557</span>
                </a>
                <span className="text-gray-300 hidden sm:inline">•</span>
                <a
                  href="mailto:dinamonalam@gmail.com"
                  className="flex items-center gap-1.5 hover:text-blue-600 transition"
                >
                  <HiMail className="text-blue-600 text-base shrink-0" />
                  <span>dinamonalam@gmail.com</span>
                </a>
              </div>

              {/* Profile Links */}
              <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs sm:text-sm font-medium">
                <a
                  href="https://www.linkedin.com/in/dinamonalamaymin/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 transition"
                >
                  <FaLinkedin className="text-base shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
                <span className="text-gray-300">•</span>
                <a
                  href="https://github.com/dinamonalam"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-800 hover:text-blue-600 transition"
                >
                  <FaGithub className="text-base shrink-0" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            {/* Right: Profile Picture */}
            <div className="shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-md ring-4 ring-blue-50">
                <img
                  src={profilePhoto}
                  alt="Dinamon Alam Aymin"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

          </div>
        </header>

        {/* Section: Professional Summary */}
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-xs"></span>
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed text-justify">
            Computer Science and Engineering student interested in web development, software development, and database-driven applications. Building practical knowledge through coursework and academic projects, including a Hostel Management System, an Edu Ecosystem concept, and an Arduino-based assistive stick. Eager to continue developing programming, problem-solving, and collaboration skills while contributing to meaningful projects.
          </p>
        </section>

        {/* Section: Education */}
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <HiAcademicCap className="text-blue-600 text-lg" />
            EDUCATION
          </h2>

          <div className="space-y-3.5">
            {/* Degree 1 */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between text-sm gap-1">
              <div>
                <h3 className="font-bold text-gray-900">
                  B.Sc. in Computer Science &amp; Engineering (CSE)
                </h3>
                <p className="text-gray-700 font-medium">
                  Port City International University
                </p>
              </div>
              <div className="text-xs sm:text-sm text-gray-600 sm:text-right font-medium">
                2024–2027 (Expected) | Chattogram, Bangladesh
              </div>
            </div>

            {/* Degree 2 */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between text-sm gap-1">
              <div>
                <h3 className="font-bold text-gray-900">
                  Higher Secondary Certificate (HSC) – Science
                </h3>
                <p className="text-gray-700 font-medium">
                  Chattogram Bandar Mohila College
                </p>
                <p className="text-xs font-semibold text-blue-700 mt-0.5">
                  GPA: 5.00 / 5.00 (A+)
                </p>
              </div>
              <div className="text-xs sm:text-sm text-gray-600 sm:text-right font-medium">
                2020–2021 | Chattogram, Bangladesh
              </div>
            </div>

            {/* Degree 3 */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between text-sm gap-1">
              <div>
                <h3 className="font-bold text-gray-900">
                  Secondary School Certificate (SSC) – Science
                </h3>
                <p className="text-gray-700 font-medium">
                  P.H. Ameen Academy
                </p>
                <p className="text-xs font-semibold text-blue-700 mt-0.5">
                  GPA: 5.00 / 5.00 (A+)
                </p>
              </div>
              <div className="text-xs sm:text-sm text-gray-600 sm:text-right font-medium">
                2018–2019 | Chattogram, Bangladesh
              </div>
            </div>
          </div>
        </section>

        {/* Section: Technical Skills */}
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <HiCode className="text-blue-600 text-lg" />
            TECHNICAL SKILLS
          </h2>

          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong className="text-gray-900 font-semibold">Programming:</strong>{" "}
              C, Java; JavaScript (learning)
            </p>
            <p>
              <strong className="text-gray-900 font-semibold">Web Development:</strong>{" "}
              HTML, CSS; PHP (learning)
            </p>
            <p>
              <strong className="text-gray-900 font-semibold">Databases:</strong>{" "}
              MySQL; MongoDB concepts (learning)
            </p>
            <p>
              <strong className="text-gray-900 font-semibold">Tools:</strong>{" "}
              Git, GitHub, Visual Studio Code, XAMPP
            </p>
            <p>
              <strong className="text-gray-900 font-semibold">Additional Learning:</strong>{" "}
              React, Next.js, TypeScript; Arduino basics
            </p>
          </div>
        </section>

        {/* Section: Projects */}
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <HiFolder className="text-blue-600 text-lg" />
            PROJECTS
          </h2>

          <div className="space-y-3.5">
            {/* Project 1: FitLog */}
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-gray-900">
                  FitLog — Workout Library &amp; Tracker
                </h3>
                <div className="flex items-center gap-2 text-xs print:hidden">
                  <a
                    href="https://fitlog-sigma-eight.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Live Demo &rarr;
                  </a>
                  <span className="text-gray-300">•</span>
                  <a
                    href="https://github.com/dinamonalam/fitlog"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 hover:underline font-medium"
                  >
                    GitHub &rarr;
                  </a>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-0.5">
                • Built a precision fitness web application with Next.js, React, and Tailwind CSS. Features muscle-targeted exercise discovery, customizable routine planning, live set/rep logging, and responsive dark-mode UI.
              </p>
            </div>

            {/* Project 2: Hostel Management System */}
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-gray-900">
                  Hostel Management System
                </h3>
                <a
                  href="https://github.com/dinamonalam/Hostel_Management"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-blue-600 hover:underline font-medium inline-flex items-center gap-1 print:hidden"
                >
                  GitHub Repository &rarr;
                </a>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-0.5">
                • A full-stack web application designed for hostel administration, room allocation, and student records management using HTML, CSS, PHP, and MySQL.
              </p>
            </div>

            {/* Project 3 */}
            <div>
              <h3 className="text-sm font-bold text-gray-900">
                Edu Ecosystem
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-0.5">
                • An academic software project focused on improving information access and communication among teachers, students, and parents.
              </p>
            </div>

            {/* Project 4 */}
            <div>
              <h3 className="text-sm font-bold text-gray-900">
                SafeStep — Smart Assistive Stick
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-0.5">
                • An Arduino-based assistive-stick project concept with ultrasonic obstacle detection and water sensors for visually impaired individuals.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Core Strengths */}
        <section className="mb-6">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
            <HiSparkles className="text-blue-600 text-lg" />
            CORE STRENGTHS
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Willingness to learn • Logical thinking • Problem-solving • Team collaboration • Technical documentation and presentations
          </p>
        </section>

        {/* Section: Languages */}
        <section>
          <h2 className="text-base sm:text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
            <HiTranslate className="text-blue-600 text-lg" />
            LANGUAGES
          </h2>
          <p className="text-sm text-gray-700">
            <strong className="text-gray-900 font-semibold">Bangla:</strong> Native |{" "}
            <strong className="text-gray-900 font-semibold">English:</strong> Basic; actively improving
          </p>
        </section>

      </div>
    </div>
  );
};

export default Resume;
