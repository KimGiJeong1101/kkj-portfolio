import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutMe = () => {
  const [isIntroActive, setIsIntroActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroActive(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
      className="relative min-h-[70vh] flex items-center justify-center py-32"
    >
      <AnimatePresence mode="wait">
        {isIntroActive ? (
          /* STEP 1: 인트로 */
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
            transition={{ duration: 0.8 }}
            className="text-center px-6 max-w-3xl"
          >
            <h2 className="text-lg md:text-xl font-medium text-slate-400 mb-8">
              안녕하세요.
            </h2>

            <h1 className="text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-slate-900 leading-tight mb-10">
              개발자 김기정입니다.
            </h1>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed break-keep font-light">
              꾸준히 배우고 도전하며, 함께 성장하는 개발자가 되어,
              <br className="hidden md:block" />
              작은 성취를 모아 큰 변화를 만들어가고 싶습니다.
            </p>
          </motion.div>
        ) : (
          /* STEP 2: 프로필 */
          <motion.div
            key="profile"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl mx-auto px-6"
          >
            <div className="flex flex-col md:flex-row gap-16 md:gap-20 items-center md:items-start">
              {/* 사진 영역 */}
              <div className="w-full max-w-[240px] aspect-[3/4] bg-slate-100 rounded-3xl overflow-hidden relative">
                <img
                  src="이력서사진.jpg"
                  alt="김기정"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/300x400?text=No+Image";
                  }}
                />
                <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.06)] pointer-events-none" />
              </div>

              {/* 정보 영역 */}
              <div className="flex-1 max-w-md">
                <div className="mb-14">
                  <h3 className="text-sm font-semibold tracking-[0.15em] text-slate-400 mb-6">
                    Profile
                  </h3>
                  <div className="w-10 h-[2px] bg-slate-900" />
                </div>

                <div className="space-y-8">
                  {MY_INFO.map((info) => (
                    <div key={info.LABEL}>
                      <p className="text-[11px] font-medium tracking-widest text-slate-400 mb-1">
                        {info.LABEL}
                      </p>

                      <p className="text-lg font-medium text-slate-900">
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
