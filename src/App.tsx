import Hero from "./components/Hero";
import Platform from "./components/Platform";
import Industries from "./components/Industries";
import Results from "./components/Results";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Platform />
      <Industries />
      <Results />
      <Process />
      <About />
      <Contact /> {/* 👈 LAST SECTION */}
    </div>
  );
}

export default App;


