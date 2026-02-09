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
    <div className="grid gap-8 md:grid-cols-2">
      {TOY_PROJECTS.map((project, index) => (
        <motion.div
          key={project.TITLE}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col justify-between"
        >
          <div>
            {/* 상단: 제목 및 링크 섹션 */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-black text-xl text-slate-800 tracking-tight">
                    {project.TITLE}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {project.DATE}
                  </span>
                </div>
                <p className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">
                  {project.SUBTITLE}
                </p>
              </div>

              <div className="flex gap-3 pt-1">
                {project.GIT_URL && (
                  <a
                    href={project.GIT_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                {project.PAGE_URL && (
                  <a
                    href={project.PAGE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
                {project.VIDEO_URL && (
                  <a
                    href={project.VIDEO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-red-500 transition-colors"
                  >
                    {project.VIDEO_URL.includes("youtube") ? (
                      <FaYoutube size={20} />
                    ) : (
                      <FaPlayCircle size={20} />
                    )}
                  </a>
                )}
              </div>
            </div>

            {/* 중단: 설명 및 상세 리스트 */}
            <p className="text-slate-600 mb-6 text-sm leading-relaxed font-medium">
              {project.DESCRIPTION}
            </p>

            {/* DETAILS 데이터 출력 부분 */}
            {project.DETAILS && project.DETAILS.length > 0 && (
              <ul className="mb-8 space-y-2">
                {project.DETAILS.map((detail, idx) => (
                  <li
                    key={idx}
                    className="text-[12px] text-slate-500 flex items-start gap-2"
                  >
                    <span className="text-blue-400 mt-1 flex-shrink-0">·</span>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* 하단: 기술 스택 배지 */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {" "}
            {/* mt-auto로 하단 밀착 */}
            {project.TECH.map((tech, techIndex) => (
              <motion.span
                key={tech}
                // 배지마다 약간의 시간차를 두고 나타나게 하면 훨씬 고급스러워요
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                // 모바일 터치 대응 및 호버 효과
                whileHover={{ scale: 1.05, backgroundColor: "#eff6ff" }} // blue-50
                whileTap={{ scale: 0.95 }}
                className="px-2.5 py-1 bg-slate-50 text-slate-500 text-[10px] rounded-lg font-bold uppercase tracking-wider border border-slate-100 
                 md:group-hover:text-blue-600 md:group-hover:border-blue-200 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ToyProject;
