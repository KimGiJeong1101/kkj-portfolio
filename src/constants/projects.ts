// src/constants/projects.ts

export interface ProjectData {
  TITLE: string;
  SUBTITLE: string;
  DATE: string;
  TEAMSIZE?: string;
  DESCRIPTION: string;
  DETAILS: string[];
  TECH: string[];
  imgSrc?: string;
  GIT_URL?: string;
  PAGE_URL?: string;
  VIDEO_URL?: string;
}

export const TEAM_PROJECTS: ProjectData[] = [
  {
    TITLE: "Clubing",
    SUBTITLE: "MERN 스택 활용 소모임 레퍼런스 웹사이트",
    imgSrc: "Clubing Thumb.png",
    DATE: "2024.08 ~ 2024.09",
    TEAMSIZE: "6명",
    DESCRIPTION:
      "취미 모임 앱을 벤치마킹하여 실시간 소통과 안전한 사용자 인증에 중점을 둔 커뮤니티 서비스입니다.",
    DETAILS: [
      "Socket.IO 기반의 실시간 채팅 및 알림 시스템 구축",
      "JWT를 활용한 보안 인증 미들웨어 및 세션 관리 구현",
      "MongoDB NoSQL을 활용한 유연한 데이터 스키마 설계",
      "CKEditor 및 TUI Image Editor를 활용한 고기능 게시판 구현",
    ],
    TECH: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Redux",
    ],
    GIT_URL: "https://github.com/KimGiJeong1101/clubing-project",
    PAGE_URL: "",
    VIDEO_URL: "",
  },
  {
    TITLE: "BelleAnge",
    SUBTITLE: "Spring Boot & React 기반 반응형 쇼핑몰",
    imgSrc: "BelleAnge Thumb.png",
    DATE: "2024.03 ~ 2024.05",
    TEAMSIZE: "6명",
    DESCRIPTION:
      "가족의 사업 아이템을 모티브로 하여, 사용자 경험(UX)과 안정적인 데이터 처리를 목표로 개발한 쇼핑몰입니다.",
    DETAILS: [
      "Spring Boot & JPA를 활용한 RESTful API 서버 구축",
      "Redux와 Recoil을 활용하여 복잡한 쇼핑몰 상태 관리 최적화",
      "Spring Security와 JWT를 연동한 보안 인증 체계 구현",
      "주소 API 및 소셜 로그인 연동을 통한 사용자 편의성 증대",
    ],
    TECH: [
      "Spring Boot",
      "React",
      "MariaDB",
      "JPA",
      "Redux",
      "Recoil",
      "JWT",
      "TailwindCSS",
    ],
    GIT_URL: "https://github.com/KimGiJeong1101/Shop-Project",
    VIDEO_URL: "https://www.youtube.com/watch?v=CYK8z97SAlM",
    PAGE_URL: "",
  },
  {
    TITLE: "SCON",
    SUBTITLE: "Spring Framework 기반 뉴스 관리 서비스",
    imgSrc: "SCON Thumb.png",
    DATE: "2024.02 ~ 2024.03",
    TEAMSIZE: "6명",
    DESCRIPTION:
      "과학 뉴스 콘텐츠의 효율적인 제공과 관리를 위해 설계된 Spring MVC 기반 웹 서비스입니다.",
    DETAILS: [
      "Spring MVC 패턴을 적용한 구조적이고 유지보수가 용이한 설계",
      "MyBatis를 활용한 동적 쿼리 작성 및 데이터베이스 페이징 처리",
      "Spring Security 기반의 계정 권한 제어 및 보안 강화",
      "Ajax 비동기 통신을 활용한 실시간 댓글 기능 구현",
    ],
    TECH: [
      "Spring MVC",
      "Java",
      "MyBatis",
      "OracleDB",
      "Spring Security",
      "jQuery",
    ],
    GIT_URL: "https://github.com/KimGiJeong1101/News-Project",
    VIDEO_URL: "https://www.youtube.com/watch?v=bY7bONpr8qU",
    PAGE_URL: "",
  },
  {
    TITLE: "위스키백과",
    SUBTITLE: "Servlet & JSP 기반 블로그 애플리케이션",
    imgSrc: "whiskey Thumb.png",
    DATE: "2024.01 ~ 2024.02",
    TEAMSIZE: "5명",
    DESCRIPTION:
      "웹 서비스의 기초인 MVC 패턴과 CRUD 프로세스를 이해하기 위해 개발한 술 정보 공유 블로그입니다.",
    DETAILS: [
      "Servlet & JSP를 활용한 순수 MVC 패턴 아키텍처 구현",
      "JDBC를 이용한 직접적인 DB 상호작용 및 데이터 제어 학습",
      "페이징 알고리즘 및 검색 필터 로직 직접 구현",
      "사용자 인증 및 세션 관리를 통한 회원 기능 구축",
    ],
    TECH: ["Java", "Servlet", "JSP", "JDBC", "OracleDB", "Bootstrap"],
    GIT_URL: "https://github.com/KimGiJeong1101/Blog-Project",
    VIDEO_URL: "https://www.youtube.com/watch?v=mJ4YHVDsOGA",
    PAGE_URL: "",
  },
];

