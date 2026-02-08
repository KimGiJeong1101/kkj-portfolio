import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ToyProject from "./ToyProject";
import TeamProject from "./TeamProject";

const ProjectFrame = () => {
  const [activeTab, setActiveTab] = useState<"toy" | "team">("toy");

  const TABS = [
    { ID: "toy", LABEL: "TOY PROJECTS", COUNT: 3 },
    { ID: "team", LABEL: "TEAM PROJECTS", COUNT: 2 },
  ];

  return (
    <section id="project" className="py-24 border-t border-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">
            PROJECTS
          </h2>

          {/* 세련된 탭 스위치 */}
          <div className="relative flex bg-slate-100 p-1 rounded-2xl border border-slate-200">
            {TABS.map((tab) => (
              <button
                key={tab.ID}
                onClick={() => setActiveTab(tab.ID as "toy" | "team")}
                className={`relative px-8 py-3 text-sm font-bold transition-colors duration-300 z-10 flex items-center gap-2 ${
                  activeTab === tab.ID
                    ? "text-indigo-600"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab.LABEL}
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeTab === tab.ID
                      ? "bg-indigo-100 text-indigo-600"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {tab.COUNT}
                </span>

                {/* 활성화된 탭 뒤의 흰색 배경 슬라이딩 효과 */}
                {activeTab === tab.ID && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-xl shadow-sm z-[-1]"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 프로젝트 리스트 전환 애니메이션 */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === "toy" ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeTab === "toy" ? 20 : -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {activeTab === "toy" ? <ToyProject /> : <TeamProject />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectFrame;
