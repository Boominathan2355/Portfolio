import { useEffect } from 'react';
import { Command } from 'cmdk';
import { useTheme } from 'next-themes';
import { Moon, Sun, Download, Monitor, User, Briefcase, FileCode2, Terminal, Code2, Mail } from 'lucide-react';
import { scroller } from 'react-scroll';

interface CommandPaletteProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function CommandPalette({ open, setOpen }: CommandPaletteProps) {
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, setOpen]);

  const scrollTo = (section: string) => {
    setOpen(false);
    scroller.scrollTo(section, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -80, // Adjust this based on your navbar height
    });
  };

  const handleDownloadResume = () => {
    setOpen(false);
    const link = document.createElement('a');
    link.href = '/Boominathan-A_AIDS.pdf';
    link.download = 'Boominathan-A_AIDS.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] sm:pt-[20vh] bg-background/80 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div 
        className="w-[90vw] max-w-[640px] rounded-xl border border-border bg-background shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <Command.Input 
          placeholder="Type a command or search..." 
          className="w-full border-b border-border bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground text-foreground"
        />
        
        <Command.List className="max-h-[300px] overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            <Command.Item onSelect={() => scrollTo('hero')} className="flex items-center gap-2 px-2 py-2 text-sm rounded-md cursor-pointer hover:bg-muted text-foreground aria-selected:bg-muted">
              <User size={14} /> Home
            </Command.Item>
            <Command.Item onSelect={() => scrollTo('about')} className="flex items-center gap-2 px-2 py-2 text-sm rounded-md cursor-pointer hover:bg-muted text-foreground aria-selected:bg-muted">
              <User size={14} /> About
            </Command.Item>
            <Command.Item onSelect={() => scrollTo('experience')} className="flex items-center gap-2 px-2 py-2 text-sm rounded-md cursor-pointer hover:bg-muted text-foreground aria-selected:bg-muted">
              <Briefcase size={14} /> Experience
            </Command.Item>
            <Command.Item onSelect={() => scrollTo('projects')} className="flex items-center gap-2 px-2 py-2 text-sm rounded-md cursor-pointer hover:bg-muted text-foreground aria-selected:bg-muted">
              <FileCode2 size={14} /> Projects
            </Command.Item>
            <Command.Item onSelect={() => scrollTo('skills')} className="flex items-center gap-2 px-2 py-2 text-sm rounded-md cursor-pointer hover:bg-muted text-foreground aria-selected:bg-muted">
              <Code2 size={14} /> Skills
            </Command.Item>
             <Command.Item onSelect={() => scrollTo('contact')} className="flex items-center gap-2 px-2 py-2 text-sm rounded-md cursor-pointer hover:bg-muted text-foreground aria-selected:bg-muted">
              <Mail size={14} /> Contact
            </Command.Item>
          </Command.Group>

          <Command.Separator className="h-px bg-border my-1" />

          <Command.Group heading="Theme" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            <Command.Item onSelect={() => { setTheme('light'); setOpen(false); }} className="flex items-center gap-2 px-2 py-2 text-sm rounded-md cursor-pointer hover:bg-muted text-foreground aria-selected:bg-muted">
              <Sun size={14} /> Light
            </Command.Item>
            <Command.Item onSelect={() => { setTheme('dark'); setOpen(false); }} className="flex items-center gap-2 px-2 py-2 text-sm rounded-md cursor-pointer hover:bg-muted text-foreground aria-selected:bg-muted">
              <Moon size={14} /> Dark
            </Command.Item>
            <Command.Item onSelect={() => { setTheme('system'); setOpen(false); }} className="flex items-center gap-2 px-2 py-2 text-sm rounded-md cursor-pointer hover:bg-muted text-foreground aria-selected:bg-muted">
              <Monitor size={14} /> System
            </Command.Item>
          </Command.Group>

           <Command.Separator className="h-px bg-border my-1" />

          <Command.Group heading="Actions" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
             <Command.Item onSelect={handleDownloadResume} className="flex items-center gap-2 px-2 py-2 text-sm rounded-md cursor-pointer hover:bg-muted text-foreground aria-selected:bg-muted">
              <Download size={14} /> Download Resume
            </Command.Item>
             <Command.Item onSelect={() => { window.open('https://github.com/Boominathan2355', '_blank'); setOpen(false); }} className="flex items-center gap-2 px-2 py-2 text-sm rounded-md cursor-pointer hover:bg-muted text-foreground aria-selected:bg-muted">
              <Terminal size={14} /> View GitHub
            </Command.Item>
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
}
