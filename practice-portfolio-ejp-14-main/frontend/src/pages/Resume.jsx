import { Link } from "react-router-dom";
import { HiArrowLeft, HiPrinter, HiDownload, HiExternalLink } from "react-icons/hi";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#090d16] py-10 px-4 sm:px-6 lg:px-8 text-gray-900 font-sans print:bg-white print:py-0 print:px-0">
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

      {/* Main Resume Sheet - ATS Single-Column Clean Style */}
      <div
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-200/80 p-8 sm:p-14 print:shadow-none print:border-none print:rounded-none print:p-0 print:max-w-none print:w-full"
        style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}
      >
        {/* Header Block */}
        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight uppercase">
            DINAMON ALAM AYMIN
          </h1>
          <p className="text-base font-medium text-gray-800 mt-0.5 mb-2">
            Front-End Developer
          </p>

          <div className="text-xs sm:text-[13px] text-gray-800 space-y-0.5 leading-relaxed">
            <p>
              <span className="font-semibold text-gray-900">Phone:</span>{" "}
              <a href="tel:+8801533500557" className="hover:underline">
                +880 1533500557
              </a>
            </p>
            <p>
              <span className="font-semibold text-gray-900">Email:</span>{" "}
              <a
                href="mailto:dinamonalam@gmail.com"
                className="text-blue-600 underline hover:text-blue-800"
              >
                dinamonalam@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-gray-900">Address:</span>{" "}
              Halishahar, Chattogram, Bangladesh
            </p>
            <p>
              <span className="font-semibold text-gray-900">LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/dinamonalamaymin"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                linkedin.com/in/dinamonalamaymin
              </a>
            </p>
            <p>
              <span className="font-semibold text-gray-900">GitHub:</span>{" "}
              <a
                href="https://github.com/dinamonalam"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                github.com/dinamonalam
              </a>
            </p>
          </div>
        </header>

        {/* Section: Career Objective */}
        <section className="mb-5">
          <div className="border-b border-gray-900 pb-0.5 mb-2">
            <h2 className="text-sm font-bold tracking-wider uppercase text-gray-900">
              CAREER OBJECTIVE
            </h2>
          </div>
          <p className="text-xs sm:text-[13px] text-gray-800 leading-relaxed text-justify">
            Computer Science and Engineering student passionate about web
            development, with hands-on experience building projects using React,
            Next.js, Tailwind CSS, MongoDB and MySQL. Seeking a front-end
            developer role where I can sharpen my programming and
            problem-solving skills and contribute to real-world products.
          </p>
        </section>

        {/* Section: Skills */}
        <section className="mb-5">
          <div className="border-b border-gray-900 pb-0.5 mb-2">
            <h2 className="text-sm font-bold tracking-wider uppercase text-gray-900">
              SKILLS
            </h2>
          </div>
          <div className="text-xs sm:text-[13px] text-gray-800 space-y-1 leading-relaxed">
            <p>
              <span className="font-bold text-gray-900">Languages:</span>{" "}
              HTML5, CSS3, JavaScript, TypeScript
            </p>
            <p>
              <span className="font-bold text-gray-900">
                Frameworks &amp; Libraries:
              </span>{" "}
              React.js, Next.js, Node.js, Express.js, Tailwind CSS, Better Auth,
              JWT
            </p>
            <p>
              <span className="font-bold text-gray-900">Database:</span>{" "}
              MongoDB, MySQL
            </p>
            <p>
              <span className="font-bold text-gray-900">
                Interpersonal Skills:
              </span>{" "}
              Problem Solving, Teamwork, Time Management, Adaptability, Digital
              Marketing
            </p>
          </div>
        </section>

        {/* Section: Projects */}
        <section className="mb-5">
          <div className="border-b border-gray-900 pb-0.5 mb-2">
            <h2 className="text-sm font-bold tracking-wider uppercase text-gray-900">
              PROJECTS
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-[13px] text-gray-800">
            {/* Project 1: FixMate */}
            <div>
              <div className="font-bold text-gray-900">
                FixMate – Repair Platform{" "}
                <span className="font-normal text-gray-700">
                  | Next.js, React, Tailwind CSS, Node.js, Express.js, MongoDB,
                  Stripe
                </span>
              </div>
              <p className="text-gray-800 mt-0.5">
                A full-stack repair booking platform for phones, laptops and home
                appliances, with role-based access for customers, technicians
                and admins.
              </p>
              <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span>
                  <strong className="font-semibold text-gray-900">Live:</strong>{" "}
                  <a
                    href="https://fixmate-repair.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline hover:text-blue-800 inline-flex items-center gap-0.5"
                  >
                    fixmate-repair.vercel.app{" "}
                    <HiExternalLink className="text-[11px] print:hidden" />
                  </a>
                </span>
                <span className="text-gray-400">•</span>
                <span>
                  <strong className="font-semibold text-gray-900">
                    GitHub:
                  </strong>{" "}
                  <a
                    href="https://github.com/dinamonalam/fixmate_client"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline hover:text-blue-800 inline-flex items-center gap-0.5"
                  >
                    Client{" "}
                    <HiExternalLink className="text-[11px] print:hidden" />
                  </a>
                  {" | "}
                  <a
                    href="https://github.com/dinamonalam/fixmate_server"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline hover:text-blue-800 inline-flex items-center gap-0.5"
                  >
                    Server{" "}
                    <HiExternalLink className="text-[11px] print:hidden" />
                  </a>
                </span>
              </div>
              <ul className="list-disc pl-5 mt-1 space-y-0.5 text-gray-800 leading-relaxed">
                <li>
                  Role-based dashboards and JWT authentication for customers,
                  technicians and admins
                </li>
                <li>
                  Repair booking with a job tracking timeline from request to
                  payment
                </li>
                <li>
                  Server-side search, filter, sort and pagination on services
                </li>
                <li>
                  Stripe Checkout payments with webhook handling and printable
                  invoice
                </li>
              </ul>
            </div>

            {/* Project 2: Hostel Management System */}
            <div>
              <div className="font-bold text-gray-900">
                Hostel Management System{" "}
                <span className="font-normal text-gray-700">
                  | HTML, CSS, PHP, MySQL
                </span>
              </div>
              <p className="text-gray-800 mt-0.5">
                A web-based system to manage hostel student records and room
                allocation.
              </p>
              <p className="text-gray-700 mt-0.5">
                Admin-only private system, so no public live link.{" "}
                <a
                  href="https://github.com/dinamonalam/Hostel_Management"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline hover:text-blue-800 print:hidden text-xs"
                >
                  (GitHub Repo)
                </a>
              </p>
              <ul className="list-disc pl-5 mt-1 space-y-0.5 text-gray-800 leading-relaxed">
                <li>Student record management</li>
                <li>Room management and allocation</li>
                <li>MySQL database for storing and retrieving data</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Education */}
        <section className="mb-5">
          <div className="border-b border-gray-900 pb-0.5 mb-2">
            <h2 className="text-sm font-bold tracking-wider uppercase text-gray-900">
              EDUCATION
            </h2>
          </div>

          <div className="space-y-2.5 text-xs sm:text-[13px] text-gray-800">
            {/* Degree 1 */}
            <div>
              <div className="flex items-baseline justify-between">
                <span className="font-bold text-gray-900">
                  B.Sc. in Computer Science &amp; Engineering (CSE)
                </span>
                <span className="text-gray-800 font-normal shrink-0">
                  2024 – 2027 (Expected)
                </span>
              </div>
              <p className="text-gray-700">
                Port City International University, Chattogram
              </p>
            </div>

            {/* Degree 2 */}
            <div>
              <div className="flex items-baseline justify-between">
                <span className="font-bold text-gray-900">
                  Higher Secondary Certificate (HSC) – Science
                </span>
                <span className="text-gray-800 font-normal shrink-0">
                  2020 – 2021
                </span>
              </div>
              <p className="text-gray-700">
                Chattogram Bandar Mohila College | GPA: 4.33 / 5.00
              </p>
            </div>
          </div>
        </section>

        {/* Section: Languages */}
        <section>
          <div className="border-b border-gray-900 pb-0.5 mb-2">
            <h2 className="text-sm font-bold tracking-wider uppercase text-gray-900">
              LANGUAGES
            </h2>
          </div>
          <div className="text-xs sm:text-[13px] text-gray-800 space-y-0.5 leading-relaxed">
            <p>English – Conversational</p>
            <p>Bangla – Native</p>
            <p>Hindi – Basic</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
