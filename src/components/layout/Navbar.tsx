import { FC, useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, Sun, Moon, Download, Command } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '../../lib/utils';

interface NavbarProps {
  onCommandPalette: () => void;
}

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Contact', to: 'contact' },
];

const Navbar: FC<NavbarProps> = ({ onCommandPalette }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-200',
        scrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <ScrollLink to="hero" smooth duration={500} className="cursor-pointer">
            <span className="text-base font-semibold tracking-tight text-foreground">
              Boominathan<span className="text-primary">.</span>
            </span>
          </ScrollLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                spy
                smooth
                offset={-80}
                duration={500}
                activeClass="!text-foreground"
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {link.name}
              </ScrollLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Command Palette Trigger */}
            <button
              onClick={onCommandPalette}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs text-muted-foreground border border-border rounded-lg hover:bg-muted transition-colors"
              aria-label="Open command palette"
            >
              <Command size={12} />
              <span>⌘K</span>
            </button>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}



            {/* Mobile Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-slide-down">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                spy
                smooth
                offset={-80}
                duration={500}
                className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}
            <a
              href={`${import.meta.env.BASE_URL || '/'}Boominathan-A_AIDS.pdf`}
              download
              className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-foreground"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
