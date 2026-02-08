interface ExperienceProps {
  period: string;
  title: string;
  company: string;
  description: string;
}

const ExperienceItem = ({ period, title, company, description }: ExperienceProps) => (
  <div className="relative pl-8 pb-12 last:pb-0 border-l-2 border-slate-200 ml-4">
    {/* 타임라인 포인트 */}
    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-blue-600" />
    
    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
      <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
        {period}
      </span>
      <h3 className="text-xl font-bold text-slate-800">{title}</h3>
    </div>
    <p className="font-semibold text-slate-700 mb-2">{company}</p>
    <p className="text-slate-500 leading-relaxed text-sm md:text-base whitespace-pre-line">
      {description}
    </p>
  </div>
);

const Career = () => {
  return (
    <section id="career" className="py-24">
      <h2 className="text-3xl font-bold mb-16 text-center tracking-tight">Experience</h2>
      <div className="max-w-3xl mx-auto">
        <ExperienceItem 
          period="2024.01 - 2024.06"
          title="Frontend Developer (Intern)"
          company="(주)테크이노베이션"
          description="• 리액트 기반 사내 관리 시스템 UI/UX 고도화 수행\n• API 연동 및 데이터 상태 관리(TanStack Query) 최적화\n• 라이트 모드/다크 모드 테마 시스템 구축"
        />
        <ExperienceItem 
          period="2023.07 - 2023.12"
          title="Web Development Bootcamp"
          company="네이버 부스트캠프"
          description="• 풀스택 개발 프로젝트 수행 및 팀 프로젝트 협업\n• 코드 리뷰 및 기술 블로그 운영을 통한 지식 공유"
        />
      </div>
    </section>
  );
};

export default Career;