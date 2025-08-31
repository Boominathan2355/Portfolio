import { FC } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/personalData';
import ImageWithFallback from './ImageWithFallback';
import ErrorBoundary from './ErrorBoundary';



interface ProjectsProps {
  data: Project[];
}

const ProjectCard: FC<{ project: Project; index: number }> = ({ project, index }) => (
  <ErrorBoundary>
    <motion.div
      className="project-card overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-48 relative overflow-hidden">
        <ImageWithFallback 
          src={`./public/projects/project-${index + 1}.jpg`}
          alt={`${project.title} project screenshot`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h3 className="text-white font-semibold text-xl p-4">{project.title}</h3>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{project.date}</p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span 
              key={tech} 
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-end space-x-2">
          {project.link && (
            <a 
              href={project.link}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${project.title} project`}
              aria-label={`Visit ${project.title} project`}
            >
              <ExternalLink size={18} />
            </a>
          )}
          
          <a 
            href="https://github.com/Boominathan2355"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            title={`View ${project.title} source code on GitHub`}
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  </ErrorBoundary>
);

const Projects: FC<ProjectsProps> = ({ data }) => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;