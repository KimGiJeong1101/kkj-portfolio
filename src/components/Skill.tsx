const Skill = () => {
  const skills = [
    { title: "BACKEND", items: ["Node.js", "Java", "Spring Boot", "Express"] },
    { title: "FRONTEND", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { title: "DATABASE", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
    { title: "DEV TOOLS", items: ["Git", "Docker", "AWS", "Vercel"] },
  ];

  return (
    <section id="skill" className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div key={skill.title} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h3 className="text-indigo-600 font-bold mb-4 border-b pb-2">{skill.title}</h3>
            <ul className="space-y-2">
              {skill.items.map((item) => (
                <li key={item} className="text-slate-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;