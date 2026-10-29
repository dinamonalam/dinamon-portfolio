import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import { HiArrowLeft, HiExternalLink, HiCode, HiLightBulb, HiShieldCheck } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6 bg-[#090d16] text-slate-100">
        <div className="text-center max-w-md bg-slate-900/80 p-8 rounded-2xl shadow-xl border border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-2">Project Not Found</h2>
          <p className="text-slate-400 text-sm mb-6">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-5 py-2.5 rounded-xl font-semibold transition"
          >
            <HiArrowLeft /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-20 bg-[#090d16] text-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-cyan-400 transition"
          >
            <HiArrowLeft /> Back to All Projects
          </Link>
        </div>

        {/* Project Card */}
        <div className="bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-800/90 shadow-2xl overflow-hidden p-6 sm:p-10 space-y-8">
          
          {/* Main Screenshot */}
          <div className="rounded-xl overflow-hidden border border-slate-800 shadow-xl aspect-video bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Title & Category */}
          <div className="space-y-3">
            {project.category && (
              <span className="inline-block bg-blue-950/80 text-cyan-300 border border-blue-800/60 text-xs font-semibold px-3 py-1 rounded-full">
                {project.category}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <HiCode className="text-cyan-400 text-base" /> Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-950/60 text-cyan-300 border border-blue-800/50 px-3 py-1 rounded-lg text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white">Project Overview</h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-3 p-5 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HiShieldCheck className="text-emerald-400 text-lg" />
                Technical Challenges &amp; Solutions
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-300">
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Future Enhancements */}
          {project.future && project.future.length > 0 && (
            <div className="space-y-3 p-5 rounded-xl bg-blue-950/30 border border-blue-900/40">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HiLightBulb className="text-amber-400 text-lg" />
                Future Roadmap &amp; Enhancements
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-300">
                {project.future.map((enhancement) => (
                  <li key={enhancement}>{enhancement}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/20 transition"
              >
                <span>Live Demo</span>
                <HiExternalLink className="text-base" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 bg-amber-950/50 border border-amber-800/60 px-3.5 py-2.5 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>Academic Project • No Live Deployment (Source Only)</span>
              </span>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-slate-800/90 hover:bg-slate-750 text-white border border-slate-700/70 px-6 py-3 rounded-xl font-semibold shadow-sm transition"
              >
                <FaGithub className="text-lg" />
                <span>View Source Code on GitHub</span>
              </a>
            )}

            <Link
              to="/resume"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:underline ml-auto"
            >
              View Developer Resume &rarr;
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
