// src/components/ToyProject.tsx
interface TOY_DATA_TYPE {
  TITLE: string;
  TECH: string[];
  DESC: string;
  LINK: string;
}

const TOY_DATA: TOY_DATA_TYPE[] = [
  {
    TITLE: "Personal Blog",
    TECH: ["React", "Vite", "Tailwind"],
    DESC: "마크다운 기반의 정적 블로그를 제작하여 학습 내용을 기록하고 있습니다.",
    LINK: "https://github.com/your-repo/blog",
  },
  {
    TITLE: "Weather Dashboard",
    TECH: ["TypeScript", "OpenWeatherAPI"],
    DESC: "사용자의 위치 정보를 활용해 실시간 날씨 정보를 제공하는 대시보드입니다.",
    LINK: "https://github.com/your-repo/weather",
  },
];

const ToyProject = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {TOY_DATA.map((project, index) => (
        <div 
          key={index} 
          className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
        >
          <div className="flex justify-between items-start mb-4">
            <h4 className="font-bold text-xl text-slate-800">{project.TITLE}</h4>
            <a 
              href={project.LINK} 
              target="_blank" 
              className="text-slate-400 hover:text-indigo-600 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <p className="text-slate-600 mb-6 text-sm leading-relaxed">{project.DESC}</p>
          <div className="flex flex-wrap gap-2">
            {project.TECH.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-slate-50 text-slate-500 text-xs rounded-md border border-slate-100 uppercase font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToyProject;