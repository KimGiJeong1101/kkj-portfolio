const Header = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Career", href: "#career" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* 로고 영역 */}
        <h1 className="text-2xl font-black tracking-tighter text-slate-900 cursor-pointer">
          DEV<span className="text-blue-600">.</span>PORTFOLIO
        </h1>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* 모바일 햄버거 메뉴 (간단한 형태) */}
        <div className="md:hidden flex flex-col gap-1.5 cursor-pointer">
          <span className="w-6 h-0.5 bg-slate-800"></span>
          <span className="w-6 h-0.5 bg-slate-800"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;