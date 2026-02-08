const Skill = () => {
  const skills = [
    { title: "BACKEND", list: ["Node.js", "Java", "Spring Boot", "Express"] },
    { title: "FRONTEND", list: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { title: "DATABASE", list: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
    { title: "DEVELOPTOOL", list: ["Git", "Docker", "Figma", "Vercel"] },
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((s) => (
          <div key={s.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
            <h3 className="text-blue-600 font-bold mb-4 border-b pb-2">{s.title}</h3>
            <div className="flex flex-wrap gap-2">
              {s.list.map((item) => (
                <span key={item} className="px-3 py-1 bg-slate-100 text-sm rounded-full text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;