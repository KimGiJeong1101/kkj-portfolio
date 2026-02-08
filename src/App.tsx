import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import ProjectFrame from "./components/ProjectFrame";
import Career from "./components/Career";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans">
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <AboutMe />
        <Skill />
        <ProjectFrame />
        <Career />
      </main>
      <Footer />
    </div>
  );
}

export default App;