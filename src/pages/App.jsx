import Sidebar from "../components/Sidebar/Sidebar"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import AboutMe from "../components/AboutMe/AboutMe";

import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  useLocalStorage()

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="main-app">
        <Hero />
        <Projects />
        <AboutMe />
      </div>
    </>
  )
}

export default App
