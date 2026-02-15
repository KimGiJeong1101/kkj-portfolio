import { motion } from "framer-motion";
import { CAREER_DATA } from "../constants/career";

const Career = () => {
  return (
    <section id="career" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
            Experience
          </h2>
          <div className="mt-6 w-20 h-[2px] bg-slate-300" />
        </div>

        <div className="relative border-l border-slate-200 ml-4 md:ml-44 space-y-20">
          {CAREER_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative pl-8 md:pl-14"
            >
              <div className="absolute -left-[5px] top-4 w-2.5 h-2.5 bg-slate-700 rounded-full" />

              <div className="md:absolute md:-left-52 md:top-3 md:w-40 text-left md:text-right mb-2 md:mb-0">
                <span className="text-xs text-slate-400 tracking-wider uppercase">
                  {item.PERIOD}
                </span>
              </div>

              <div className="group bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/60">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.COMPANY}
                  </h3>

                  <span className="text-[11px] px-3 py-1 rounded-full bg-slate-100 text-slate-500 font-medium">
                    {item.TYPE}
                  </span>
                </div>

                <p className="text-sm text-slate-500 mb-6">{item.ROLE}</p>

                <p className="text-slate-600 leading-relaxed mb-6 break-keep">
                  {item.DESCRIPTION}
                </p>

                <ul className="space-y-3">
                  {item.ACHIEVEMENTS.map((achieve, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <span className="mt-2 w-1.5 h-1.5 bg-slate-400 rounded-full" />
                      <span>{achieve}</span>
                    </li>
                  ))}
                </ul>

                {item.TECH && (
                  <div className="flex flex-wrap gap-2 mt-8">
                    {item.TECH.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500"
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
