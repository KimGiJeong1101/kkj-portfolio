import { motion } from "framer-motion";

const SKILL_DATA = [
  {
    CATEGORY: "BACKEND",
    ITEMS: [
      { name: "Java", icon: "java.png" },
      { name: "Spring Boot", icon: "springboot.png" },
      { name: "Node.js", icon: "nodeJS.png" },
      { name: "Express", icon: "expressJS.png" },
    ],
  },
  {
    CATEGORY: "FRONTEND",
    ITEMS: [
      { name: "React", icon: "React.png" },
      { name: "JavaScript", icon: "javascript.png" },
      { name: "Tailwind CSS", icon: "tailwind.png" },
      { name: "jQuery/JSP", icon: "jquery.png" },
    ],
  },
  {
    CATEGORY: "DATABASE",
    ITEMS: [
      { name: "MySQL", icon: "mysql.png" },
      { name: "Oracle", icon: "OracleDB.png" },
      { name: "MariaDB", icon: "mariadb.png" },
      { name: "MongoDB", icon: "MongoDB.png" },
    ],
  },
  {
    CATEGORY: "DEV TOOLS",
    ITEMS: [
      { name: "Git", icon: "git.png" },
      { name: "GitHub", icon: "https://simpleicons.org/icons/github.svg" },
      { name: "Postman", icon: "postman.png" },
    ],
  },
];

const Skill = () => {
  return (
    <section id="skill" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* 타이틀 */}
        <div className="mb-24">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-slate-900 mb-4">
            Skills
          </h2>
          <div className="w-12 h-[2px] bg-slate-900 mb-6" />
          <p className="text-slate-500 text-sm">
            지금까지 프로젝트에서 사용해온 기술들입니다.
          </p>
        </div>

        {/* 카테고리 */}
        <div className="space-y-24">
          {SKILL_DATA.map((group) => (
            <div key={group.CATEGORY}>
              <h3 className="text-sm font-semibold tracking-[0.15em] text-slate-400 mb-12">
                {group.CATEGORY}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {group.ITEMS.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 220 }}
                    className="
                      group
                      flex flex-col items-center justify-center
                      bg-white
                      border border-slate-200
                      rounded-xl
                      py-6 px-4
                      transition-all duration-300
                      hover:shadow-md
                      hover:border-slate-300
                    "
                  >
                    {/* 아이콘 */}
                    <div
                      className="
                        w-12 h-12 mb-4 flex items-center justify-center
                        opacity-70 group-hover:opacity-100
                        transition duration-300
                      "
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* 이름 */}
                    <span
                      className="
                        text-xs font-medium tracking-wide
                        text-slate-600
                        group-hover:text-slate-900
                        transition-colors duration-300
                      "
                    >
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
