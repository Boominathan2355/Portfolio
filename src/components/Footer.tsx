import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { PersonalData } from '../data/personalData';
import SocialIcons from './SocialIcons';

interface FooterProps {
  data: PersonalData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <ScrollLink
            to="home"
            smooth={true}
            duration={800}
            className="p-3 bg-primary-500 hover:bg-primary-600 rounded-full mb-6 cursor-pointer transition-colors duration-300"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </ScrollLink>
          
          <h2 className="text-2xl font-bold mb-4">{data.name}</h2>
          
          <p className="text-gray-400 mb-6 text-center max-w-lg">
            A passionate AI & Data Science student focused on creating innovative technological solutions.
          </p>
          
          <SocialIcons social={data.social} />
          
          <div className="w-full max-w-xl border-t border-gray-700 my-8"></div>
          
          <p className="text-gray-400 text-center text-sm">
            &copy; {new Date().getFullYear()} {data.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;