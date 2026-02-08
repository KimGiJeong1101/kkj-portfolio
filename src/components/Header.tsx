// src/components/Header.tsx
const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tighter uppercase text-indigo-600">
          KKJ's Portfolio
        </div>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          <a
            href="#aboutme"
            className="hover:text-indigo-600 transition-colors"
          >
            ABOUT
          </a>
          <a href="#skill" className="hover:text-indigo-600 transition-colors">
            SKILLS
          </a>
          <a
            href="#project"
            className="hover:text-indigo-600 transition-colors"
          >
            PROJECTS
          </a>
          <a href="#career" className="hover:text-indigo-600 transition-colors">
            CAREER
          </a>
        </div>

        {/* 모바일에서는 간단한 아이콘 등으로 대체 가능 (현재는 생략) */}
      </nav>
    </header>
  );
};

export default Header;
