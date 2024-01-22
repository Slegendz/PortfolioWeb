import Banner from "./components/Banner/banner";
import Navbar from "./components/Navbar/navbar";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className = "App">
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  )
}

export default App
