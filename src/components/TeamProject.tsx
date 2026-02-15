import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";
import { TEAM_PROJECTS } from "../constants/projects";

const TeamProject = () => {
  return (
    <div className="space-y-32">
      {TEAM_PROJECTS.map((project, index) => (
        <motion.div
          key={project.TITLE}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="border-b border-slate-200 pb-24"
        >
          <div className="flex flex-col lg:flex-row gap-16">
            {/* 이미지 */}
            <div className="lg:w-2/5 aspect-video bg-slate-100 rounded-2xl overflow-hidden">
              {project.imgSrc && (
                <img
                  src={project.imgSrc}
                  alt={project.TITLE}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* 내용 */}
            <div className="lg:w-3/5 space-y-6">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <p className="text-xs text-slate-400 mb-2">
                    {project.DATE} · 팀원 {project.TEAMSIZE}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
                    {project.TITLE}
                  </h3>
                  <p className="text-sm text-slate-500 mt-2">
                    {project.SUBTITLE}
                  </p>
                </div>

                <div className="flex gap-4 text-slate-500">
                  {project.GIT_URL && (
                    <a
                      href={project.GIT_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-slate-800 transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.PAGE_URL && (
                    <a
                      href={project.PAGE_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-slate-800 transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                  {project.VIDEO_URL && (
                    <a
                      href={project.VIDEO_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-slate-800 transition-colors"
                    >
                      <FaYoutube size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {project.DESCRIPTION}
              </p>

              <ul className="space-y-2">
                {project.DETAILS.map((detail, i) => (
                  <li key={i} className="text-sm text-slate-500 flex gap-2">
                    <span className="mt-1 text-slate-400">—</span>
                    {detail}
                  </li>
                ))}
              </ul>

              {/* 기술 스택 */}
              <div className="flex flex-wrap gap-2 pt-6">
                {project.TECH.map((tech) => (
                  <span
                    key={tech}
                    className="
                      text-xs
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
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TeamProject;
