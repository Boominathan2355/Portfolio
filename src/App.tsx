import { useState, useEffect, Fragment, type ReactNode } from 'react';
import { ThemeProvider, useTheme } from 'next-themes';
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
import { portfolioConfig, type SectionEntry } from './config/portfolio.config';

const sectionRenderers: Record<SectionEntry['id'], () => ReactNode> = {
  about: () => <About data={portfolioConfig} />,
  experience: () => <Experience data={portfolioConfig.experience} />,
  focus: () => <CurrentFocus data={portfolioConfig.currentFocus} />,
  skills: () => <Skills data={portfolioConfig.skills} />,
  projects: () => <Projects data={portfolioConfig.projects} />,
  'ai-engineering': () => <AIEngineering data={portfolioConfig.aiEngineering} />,
  timeline: () => <Timeline data={portfolioConfig.timeline} />,
  education: () => <Education data={portfolioConfig.education} />,
  certifications: () => (
    <Certifications
      certifications={portfolioConfig.certifications}
      achievements={portfolioConfig.achievements}
    />
  ),
  contact: () => <Contact data={portfolioConfig} />,
};

/** Applies the configured accent color as a CSS custom property, tracking light/dark mode. */
function ThemeAccent() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const accent = resolvedTheme === 'dark'
      ? portfolioConfig.theme.accent.dark
      : portfolioConfig.theme.accent.light;
    document.documentElement.style.setProperty('--primary', accent);
  }, [resolvedTheme]);

  return null;
}

function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useKeyboardShortcuts();

  const enabledSections = portfolioConfig.sections.filter((s) => s.enabled);

  return (
    <ThemeProvider attribute="class" defaultTheme={portfolioConfig.theme.defaultMode} enableSystem>
      <ThemeAccent />
      <ScrollProgress />
      <Navbar onCommandPalette={() => setCommandPaletteOpen(true)} />

      <main className="flex flex-col min-h-screen">
        <Hero data={portfolioConfig} />
        {enabledSections.map((section) => (
          <Fragment key={section.id}>{sectionRenderers[section.id]()}</Fragment>
        ))}
      </main>

      <Footer data={portfolioConfig} />
      <CommandPalette open={commandPaletteOpen} setOpen={setCommandPaletteOpen} />
    </ThemeProvider>
  );
}

export default App;
