interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
}

const ToyProject = () => {
  const projects: Project[] = [
    {
      title: 'Weather Dashboard',
      description:
        '실시간 날씨 정보를 제공하는 대시보드 애플리케이션입니다. OpenWeather API를 활용하여 현재 날씨와 5일간의 예보를 시각화했습니다.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'OpenWeather API'],
      github: 'https://github.com/username/weather-dashboard',
      demo: 'https://weather-dashboard-demo.com',
    },
    {
      title: 'Todo App with Animation',
      description:
        '우아한 애니메이션과 함께 작동하는 Todo 애플리케이션입니다. 드래그 앤 드롭 기능과 카테고리 분류 기능을 구현했습니다.',
      tech: ['React', 'Framer Motion', 'LocalStorage'],
      github: 'https://github.com/username/todo-app',
    },
    {
      title: 'Portfolio Template',
      description:
        '개발자를 위한 반응형 포트폴리오 템플릿입니다. 다크모드 지원과 부드러운 스크롤 애니메이션이 특징입니다.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/username/portfolio-template',
      demo: 'https://portfolio-template-demo.com',
    },
    {
      title: 'Note Taking App',
      description:
        '마크다운 형식을 지원하는 노트 작성 앱입니다. 실시간 프리뷰와 태그 기반 검색 기능을 제공합니다.',
      tech: ['React', 'Markdown', 'IndexedDB'],
      github: 'https://github.com/username/note-app',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-stone-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
        >
          {/* Project Image Placeholder */}
          <div className="h-48 bg-gradient-to-br from-amber-400 to-orange-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-stone-900/50 flex items-center justify-center group-hover:bg-stone-900/30 transition-all duration-300">
              <span className="text-white text-2xl font-bold opacity-50">
                {project.title}
              </span>
            </div>
          </div>

          {/* Project Info */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-amber-400 mb-3">
              {project.title}
            </h3>
            <p className="text-stone-300 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIdx) => (
                <span
                  key={techIdx}
                  className="px-3 py-1 bg-stone-700 text-stone-200 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToyProject;