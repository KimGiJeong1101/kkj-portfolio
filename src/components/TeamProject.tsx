import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";
import { TEAM_PROJECTS } from "../constants/projects";

const TeamProject = () => {
  return (
    <div className="space-y-16">
      {TEAM_PROJECTS.map((project, index) => (
        <motion.div
          key={project.TITLE}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          // ✨ index를 활용해 위에서부터 하나씩 나타나게 설정
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all p-6 md:p-10"
        >
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-2/5 aspect-video bg-[#f8fafc] rounded-2xl overflow-hidden border border-slate-100 relative group flex items-center justify-center">
              {project.imgSrc ? (
                <img src={project.imgSrc} alt={project.TITLE} className="..." />
              ) : (
                <div className="w-full h-full relative flex items-center justify-center bg-white">
                  {/* 움직이는 듯한 배경 블러 노이즈 */}
                  <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-indigo-100 rounded-full blur-[80px] opacity-60" />
                  <div className="absolute bottom-[-20%] right-[-10%] w-64 h-64 bg-rose-100 rounded-full blur-[80px] opacity-60" />

                  <div className="relative z-10 text-center space-y-2">
                    <span className="text-[10px] font-black text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-tighter">
                      Project 0{index + 1}
                    </span>
                    <h4 className="text-2xl font-black text-slate-800 tracking-tight">
                      {project.TITLE}
                    </h4>
                    <div className="w-8 h-[2px] bg-slate-200 mx-auto" />
                  </div>

                  {/* 격자 무늬 배경 데코 */}
                  <div
                    className="absolute inset-0 opacity-[0.1] [mask-image:linear-gradient(to_bottom,white,transparent)]"
                    style={{
                      backgroundImage:
                        "linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>
              )}
            </div>

            {/* 프로젝트 상세 설명 */}
            <div className="lg:w-3/5 space-y-6">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-indigo-500 tracking-widest uppercase px-2 py-1 bg-indigo-50 rounded">
                      {project.DATE}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      팀원 {project.TEAMSIZE}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900">
                    {project.TITLE}
                  </h3>
                  <p className="text-sm font-bold text-slate-500 mt-1">
                    {project.SUBTITLE}
                  </p>
                </div>

                {/* 링크 아이콘 */}
                <div className="flex gap-2">
                  {project.GIT_URL && (
                    <a
                      href={project.GIT_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-slate-50 rounded-full hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 transition-all shadow-sm"
                      title="GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.PAGE_URL && (
                    <a
                      href={project.PAGE_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-slate-50 rounded-full hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 transition-all shadow-sm"
                      title="Live Page"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                  {project.VIDEO_URL && (
                    <a
                      href={project.VIDEO_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-slate-50 rounded-full hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 transition-all shadow-sm"
                      title="Demo Video"
                    >
                      <FaYoutube size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                {project.DESCRIPTION}
              </p>

              {/* 핵심 구현 사항 리스트 */}
              <div className="space-y-3">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Key Features
                </p>
                <ul className="grid grid-cols-1 gap-2.5">
                  {project.DETAILS.map((detail, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-500 flex items-start gap-2"
                    >
                      <span className="text-indigo-500 mt-1">✔</span>
                      <span className="leading-snug">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 기술 스택 배지 */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.TECH.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-full uppercase border border-slate-100 group-hover:border-indigo-100 transition-colors"
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
