import { motion } from "framer-motion";

// 기술 스택 데이터 (상징적인 아이콘 URL이나 Simple Icons 사용 권장)
const SKILL_DATA = [
  {
    CATEGORY: "BACKEND",
    ITEMS: [
      { name: "Java", icon: "/java.png" },
      { name: "Spring Boot", icon: "/springboot.png" },
      { name: "Node.js", icon: "/nodeJS.png" },
      { name: "Express", icon: "/expressJS.png" },
    ],
  },
  {
    CATEGORY: "FRONTEND",
    ITEMS: [
      { name: "React", icon: "/React.png" },
      { name: "JavaScript", icon: "/javascript.png" },
      { name: "Tailwind CSS", icon: "tailwind.png" }, // 현재 쓰고 계신 스택 추가
      { name: "jQuery/JSP", icon: "/jquery.png" }, // 유지보수 역량 어필용
    ],
  },
  {
    CATEGORY: "DATABASE",
    ITEMS: [
      { name: "MySQL", icon: "/mysql.png" },
      { name: "Oracle", icon: "/OracleDB.png" },
      { name: "MariaDB", icon: "/mariadb.png" },
      { name: "MongoDB", icon: "/MongoDB.png" },
    ],
  },
  {
    CATEGORY: "DEV TOOLS",
    ITEMS: [
      { name: "Git", icon: "/git.png" },
      { name: "GitHub", icon: "https://simpleicons.org/icons/github.svg" },
      { name: "Postman", icon: "/postman.png" }, // API 테스트 툴로 전문성 강조
    ],
  },
];

const Skill = () => {
  return (
    <section id="skill" className="py-20 border-t border-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-4">
            TECHNICAL SKILLS
          </h2>
          <p className="text-slate-500 font-medium">
            활용 가능한 기술 스택입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_DATA.map((group) => (
            <div key={group.CATEGORY} className="flex flex-col">
              <h3 className="text-xs font-black tracking-[0.2em] text-indigo-500 mb-6 border-l-4 border-indigo-600 pl-3">
                {group.CATEGORY}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {group.ITEMS.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all group"
                  >
                    {/* 아이콘 영역 */}
                    <div className="w-10 h-10 mb-3 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain opacity-60 group-hover:opacity-100"
                      />
                    </div>
                    {/* 이름 영역 (기정님의 컨셉을 반영해 평소엔 연하게, 호버 시 진하게) */}
                    <span className="text-[11px] font-bold text-slate-400 group-hover:text-indigo-600 transition-colors uppercase tracking-wider text-center leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
