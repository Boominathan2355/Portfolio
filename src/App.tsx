import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import CurrentFocus from './components/sections/CurrentFocus';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import AIEngineering from './components/sections/AIEngineering';
import Timeline from './components/sections/Timeline';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import { CommandPalette } from './components/features/CommandPalette';
import { ScrollProgress } from './components/features/ScrollProgress';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { personalData } from './data/personalData';

function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  
  useKeyboardShortcuts();

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <ScrollProgress />
      <Navbar onCommandPalette={() => setCommandPaletteOpen(true)} />
      
      <main className="flex flex-col min-h-screen">
        <Hero data={personalData} />
        <About data={personalData} />
        <Experience data={personalData.experience} />
        <CurrentFocus data={personalData.currentFocus} />
        <Skills data={personalData.skills} />
        <Projects data={personalData.projects} />
        <AIEngineering />
        <Timeline data={personalData.timeline} />
        <Education data={personalData.education} />
        <Certifications 
          certifications={personalData.certifications} 
          achievements={personalData.achievements} 
        />
        <Contact data={personalData} />
      </main>

      <Footer data={personalData} />
      <CommandPalette open={commandPaletteOpen} setOpen={setCommandPaletteOpen} />
    </ThemeProvider>
  );
}

export default App;