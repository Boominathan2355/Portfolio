import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Experience as ExperienceType } from '../data/personalData';

interface ExperienceProps {
  data: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  if (data.length === 0) {
    return (
      <section id="experience" className="py-20 bg-white dark:bg-gray-950">
        <div className="section-container text-center">
          <p className="text-gray-600 dark:text-gray-400">No experience data available.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-32 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-100/20 dark:bg-primary-900/10 rounded-full blur-3xl -mr-48"></div>

      <div className="section-container relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        
        <div className="max-w-4xl mx-auto mt-16 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500/50 via-gray-200 dark:via-gray-800 to-transparent -translate-x-1/2 ml-4 md:ml-0 hidden sm:block"></div>

          <div className="space-y-12">
            {data.map((experience, index) => (
              <motion.div 
                key={experience.role + experience.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900 shadow-lg shadow-primary-500/50 -translate-x-1/2 z-20 hidden sm:block"></div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="card !p-8 group hover:border-primary-500/30 transition-all duration-300 text-left">
                    <div className="flex items-center gap-4 mb-4 flex-row">
                      <div className="p-3 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
                          {experience.duration}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                          {experience.role}
                        </h3>
                      </div>
                    </div>

                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                      {experience.company}
                    </p>

                    <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 flex-row text-left">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for MD screens */}
                <div className="hidden md:block w-[10%]"></div>
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Experience;