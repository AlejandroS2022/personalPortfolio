import { useState, useEffect } from 'react';

import Sidebar from "../components/Sidebar/Sidebar"
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  const [loading, setLoading] = useState(true);
  useLocalStorage()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      { loading && <LoadingScreen /> }
      <Navbar />
      <Sidebar />

      <div className="rock rock--left" />
      <div className="rock rock--right" />

      <div className="main-app">
        <Hero />
        <Projects />
        <AboutMe />
        <Contact />
      </div>
    </>
  )
}

export default App
