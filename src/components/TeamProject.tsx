// src/components/TeamProject.tsx
interface TEAM_DATA_TYPE {
  TITLE: string;
  ROLE: string;
  TECH: string[];
  DESC: string;
}

const TEAM_DATA: TEAM_DATA_TYPE[] = [
  {
    TITLE: "E-Commerce Platform",
    ROLE: "Frontend Lead",
    TECH: ["React", "Redux", "Axios"],
    DESC: "5인 협업 프로젝트로, 결제 시스템 연동 및 장바구니 상태 관리를 주도했습니다.",
  },
  {
    TITLE: "Community Web Service",
    ROLE: "Frontend Developer",
    TECH: ["Next.js", "Prisma", "PostgreSQL"],
    DESC: "실시간 게시판과 알림 기능을 구현하였으며 Lighthouse 성능 지표를 20% 개선했습니다.",
  },
];

const TeamProject = () => {
  return (
    <div className="grid gap-8">
      {TEAM_DATA.map((project, index) => (
        <div 
          key={index} 
          className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6"
        >
          <div className="w-full md:w-1/3 h-48 bg-slate-100 rounded-xl flex items-center justify-center">
            {/* 프로젝트 대표 이미지 자리 */}
            <span className="text-slate-400 text-sm italic underline">Project Thumbnail</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h4 className="font-bold text-2xl text-slate-800">{project.TITLE}</h4>
              <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-xs font-bold rounded">
                {project.ROLE}
              </span>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed italic text-sm">
              "{project.DESC}"
            </p>
            <div className="flex flex-wrap gap-2">
              {project.TECH.map((tech) => (
                <span key={tech} className="text-indigo-400 text-xs font-mono font-bold">
                  #{tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamProject;