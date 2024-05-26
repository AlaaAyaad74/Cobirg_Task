import Blog from "./components/blog/Blog";
import Hero from "./components/hero_section/Hero";
import Projects from "./components/projects/Projects";
import Statistics from "./components/statics/Statistics";
import Footer from "./components/footer/footer";
function App() {
  return (
    <>
      <div className="first__cover">
        <Hero />
        <Statistics />
        <Projects />
      </div>
      <div className="second__cover">
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
