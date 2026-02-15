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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      const HEADER_HEIGHT = 72;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - HEADER_HEIGHT;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* 로고 */}
        <div
          className="text-xl md:text-2xl font-semibold tracking-[-0.02em] cursor-pointer
          text-slate-900 hover:opacity-70 transition-opacity"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          KKJ<span className="text-slate-400 font-light">'s portfolio</span>
        </div>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-600">
          {MENU_ITEMS.map((item) => (
            <a
              key={item.NAME}
              href={item.HREF}
              onClick={(e) => scrollToSection(e, item.HREF)}
              className="relative transition-all duration-300 hover:text-slate-900 hover:-translate-y-[1px]"
            >
              {item.NAME}
            </a>
          ))}
        </div>

        {/* 모바일 버튼 */}
        <button
          className="md:hidden p-2 z-50 text-slate-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-[2px] bg-slate-800 transition-all duration-300 origin-left ${
                isOpen ? "rotate-[42deg] translate-x-1" : ""
              }`}
            />
            <span
              className={`w-full h-[2px] bg-slate-800 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-[2px] bg-slate-800 transition-all duration-300 origin-left ${
                isOpen ? "-rotate-[42deg] translate-x-1" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.25 }}
              className="absolute top-[72px] left-0 w-full 
              bg-white/80 backdrop-blur-xl 
              shadow-[0_20px_60px_rgba(0,0,0,0.08)] 
              md:hidden z-40"
            >
              <div className="flex flex-col px-10 py-14 gap-10">
                {MENU_ITEMS.map((item) => (
                  <a
                    key={item.NAME}
                    href={item.HREF}
                    onClick={(e) => scrollToSection(e, item.HREF)}
                    className="text-2xl font-semibold text-slate-800 
                    hover:opacity-60 transition-opacity"
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
