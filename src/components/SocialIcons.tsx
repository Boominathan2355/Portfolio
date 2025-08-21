import React from 'react';
import { 
  Github, Linkedin, Code2, Terminal, 
  Facebook, Twitter, Instagram, Youtube 
} from 'lucide-react';
import { SocialLink } from '../data/personalData';

interface SocialIconsProps {
  social: SocialLink[];
}

const SocialIcons: React.FC<SocialIconsProps> = ({ social }) => {
  // Map icon names to Lucide React components
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'code':
        return <Code2 className="h-5 w-5" />;
      case 'terminal':
        return <Terminal className="h-5 w-5" />;
      case 'facebook':
        return <Facebook className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'instagram':
        return <Instagram className="h-5 w-5" />;
      case 'youtube':
        return <Youtube className="h-5 w-5" />;
      default:
        return <Code2 className="h-5 w-5" />;
    }
  };

  return (
    <div className="flex space-x-4">
      {social.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={item.name}
        >
          {getIcon(item.icon)}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;