import { FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 이메일 주소를 클릭하면 복사되는 간단한 함수
  const copyEmail = () => {
    navigator.clipboard.writeText("odgwmcsoqw@naver.com"); // 실제 기정님 이메일로 수정하세요!
    alert("이메일 주소가 복사되었습니다.");
  };

  return (
    <footer className="relative bg-slate-900 text-slate-400 py-12">
      {/* 🔝 상단 이동 버튼: 너무 튀지 않게 심플한 디자인 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={scrollToTop}
          className="bg-slate-800 hover:bg-indigo-600 text-white p-3 rounded-xl shadow-xl transition-all border border-slate-700 cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={18} />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* 왼쪽: 담백한 자기소개 */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-black text-white tracking-tight mb-2 uppercase">
              KIM KI JEONG
            </h2>
            <p className="text-xs font-medium leading-relaxed max-w-xs">
              기록하고 개선하는 과정을 즐기는 개발자입니다.
              <br />
              궁금한 점이 있으시다면 언제든 연락주세요.
            </p>
          </div>

          {/* 오른쪽: 소셜 및 연락처 (실무적인 느낌) */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex gap-4 mb-1">
              <a
                href="https://github.com/KimGiJeong1101"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors p-2 bg-slate-800 rounded-lg"
              >
                <FaGithub size={20} />
              </a>
              <button
                onClick={copyEmail}
                className="hover:text-white transition-colors p-2 bg-slate-800 rounded-lg"
                title="이메일 주소 복사"
              >
                <FaEnvelope size={20} />
              </button>
            </div>
            <p
              onClick={copyEmail}
              className="text-xs font-mono cursor-pointer hover:text-indigo-400"
            >
              odgwmcsoqw@naver.com
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-widest uppercase font-bold">
            © {currentYear} <span className="text-slate-200">KIM KI JEONG</span>
          </p>
          <p className="text-[10px] tracking-tight">
            Built with{" "}
            <span className="text-slate-300">
              React, TypeScript & Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
