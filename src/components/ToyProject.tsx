import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaYoutube,
  FaPlayCircle,
} from "react-icons/fa";
import { TOY_PROJECTS } from "../constants/projects";

const ToyProject = () => {
  return (
    <div className="grid gap-12 md:grid-cols-2">
      {TOY_PROJECTS.map((project, index) => (
        <motion.div
          key={project.TITLE}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="
            border border-slate-200
            rounded-2xl
            p-8
            bg-white
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-lg
            hover:shadow-slate-200/60
          "
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="font-semibold text-lg text-slate-900">
                {project.TITLE}
              </h4>
              <p className="text-xs text-slate-400 mt-1">{project.DATE}</p>
              <p className="text-xs text-slate-500 mt-2">{project.SUBTITLE}</p>
            </div>

            <div className="flex gap-3 text-slate-400">
              {project.GIT_URL && (
                <a
                  href={project.GIT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-700 transition-colors"
                >
                  <FaGithub size={18} />
                </a>
              )}
              {project.PAGE_URL && (
                <a
                  href={project.PAGE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-700 transition-colors"
                >
                  <FaExternalLinkAlt size={16} />
                </a>
              )}
              {project.VIDEO_URL && (
                <a
                  href={project.VIDEO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-700 transition-colors"
                >
                  {project.VIDEO_URL.includes("youtube") ? (
                    <FaYoutube size={18} />
                  ) : (
                    <FaPlayCircle size={18} />
                  )}
                </a>
              )}
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {project.DESCRIPTION}
          </p>

          {project.DETAILS && (
            <ul className="space-y-2 mb-6">
              {project.DETAILS.map((detail, idx) => (
                <li key={idx} className="text-xs text-slate-500">
                  — {detail}
                </li>
              ))}
            </ul>
          )}

          {/* 기술 스택 */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.TECH.map((tech) => (
              <span
                key={tech}
                className="
                  text-[11px]
                  px-3 py-1
                  rounded-full
                  bg-slate-100
                  border border-slate-200
                  text-slate-600
                  transition-all duration-200
                  hover:bg-slate-200
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ToyProject;
