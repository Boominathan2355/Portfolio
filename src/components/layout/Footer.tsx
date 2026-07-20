import { FC } from 'react';
import { Github, Linkedin, Code2, Terminal } from 'lucide-react';
import { PortfolioConfig } from '../../config/portfolio.config';
import Container from './Container';

interface FooterProps {
  data: PortfolioConfig;
}

const iconMap: Record<string, FC<{ size: number; className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  code: Code2,
  terminal: Terminal,
};

const Footer: FC<FooterProps> = ({ data }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {year} {data.name}
          </p>

          <div className="flex items-center gap-4">
            {data.social.map((s) => {
              const Icon = iconMap[s.icon] || Code2;
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={s.name}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
