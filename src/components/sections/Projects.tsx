import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import Section from '../layout/Section';
import { Project, portfolioConfig } from '../../config/portfolio.config';
import { cn } from '../../lib/utils';

interface ProjectsProps {
  data: Project[];
}

const typeLabels: Record<string, string> = {
  enterprise: 'Enterprise',
  ai: 'AI',
  research: 'Research',
  academic: 'Academic',
  personal: 'Personal',
};

const filterOptions = ['All', 'Enterprise', 'AI', 'Research', 'Academic', 'Personal'];

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="card card-hover">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="chip text-[10px] font-semibold uppercase">{typeLabels[project.type]}</span>
          <span className="text-xs text-muted-foreground">{project.date}</span>
        </div>
        <div className="flex items-center gap-1">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={14} />
            </a>
          )}
          <a
            href={project.github || portfolioConfig.social.find((s) => s.icon === 'github')?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
            aria-label="View on GitHub"
          >
            <Github size={14} />
          </a>
        </div>
      </div>

      <h3 className="text-base font-semibold text-foreground mb-2">{project.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-1">
        <span className="font-medium text-foreground/80">Problem: </span>
        {project.problem}
      </p>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              {project.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        className="mt-2 text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
      >
        {expanded ? (
          <><ChevronUp size={12} /> Show less</>
        ) : (
          <><ChevronDown size={12} /> Show more</>
        )}
      </button>

      <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
        {project.technologies.map((tech) => (
          <span key={tech} className="chip text-[10px]">{tech}</span>
        ))}
      </div>
    </article>
  );
};

const Projects: FC<ProjectsProps> = ({ data }) => {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? data
    : data.filter((p) => typeLabels[p.type] === filter);

  return (
    <Section id="projects" title="Projects" subtitle="Technical work across enterprise, AI, and research domains.">
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filterOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => setFilter(opt)}
            className={cn(
              'chip cursor-pointer transition-all',
              filter === opt && 'chip-primary border-primary/30'
            )}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filtered.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
