import { useState, useEffect } from "react";

const AboutMe = () => {
  const [isIntro, setIsIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntro(false);
    }, 3000); // 3초 뒤에 전환
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[600px] flex items-center justify-center py-20">
      {isIntro ? (
        <div className="animate-pulse transition-opacity duration-1000 ease-in-out opacity-100">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            안녕하세요, <br /> 
            <span className="text-blue-600">성장하는 개발자</span> OOO입니다.
          </h1>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-10 items-center animate-fadeIn duration-1000">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              사용자 경험을 중요시하며, 깔끔한 코드를 지향합니다. <br />
              새로운 기술을 배우는 데 두려움이 없습니다.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <ul className="space-y-3">
              <li><strong>NAME:</strong> 홍길동</li>
              <li><strong>EMAIL:</strong> dev@example.com</li>
              <li><strong>GITHUB:</strong> github.com/user</li>
              <li><strong>EDUCATION:</strong> OO대학교 컴퓨터공학</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutMe;