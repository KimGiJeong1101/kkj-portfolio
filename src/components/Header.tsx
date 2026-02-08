import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const MENU_ITEMS = [
    { NAME: "ABOUT", HREF: "#aboutme" },
    { NAME: "SKILLS", HREF: "#skill" },
    { NAME: "PROJECTS", HREF: "#project" },
    { NAME: "CAREER", HREF: "#career" },
  ];

  // 스크롤 시 헤더 그림자 효과를 위한 상태 감지
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 부드러운 스크롤 함수 (모바일/웹 공통 해결책)
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      // 헤더 높이(64px)만큼 여유를 두고 이동
      const HEADER_HEIGHT = 64;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - HEADER_HEIGHT;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // 이동 후 모바일 메뉴 닫기
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      } border-b border-slate-100`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* 로고 */}
        <div
          className="font-extrabold text-2xl tracking-tighter uppercase text-indigo-600 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          KKJ's Portfolio
        </div>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
          {MENU_ITEMS.map((item) => (
            <a
              key={item.NAME}
              href={item.HREF}
              onClick={(e) => scrollToSection(e, item.HREF)}
              className="hover:text-indigo-600 transition-colors relative group"
            >
              {item.NAME}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="md:hidden p-2 text-slate-600 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-indigo-600 transition-all duration-300 origin-left ${isOpen ? "rotate-[42deg] translate-x-1" : ""}`}
            />
            <span
              className={`w-full h-0.5 bg-indigo-600 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-full h-0.5 bg-indigo-600 transition-all duration-300 origin-left ${isOpen ? "-rotate-[42deg] translate-x-1" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* 모바일 메뉴 (애니메이션) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 메뉴 배경 (딤처리) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/10 backdrop-blur-sm md:hidden"
            />

            {/* 실제 메뉴 바 */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-xl md:hidden z-40"
            >
              <div className="flex flex-col px-8 py-10 gap-8">
                {MENU_ITEMS.map((item) => (
                  <a
                    key={item.NAME}
                    href={item.HREF}
                    onClick={(e) => scrollToSection(e, item.HREF)}
                    className="text-xl font-black text-slate-800 hover:text-indigo-600 transition-colors"
                  >
                    {item.NAME}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
