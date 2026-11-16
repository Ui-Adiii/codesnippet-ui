import React from 'react'
import Navbar from './components/Navbar';
import Footer from "./components/Footer"

import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Hero from './pages/Hero';

import { ThemeProvider } from "./context/theme-provider";

const Main = () => {
  return (
    <ThemeProvider defaultTheme="system">
      <main className="flex min-h-screen bg-background text-foreground flex-col overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
  
}

export default Main