import { FC } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, ArrowDown } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { PersonalData } from '../../data/personalData';
import Container from '../layout/Container';

interface HeroProps {
  data: PersonalData;
}

const Hero: FC<HeroProps> = ({ data }) => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center pt-16 relative">
      <Container>
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="shrink-0"
            >
            <img 
              src={`${import.meta.env.BASE_URL || '/'}profile.jpg`}
              alt={`${data.name} Profile`} 
              fetchPriority="high"
              decoding="sync"
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl ring-4 ring-background border border-border/20"
            />
          </motion.div>

            {/* Content */}
            <div className="flex-1">
              {/* Status */}
              <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="chip chip-primary text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse" />
              Currently at DevOpsLabs India
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {data.name}
          </motion.h1>

          {/* Headline */}
          <motion.p
            className="mt-4 text-lg sm:text-xl text-muted-foreground font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {data.headline}
          </motion.p>

          {/* Bio */}
          <motion.p
            className="mt-6 text-base text-muted-foreground leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {data.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href={`${import.meta.env.BASE_URL || '/'}Boominathan-A_AIDS.pdf`}
              download
              aria-label="Download Boominathan's Resume PDF"
              className="btn-primary"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href={data.social.find(s => s.icon === 'github')?.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Boominathan's GitHub Profile"
              className="btn-secondary"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={data.social.find(s => s.icon === 'linkedin')?.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Boominathan's LinkedIn Profile"
              className="btn-secondary"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </motion.div>

            </div>
          </div>

        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <ScrollLink to="about" smooth duration={800} className="cursor-pointer inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown size={14} className="animate-bounce" />
          <span>Scroll to explore</span>
        </ScrollLink>
      </motion.div>
    </section>
  );
};

export default Hero;
