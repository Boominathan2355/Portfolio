import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from 'next-themes';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg border-b border-white/20 dark:border-gray-800/50 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <ScrollLink 
              to="home" 
              smooth={true} 
              duration={500} 
              className="flex items-center cursor-pointer group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg group-hover:scale-110 transition-transform">
                <img src="logo.svg" alt="Logo" className="w-6 h-6 invert" />
              </div>
              <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                Boominathan
              </span>
            </ScrollLink>
          </div>
          
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <ScrollLink
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="!text-primary-500 after:scale-x-100"
                    className="nav-link cursor-pointer relative py-2 px-3 text-sm font-medium transition-colors hover:text-primary-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-primary-500 after:transition-transform hover:after:scale-x-100"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="flex items-center gap-2 sm:gap-4 font-inter antialiased">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:ring-2 ring-primary-500 transition-all"
              aria-label="Toggle theme"
            >
              {mounted && (resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
            </button>

            {/* CV Download button - Hidden on very small screens */}
            <a
              href={`${import.meta.env.BASE_URL || '/'}Boominathan-A_AIDS.pdf`}
              download
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-lg transition-all shadow-md hover:shadow-primary-500/25"
            >
              <Download size={16} />
              <span>CV</span>
            </a>

            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-2xl border-b border-gray-200 dark:border-gray-800">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
                className="block px-4 py-3 rounded-xl text-base font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}
            <div className="pt-4 px-4">
              <a
                href={`${import.meta.env.BASE_URL || '/'}Boominathan-A_AIDS.pdf`}
                download
                className="flex items-center justify-center gap-2 w-full py-3 bg-primary-500 text-white rounded-xl font-bold shadow-lg shadow-primary-500/20"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </header>

  );
};

export default Navbar;