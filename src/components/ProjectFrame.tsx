import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ToyProject from "./ToyProject";
import TeamProject from "./TeamProject";
import { TEAM_PROJECTS, TOY_PROJECTS } from "../constants/projects";

const ProjectFrame = () => {
  const [activeTab, setActiveTab] = useState<"toy" | "team">("toy");

  const TABS = [
    { ID: "toy", LABEL: "Toy Projects", COUNT: TOY_PROJECTS.length },
    { ID: "team", LABEL: "Team Projects", COUNT: TEAM_PROJECTS.length },
  ];

  return (
    <section id="project" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-slate-900 mb-6">
            Projects
          </h2>
          <div className="w-12 h-[2px] bg-slate-900 mb-12" />

          <div className="flex gap-10 text-sm">
            {TABS.map((tab) => (
              <button
                key={tab.ID}
                onClick={() => setActiveTab(tab.ID as "toy" | "team")}
                className={`relative pb-2 transition-colors cursor-pointer ${
                  activeTab === tab.ID
                    ? "text-slate-900"
                    : "text-slate-400 hover:text-slate-700"
                }`}
              >
                {tab.LABEL}
                <span className="ml-2 text-xs text-slate-400">
                  ({tab.COUNT})
                </span>

                {activeTab === tab.ID && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-slate-900"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "toy" ? <ToyProject /> : <TeamProject />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectFrame;
