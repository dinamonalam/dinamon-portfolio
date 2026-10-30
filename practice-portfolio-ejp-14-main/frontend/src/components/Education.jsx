import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";

const educationHistory = [
  {
    degree: "B.Sc. in Computer Science & Engineering (CSE)",
    institution: "Port City International University",
    location: "Chattogram, Bangladesh",
    period: "2024 – 2027 (Expected)",
    description:
      "Gained comprehensive theoretical and practical knowledge in computational thinking, software engineering, and web technologies.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/C++)",
      "Database Management Systems (DBMS)",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC) – Science",
    institution: "Chattogram Bandar Mohila College",
    location: "Chattogram, Bangladesh",
    period: "2020 – 2021",
    grade: "GPA: 4.33 / 5.00",
    description:
      "Completed higher secondary education with a major in Science, developing strong analytical thinking and mathematical problem-solving skills.",
    coursework: ["Physics", "Chemistry", "Higher Mathematics", "Information & Communication Tech (ICT)"],
  },
  {
    degree: "Secondary School Certificate (SSC) – Science",
    institution: "P.H. Ameen Academy",
    location: "Chattogram, Bangladesh",
    period: "2018 – 2019",
    grade: "GPA: 5.00 / 5.00",
    description:
      "Graduated secondary school with distinction in Science, establishing foundational curiosity for science and computing.",
    coursework: ["Physics", "Chemistry", "Higher Mathematics", "Information & Communication Tech (ICT)"],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#070b14] border-t border-slate-800/80 text-slate-100">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineAcademicCap className="text-cyan-400 text-sm" />
          <span>Academic Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">Education</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-400">
          My educational journey that built my foundational computer science and engineering mindset.
        </p>
      </div>

      {/* Degrees Timeline */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
          <FaGraduationCap className="text-cyan-400" />
          <span>Academic Qualifications</span>
        </h3>

        <div className="space-y-6">
          {educationHistory.map((edu) => (
            <div
              key={edu.degree}
              className="bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-800/90 p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative left accent border */}
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-cyan-400"></div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mt-1">
                    <span className="flex items-center gap-1">
                      <HiOutlineCalendar className="text-slate-500" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <HiOutlineLocationMarker className="text-slate-500" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {edu.grade && (
                  <span className="inline-block bg-blue-950/80 text-cyan-300 border border-blue-800/80 text-xs font-bold px-3 py-1 rounded-full shrink-0">
                    {edu.grade}
                  </span>
                )}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {edu.description}
              </p>

              {/* Coursework list */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
                  <HiOutlineBookOpen className="text-cyan-400 text-sm" />
                  Key Courses Studied
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
