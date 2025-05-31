import React, { useState, useEffect, Suspense } from 'react';
import { personalData } from './data/personalData';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';

// Lazy load components
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Education = React.lazy(() => import('./components/Education'));
const Experience = React.lazy(() => import('./components/Experience'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <main>
            <Hero data={personalData} />
            <About data={personalData} />
            <Skills data={personalData.skills} />
            <Projects data={personalData.projects} />
            <Education data={personalData.education} />
            <Experience data={personalData.experience} />
            <Certifications data={personalData.certifications} />
            <Contact data={personalData} />
          </main>
          <Footer data={personalData} />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;