export const TOY_PROJECTS: ProjectData[] = [
  {
    TITLE: "포트폴리오 사이트",
    SUBTITLE: "React & Tailwind CSS 기반 개인 웹사이트",
    DATE: "2025.01",
    DESCRIPTION:
      "나를 표현하는 브랜딩 페이지로, 컴포넌트 기반 설계와 Framer Motion을 활용한 부드러운 인터랙션 구현에 집중했습니다.",
    DETAILS: [
      "Tailwind CSS의 Utility-first 방식을 활용하여 일관된 디자인 시스템 및 고품질 UI 구현",
      "Framer Motion을 활용한 탭 전환, 리스트 업, 호버 인터랙션 등 동적 애니메이션 구현",
      "Vite 빌드 도구를 활용하여 최적화된 초기 로딩 속도 및 효율적인 배포 환경 구축",
      "반응형 웹 디자인(Mobile-First) 적용으로 PC/태블릿/모바일 전 기기 최적화 대응",
    ],
    TECH: ["React", "Vite", "Tailwind CSS", "Framer Motion", "TypeScript"],
    GIT_URL: "https://github.com/KimGiJeong1101/kkj-portfolio",
    PAGE_URL: "https://kimgijeong1101.github.io/kgj-portfolio",
  },
  {
    TITLE: "제품키 관리 사이트",
    SUBTITLE: "MERN 스택 기반 라이선스 관리 도구",
    DATE: "2024.10",
    DESCRIPTION:
      "다양한 소프트웨어 제품키를 체계적으로 관리하기 위한 풀스택 프로젝트로, 안정적인 백엔드 통신에 집중했습니다.",
    DETAILS: [
      "Node.js & Express를 활용한 RESTful API 서버 구축",
      "PostgreSQL을 사용하여 정형화된 제품 데이터 관리 및 관계 설계",
      "Axios 인터셉터를 활용한 백엔드-프론트엔드 비동기 통신 최적화",
      "MUI 컴포넌트 커스텀을 통한 효율적인 관리자 대시보드 UI 구현",
    ],
    TECH: ["React", "Node.js", "Express", "PostgreSQL", "MUI", "Axios"],
    GIT_URL: "https://github.com/KimGiJeong1101/KeyManager",
  },
  {
    TITLE: "학사관리 프로그램",
    SUBTITLE: "Java Swing 기반 GUI 애플리케이션",
    DATE: "2023.12",
    DESCRIPTION:
      "객체지향 프로그래밍(OOP)의 원리를 이해하고, GUI 환경에서의 데이터 CRUD 처리를 학습한 프로젝트입니다.",
    DETAILS: [
      "Java Swing 라이브러리를 활용한 독립 실행형 GUI 환경 구축",
      "JDBC를 이용한 Oracle DB 연동 및 데이터 영속성 확보",
      "학생 정보 및 도서 대여 시스템의 비즈니스 로직 직접 설계",
    ],
    TECH: ["Java", "Swing", "Oracle DB", "JDBC", "OOP"],
    VIDEO_URL: "/Haksavideo.mp4",
  },
  {
    TITLE: "현대자동차 데모",
    SUBTITLE: "UI/UX 퍼블리싱 및 인터랙션 모사",
    DATE: "2023.11",
    DESCRIPTION:
      "기업용 대형 웹사이트의 구조를 분석하고, 멀티미디어 콘텐츠를 배치하는 퍼블리싱 역량을 다졌습니다.",
    DETAILS: [
      "Bootstrap 그리드 시스템을 활용한 반응형 레이아웃 구현",
      "HTML5 Video 태그와 캐러셀 로직을 결합한 메인 비주얼 섹션 제작",
      "jQuery를 활용한 햄버거 메뉴 및 스크롤 이벤트 구현",
    ],
    TECH: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
    PAGE_URL: "/kkj-portfolio/hyundai",
  },
  {
    TITLE: "글로벌IT 데모",
    SUBTITLE: "API 연동 기반 기관 홍보 페이지",
    DATE: "2023.11",
    DESCRIPTION:
      "외부 API(지도) 연동과 라이브러리를 활용한 시각적 효과 부여에 집중한 프로젝트입니다.",
    DETAILS: [
      "카카오 지도 API를 활용한 위치 기반 정보 시각화",
      "Animate.css와 jQuery 연동을 통한 사용자 인터랙션 강화",
      "미디어 쿼리를 통한 기기별 최적화된 모바일 UI 제공",
    ],
    TECH: ["HTML5", "CSS3", "JavaScript", "jQuery", "Kakao Map API"],
    PAGE_URL: "/kkj-portfolio/company",
  },
  {
    TITLE: "SWF 홍보페이지",
    SUBTITLE: "멀티미디어 배경 중심 브랜딩 페이지",
    DATE: "2023.11",
    DESCRIPTION:
      "동적인 영상 배경과 CSS3 애니메이션을 결합하여 시각적인 몰입감을 극대화한 페이지입니다.",
    DETAILS: [
      "YouTube Embed API를 활용한 백그라운드 비디오 제어",
      "CSS3 Keyframes를 활용한 텍스트 및 버튼 모션 효과 구현",
      "직관적인 네비게이션과 서브 메뉴 트리 구조 설계",
    ],
    TECH: ["HTML5", "CSS3", "JavaScript", "Font Awesome"],
    PAGE_URL: "/kkj-portfolio/swf",
  },
];
