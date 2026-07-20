import { useEffect } from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export function useKeyboardShortcuts() {
  useEffect(() => {
    const githubUrl = portfolioConfig.social.find((s) => s.icon === 'github')?.url;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input or textarea
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      // G: Go to GitHub
      if (e.key.toLowerCase() === 'g' && !e.metaKey && !e.ctrlKey && githubUrl) {
        window.open(githubUrl, '_blank');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}
