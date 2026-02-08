import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutMe = () => {
  const [isIntroActive, setIsIntroActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroActive(false);
    }, 3000); // 멘트가 조금 기니까 3초 정도로 여유있게 설정
    return () => clearTimeout(timer);
  }, []);

  // 상수로 관리하는 내 정보
  const MY_INFO = [
    { LABEL: "NAME", VALUE: "김기정" },
    { LABEL: "BIRTH", VALUE: "1993. 11. 01" },
    { LABEL: "PHONE", VALUE: "010-2905-2325" },
    { LABEL: "EMAIL", VALUE: "odgwmcsoqw@naver.com" },
    { LABEL: "LOCATION", VALUE: "경기 부천시 성곡로" },
  ];

  return (
    <section
      id="aboutme"
      className="relative min-h-[70vh] flex items-center justify-center py-20 overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {isIntroActive ? (
          /* --- STEP 1: 인트로 화면 (감성 멘트) --- */
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="text-center px-6 max-w-3xl"
          >
            <h2 className="text-xl md:text-2xl font-medium text-slate-500 mb-6">
              안녕하세요.
            </h2>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-snug mb-8">
              개발자 <span className="text-indigo-600">김기정</span>입니다.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed break-keep font-light">
              꾸준히 배우고 도전하며, 함께 성장하는 개발자가 되어,{" "}
              <br className="hidden md:block" />
              <span className="font-semibold text-slate-800">
                작은 성취를 모아 큰 변화
              </span>
              를 만들어내고 싶습니다.
            </p>
          </motion.div>
        ) : (
          /* --- STEP 2: 메인 정보 화면 (팩트 중심) --- */
          <motion.div
            key="profile"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl mx-auto px-6"
          >
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col md:flex-row items-stretch">
              {/* 왼쪽: 사진 영역  */}
              <div className="md:w-2/5 bg-slate-50 flex items-center justify-center p-6 sm:p-8 border-b md:border-b-0 md:border-r border-slate-100">
                <div className="w-full max-w-[240px] md:max-w-none aspect-[3/4] bg-slate-200 rounded-2xl shadow-inner overflow-hidden relative group">
                  <img
                    src="/이력서사진.jpg"
                    alt="김기정"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/300x400?text=No+Image";
                    }}
                  />

                  {/* 사진 하단에 은은한 그라데이션을 넣어 잘림 방지 및 고급스러움 추가 */}
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] pointer-events-none" />
                </div>
              </div>

              {/* 오른쪽: 정보 나열 영역 */}
              <div className="md:w-3/5 p-10 flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-sm font-black tracking-[0.3em] text-indigo-500 mb-2">
                    INFORMATION
                  </h3>
                  <div className="h-1 w-12 bg-indigo-600 rounded-full" />
                </div>

                <div className="grid gap-y-6">
                  {MY_INFO.map((info) => (
                    <div key={info.LABEL} className="group">
                      <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-1 group-hover:text-indigo-400 transition-colors">
                        {info.LABEL}
                      </p>

                      <p className="text-lg font-bold text-slate-800">
                        {info.VALUE}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutMe;
