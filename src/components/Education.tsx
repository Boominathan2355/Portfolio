import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Education as EducationType } from '../data/personalData';

interface EducationProps {
  data: EducationType[];
}

const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <section id="education" className="py-32 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100/20 dark:bg-secondary-900/10 rounded-full blur-3xl -ml-48"></div>

      <div className="section-container relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Educational Background
        </motion.h2>
        
        <div className="max-w-4xl mx-auto mt-16 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary-500/50 via-gray-200 dark:via-gray-800 to-transparent -translate-x-1/2 ml-4 md:ml-0 hidden sm:block"></div>

          <div className="space-y-12">
            {data.map((education, index) => (
              <motion.div 
                key={education.degree}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 !== 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-secondary-500 border-4 border-white dark:border-gray-900 shadow-lg shadow-secondary-500/50 -translate-x-1/2 z-20 hidden sm:block"></div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${
                  index % 2 !== 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="card !p-8 group hover:border-secondary-500/30 transition-all duration-300 text-left">
                    <div className="flex items-center gap-4 mb-4 flex-row">
                      <div className="p-3 rounded-xl bg-secondary-50 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 group-hover:scale-110 transition-transform">
                        <GraduationCap size={24} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-secondary-600 dark:text-secondary-400 uppercase tracking-widest">
                          {education.duration}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                          {education.degree}
                        </h3>
                      </div>
                    </div>

                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {education.institution}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 justify-start">
                      <span>Score:</span>
                      <span>{education.score}</span>
                    </div>
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


export default Education;