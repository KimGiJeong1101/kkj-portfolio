import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutMe = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500); // 2.5초 후 전환
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="aboutme"
      className="min-h-[60vh] flex items-center justify-center py-20"
    >
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-indigo-600">
              끊임없이 성장하는 개발자, <br className="md:hidden" /> OOO입니다.
            </h1>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-10 items-center w-full"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                안녕하세요! 저는 복잡한 문제를 단순하게 푸는 것을 즐깁니다.{" "}
                <br />
                사용자 중심의 사고로 더 나은 경험을 설계합니다.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">
                    NAME
                  </p>
                  <p className="font-medium">홍길동</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">
                    EMAIL
                  </p>
                  <p className="font-medium">dev@example.com</p>
                </div>
              </div>
            </div>
            <div className="bg-indigo-100 h-64 rounded-2xl flex items-center justify-center">
              {/* 여기에 본인 사진이나 일러스트 배치 */}
              <span className="text-indigo-400 font-mono italic">
                Your Profile Image
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutMe;
