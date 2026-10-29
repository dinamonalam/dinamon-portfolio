import { Link } from "react-router-dom";
import projects from "../data/projects";
import { HiExternalLink, HiArrowRight, HiOutlineSparkles } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#090d16] text-slate-100"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineSparkles className="text-cyan-400 text-sm" />
          <span>My Portfolio Projects</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">Projects</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-400">
          Explore real-world web applications I built to solve practical problems, demonstrating clean code, modern UI/UX design, and responsive frontend architectures.
        </p>
      </div>

      {/* Projects Grid */}
      <div
        className={`grid gap-8 ${
          projects.length === 1
            ? "max-w-xl mx-auto grid-cols-1"
            : projects.length === 2
            ? "max-w-5xl mx-auto grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-800/90 shadow-xl hover:shadow-2xl hover:border-cyan-500/40 hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col overflow-hidden"
          >
            {/* Card Thumbnail / Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {project.category && (
                <span className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-xs text-cyan-300 border border-slate-700/70 text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs">
                  {project.category}
                </span>
              )}
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-2.5">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-semibold rounded-md bg-blue-950/60 text-cyan-300 border border-blue-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-slate-800 text-slate-300">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
                >
                  <span>Details &amp; Tech</span>
                  <HiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View Source Code on GitHub"
                      className={
                        project.live
                          ? "p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
                          : "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800/90 text-white hover:bg-slate-750 border border-slate-700/70 transition shadow-xs"
                      }
                    >
                      <FaGithub className={project.live ? "text-lg" : "text-sm"} />
                      {!project.live && <span>GitHub</span>}
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open Live Demo"
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md shadow-blue-500/20 transition"
                    >
                      <span>Demo</span>
                      <HiExternalLink className="text-sm" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Github Note */}
      <div className="mt-12 text-center">
        <p className="text-sm text-slate-400">
          Want to see more code and experiments? Check out my{" "}
          <a
            href="https://github.com/dinamonalam"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1"
          >
            GitHub profile <HiExternalLink />
          </a>
        </p>
      </div>
    </section>
  );
};

export default Projects;
