import { lazy } from "react";
const Blog = lazy(() => import("./components/blog/Blog"));
const Hero = lazy(() => import("./components/hero_section/Hero"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Statistics = lazy(() => import("./components/statics/Statistics"));
const Footer = lazy(() => import("./components/footer/footer"));

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
