// src/components/Career.tsx
interface CareerItem {
  PERIOD: string;
  COMPANY: string;
  ROLE: string;
  DESCRIPTION: string;
}

const CAREER_DATA: CareerItem[] = [
  {
    PERIOD: "2024 - Present",
    COMPANY: "Awesome Tech Inc.",
    ROLE: "Frontend Developer",
    DESCRIPTION: "디자인 시스템 구축 및 서비스 최적화 작업 수행. React 기반의 고성능 대시보드 개발.",
  },
  {
    PERIOD: "2022 - 2023",
    COMPANY: "Startup Studio",
    ROLE: "Web Developer",
    DESCRIPTION: "다양한 클라이언트의 요구사항에 맞춘 반응형 웹사이트 개발 및 배포.",
  }
];

const Career = () => {
  return (
    <section id="career" className="py-20 border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Experience</h2>
        
        <div className="space-y-12">
          {CAREER_DATA.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="md:w-32 flex-shrink-0">
                <span className="font-bold text-indigo-600 underline underline-offset-8 decoration-2">
                  {item.PERIOD}
                </span>
              </div>
              
              <div className="flex-1 border-l-2 border-slate-100 pl-6 pb-2">
                <h3 className="font-bold text-xl text-slate-800">{item.COMPANY}</h3>
                <p className="text-indigo-500 text-sm font-medium italic mb-3">{item.ROLE}</p>
                <p className="text-slate-600 leading-relaxed">
                  {item.DESCRIPTION}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;