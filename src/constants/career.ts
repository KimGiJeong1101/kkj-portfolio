export interface CareerItem {
  PERIOD: string;
  COMPANY: string;
  ROLE: string;
  DESCRIPTION: string;
  ACHIEVEMENTS: string[];
  TECH?: string[];
  TYPE: "EDUCATION" | "STUDY" | "WORK";
}

export const CAREER_DATA: CareerItem[] = [
  {
    PERIOD: "2024.08 - 2024.09",
    COMPANY: "인프런 스터디",
    ROLE: "MERN 스택 기반 소모임 앱 개발",
    DESCRIPTION:
      "React와 Node.js를 활용하여 현대적인 웹 기술 스택을 익히고, 실시간 통신 및 인증 시스템을 직접 구현했습니다.",
    ACHIEVEMENTS: [
      "React 컴포넌트 기반 UI 모듈화 및 에디터 라이브러리 적용",
      "Express 서버 구성 및 MongoDB(NoSQL) 비정형 데이터 설계",
      "카카오 OAuth 2.0 및 JWT 기반 인증/인가 시스템 구축",
      "Socket.io를 활용한 실시간 채팅 기능 구현",
    ],
    TECH: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    TYPE: "STUDY",
  },
  {
    PERIOD: "2023.11 - 2024.05",
    COMPANY: "글로벌아이티인재개발원",
    ROLE: "풀스택 프레임워크 기반 데이터 융합 SW 개발자 과정",
    DESCRIPTION:
      "자바와 스프링 생태계를 중심으로 MVC 패턴부터 마이크로서비스 아키텍처의 기초까지 폭넓게 학습했습니다.",
    ACHIEVEMENTS: [
      "Servlet/JSP 기반 MVC 블로그 웹 애플리케이션 개발",
      "Spring Boot + React 조합의 반응형 쇼핑몰 구축",
      "Oracle, MySQL, MariaDB 등 다양한 RDBMS 경험 및 SQL 최적화",
      "AWS, Linux, Docker를 이용한 배포 및 운영 기초 습득",
    ],
    TECH: ["Java", "Spring Boot", "React", "TypeScript", "MySQL", "AWS"],
    TYPE: "EDUCATION",
  },
  {
    PERIOD: "2018.10 - 2022.01",
    COMPANY: "웰컴금융그룹 (웰컴에프앤디/캐피탈)",
    ROLE: "ICT본부 인프라 운영 및 보안 프로젝트 지원 (상주)",
    DESCRIPTION:
      "금융 그룹 내 IT 헬프데스크 운영을 전담하며 사용자 기술 지원을 수행하였고, 망 분리 및 OS 업그레이드 등 전사적 인프라 프로젝트에 핵심 인력으로 참여했습니다.",
    ACHIEVEMENTS: [
      "IT 헬프데스크 운영: 전사 사용자 장애 대응, S/W 및 H/W 기술 지원, 인프라 관리 매뉴얼 제작",
      "전사 망 분리 프로젝트: 내부망/개발망 분리 구축 및 KVM 스위치 도입을 통한 보안 강화",
      "OS 표준화 사업: Windows 10 대규모 업그레이드 및 표준 OS 이미지 생성/배포 관리",
      "인프라 고도화: Active Directory 이행 지원 및 중앙 관리 시스템을 통한 보안 정책 적용",
      "장애 예방 및 대응: 실시간 네트워크/서버 통신 점검 및 금융 보안 솔루션 호환성 최적화",
    ],
    TYPE: "WORK",
  },
];
