// src/components/ProjectFrame.tsx
import { useState } from "react";
import ToyProject from "./ToyProject";
import TeamProject from "./TeamProject";

const ProjectFrame = () => {
  const [activeTab, setActiveTab] = useState<"toy" | "team">("toy");

  return (
    <section id="project" className="py-20 border-t border-slate-100">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl font-bold mb-8 tracking-tight">Projects</h2>
        
        {/* 탭 스위치 디자인 */}
        <div className="inline-flex bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          <button
            onClick={() => setActiveTab("toy")}
            className={`px-8 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === "toy" 
                ? "bg-white text-indigo-600 shadow-sm" 
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            TOY PROJECTS
          </button>
          <button
            onClick={() => setActiveTab("team")}
            className={`px-8 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === "team" 
                ? "bg-white text-indigo-600 shadow-sm" 
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            TEAM PROJECTS
          </button>
        </div>
      </div>

      <div className="transition-all duration-300 ease-in-out">
        {activeTab === "toy" ? <ToyProject /> : <TeamProject />}
      </div>
    </section>
  );
};

export default ProjectFrame;