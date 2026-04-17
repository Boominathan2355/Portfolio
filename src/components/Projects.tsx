import { FC } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/personalData';
import ImageWithFallback from './ImageWithFallback';
import ErrorBoundary from './ErrorBoundary';



interface ProjectsProps {
  data: Project[];
}

const ProjectCard: FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <ErrorBoundary>
      <motion.div
        className="group relative rounded-2xl overflow-hidden glass border border-white/20 dark:border-gray-800/50 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {/* Project Image Container */}
        <div className="relative h-64 overflow-hidden">
          <ImageWithFallback 
            src={project.image || `/projects/project-${index + 1}.jpg`}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
            <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/40 transition-all"
                  title="View Live Demo"
                >
                  <ExternalLink size={20} />
                </a>
              )}
              <a 
                href="https://github.com/Boominathan2355"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all"
                title="View Source Code"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Project Info */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-medium px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              {project.date.split(' ')[0]}
            </span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-6">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span 
                key={tech} 
                className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-primary-100 dark:border-primary-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </ErrorBoundary>
  );
};


const Projects: FC<ProjectsProps> = ({ data }) => {
  return (
    <section id="projects" className="py-32 bg-gray-50 dark:bg-gray-950 relative">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <motion.h2 
            className="section-title !mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A curated selection of my technical work, ranging from AI applications to IoT systems.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects;