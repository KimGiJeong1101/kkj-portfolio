import { FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("odgwmcsoqw@naver.com");
    alert("이메일 주소가 복사되었습니다.");
  };

  return (
    <footer className="relative bg-slate-900 text-slate-400 pt-24 pb-14">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToTop}
          className="bg-white text-slate-900 p-3 rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={16} />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left max-w-sm">
            <h2 className="text-lg font-semibold text-white mb-3">
              KIM KI JEONG
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              꾸준한 개선을 통해 더 나은 결과를 만드는 개발자입니다.
              <br />
              함께 성장할 기회를 기다립니다.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <a
                href="https://github.com/KimGiJeong1101"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all"
              >
                <FaGithub size={18} />
              </a>
              <button
                onClick={copyEmail}
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all"
              >
                <FaEnvelope size={18} />
              </button>
            </div>

            <p
              onClick={copyEmail}
              className="text-xs font-mono cursor-pointer hover:text-white transition-colors"
            >
              odgwmcsoqw@naver.com
            </p>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          © {currentYear} KIM KI JEONG · Designed & Built with React, TypeScript
          and Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
