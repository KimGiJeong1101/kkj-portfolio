import { motion } from "framer-motion";
import { CAREER_DATA } from "../constants/career";

const Career = () => {
  return (
    <section id="career" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* 섹션 헤더 */}
        <div className="mb-16 text-left">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
            EXPERIENCE
          </h2>
          <div className="w-12 h-1.5 bg-blue-500 rounded-full" />
        </div>

        {/* 타임라인 컨테이너 */}
        <div className="relative border-l-2 border-slate-100 ml-4 md:ml-32 space-y-12">
          {CAREER_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* 타임라인 포인트 */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10" />

              {/* 기간 표시 */}
              <div className="md:absolute md:-left-44 md:top-1 md:w-32 text-left md:text-right mb-2 md:mb-0">
                <span className="text-[11px] font-black text-slate-400 tracking-tighter uppercase">
                  {item.PERIOD}
                </span>
              </div>

              {/* 카드 본문 */}
              <div className="group relative bg-slate-50/50 hover:bg-white p-6 md:p-8 rounded-3xl border border-transparent hover:border-slate-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-slate-800 group-hover:text-blue-600 transition-colors">
                      {item.COMPANY}
                    </h3>
                    {/* 구분 태그 */}
                    <span
                      className={`text-[9px] font-bold px-2 py-0.5 rounded ${
                        item.TYPE === "WORK"
                          ? "bg-emerald-50 text-emerald-600"
                          : item.TYPE === "STUDY"
                            ? "bg-amber-50 text-amber-600"
                            : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {item.TYPE}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-slate-500 mb-4">
                    {item.ROLE}
                  </p>
                </div>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 break-keep">
                  {item.DESCRIPTION}
                </p>

                {/* 성과 리스트 */}
                <ul className="grid grid-cols-1 gap-3">
                  {item.ACHIEVEMENTS.map((achieve, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-500 flex items-start gap-2.5"
                    >
                      <span className="text-blue-500 font-bold mt-0.5">·</span>
                      <span className="leading-snug">{achieve}</span>
                    </li>
                  ))}
                </ul>

                {/* 기술 배지 */}
                {item.TECH && (
                  <div className="flex flex-wrap gap-2 mt-8">
                    {item.TECH.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white text-slate-400 text-[10px] font-bold rounded-lg border border-slate-200 uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
