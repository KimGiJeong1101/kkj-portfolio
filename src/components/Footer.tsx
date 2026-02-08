const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-white font-bold mb-2">Developed by YourName</p>
          <p className="text-sm">어제보다 조금 더 나은 내일을 만드는 개발자입니다.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Github</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Blog</a>
        </div>

        <p className="text-xs">
          © {currentYear} YourName. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;