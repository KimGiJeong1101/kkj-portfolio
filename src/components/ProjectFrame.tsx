import { useState } from "react";

const ToyProject = () => (
  <div className="grid gap-6 animate-fadeIn">
    <div className="p-6 bg-slate-800 text-white rounded-xl">Toy Project 1 - 개인 블로그</div>
    <div className="p-6 bg-slate-800 text-white rounded-xl">Toy Project 2 - 할일 앱</div>
  </div>
);

const TeamProject = () => (
  <div className="grid gap-6 animate-fadeIn">
    <div className="p-6 bg-blue-600 text-white rounded-xl">Team Project 1 - 커머스 플랫폼</div>
    <div className="p-6 bg-blue-600 text-white rounded-xl">Team Project 2 - 협업 툴</div>
  </div>
);

const ProjectFrame = () => {
  const [tab, setTab] = useState<"toy" | "team">("toy");

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="flex justify-center gap-4 mb-10">
        <button 
          onClick={() => setTab("toy")}
          className={`px-6 py-2 rounded-full font-medium transition-all ${tab === "toy" ? "bg-slate-900 text-white" : "bg-slate-200 text-slate-600"}`}
        >
          Toy Project
        </button>
        <button 
          onClick={() => setTab("team")}
          className={`px-6 py-2 rounded-full font-medium transition-all ${tab === "team" ? "bg-slate-900 text-white" : "bg-slate-200 text-slate-600"}`}
        >
          Team Project
        </button>
      </div>

      <div className="min-h-[300px]">
        {tab === "toy" ? <ToyProject /> : <TeamProject />}
      </div>
    </section>
  );
};

export default ProjectFrame;