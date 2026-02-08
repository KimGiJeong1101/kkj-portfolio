// src/components/Footer.tsx
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-white mb-2 uppercase tracking-widest">Portfolio.</p>
          <p className="text-xs">이 사이트는 React, TypeScript, Tailwind CSS로 제작되었습니다.</p>
        </div>
        
        <div className="flex gap-6 text-sm">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition">GITHUB</a>
          <a href="mailto:your@email.com" className="hover:text-white transition">EMAIL</a>
        </div>

        <p className="text-xs">
          © {currentYear}. <span className="text-slate-200 font-medium">Your Name</span> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;