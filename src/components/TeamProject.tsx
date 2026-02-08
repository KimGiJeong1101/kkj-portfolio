interface TeamProject {
  title: string;
  description: string;
  role: string;
  team: number;
  period: string;
  tech: string[];
  achievements: string[];
  github?: string;
  demo?: string;
}

const TeamProject = () => {
  const projects: TeamProject[] = [
    {
      title: 'E-Commerce Platform',
      description:
        '사용자 친화적인 쇼핑몰 플랫폼입니다. 실시간 재고 관리, 결제 시스템, 관리자 대시보드를 구현했습니다.',
      role: 'Frontend Developer',
      team: 5,
      period: '2024.01 - 2024.03',
      tech: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      achievements: [
        '반응형 UI 구현으로 모바일 사용자 30% 증가',
        '장바구니 상태 관리 최적화로 성능 40% 개선',
        'Lighthouse 성능 점수 85점 달성',
      ],
      github: 'https://github.com/team/ecommerce',
      demo: 'https://ecommerce-demo.com',
    },
    {
      title: 'Task Management System',
      description:
        '팀 협업을 위한 프로젝트 관리 도구입니다. 실시간 협업, 간트 차트, 알림 시스템 등을 제공합니다.',
      role: 'Full Stack Developer',
      team: 4,
      period: '2023.09 - 2023.12',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io'],
      achievements: [
        'WebSocket을 활용한 실시간 협업 기능 구현',
        '드래그 앤 드롭 기반 직관적인 UI 설계',
        '50+ 팀이 사용하는 서비스로 성장',
      ],
      github: 'https://github.com/team/task-manager',
    },
    {
      title: 'Social Media Dashboard',
      description:
        '여러 소셜 미디어 계정을 한 곳에서 관리할 수 있는 대시보드입니다. 예약 포스팅과 분석 기능을 제공합니다.',
      role: 'Frontend Lead',
      team: 6,
      period: '2023.06 - 2023.08',
      tech: ['React', 'TypeScript', 'Chart.js', 'REST API'],
      achievements: [
        '5개 소셜 미디어 플랫폼 API 통합',
        '데이터 시각화를 통한 인사이트 제공',
        '사용자 편의성 개선으로 만족도 4.5/5 달성',
      ],
      demo: 'https://social-dashboard-demo.com',
    },
  ];

  return (
    <div className="space-y-8">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-stone-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
        >
          <div className="grid md:grid-cols-3 gap-6 p-8">
            {/* Left Section - Project Info */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <h3 className="text-2xl md:text-3xl font-bold text-amber-400">
                  {project.title}
                </h3>
                <span className="px-4 py-1 bg-amber-400/20 text-amber-400 text-sm rounded-full border border-amber-400/50">
                  {project.role}
                </span>
              </div>

              <p className="text-stone-300 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div>
                <div className="text-sm text-amber-400 uppercase tracking-wider mb-2">
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-stone-700 text-stone-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <div className="text-sm text-amber-400 uppercase tracking-wider mb-3">
                  Key Achievements
                </div>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, achIdx) => (
                    <li
                      key={achIdx}
                      className="flex items-start gap-2 text-stone-300"
                    >
                      <svg
                        className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-2">
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

            {/* Right Section - Meta Info */}
            <div className="space-y-4">
              <div className="bg-stone-700/50 p-4 rounded-lg">
                <div className="text-sm text-amber-400 uppercase tracking-wider mb-1">
                  Period
                </div>
                <div className="text-stone-200">{project.period}</div>
              </div>
              <div className="bg-stone-700/50 p-4 rounded-lg">
                <div className="text-sm text-amber-400 uppercase tracking-wider mb-1">
                  Team Size
                </div>
                <div className="text-stone-200">{project.team} Members</div>
              </div>
              <div className="bg-stone-700/50 p-4 rounded-lg">
                <div className="text-sm text-amber-400 uppercase tracking-wider mb-1">
                  My Role
                </div>
                <div className="text-stone-200">{project.role}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamProject;