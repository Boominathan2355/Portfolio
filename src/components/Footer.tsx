import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { PersonalData } from '../data/personalData';
import SocialIcons from './SocialIcons';

interface FooterProps {
  data: PersonalData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-12">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {data.name.split(' ')[0]}<span className="text-primary-500">.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
              Building the future with AI, Data Science, and innovative software solutions.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center flex-wrap gap-4">
            <SocialIcons social={data.social} />
          </div>

          {/* Back to Top */}
          <div className="flex justify-center md:justify-end">
            <ScrollLink
              to="home"
              smooth={true}
              duration={800}
              className="p-4 rounded-2xl glass border border-white/20 dark:border-gray-800/50 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-all cursor-pointer group shadow-lg"
              title="Back to top"
            >
              <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            </ScrollLink>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
          <p>© {currentYear} {data.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 translate-y-[-2px]">
            Designed with <span className="text-red-500 text-lg">♥</span> for Innovation
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;