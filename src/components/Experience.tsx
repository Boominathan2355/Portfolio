import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Experience as ExperienceType } from '../data/personalData';

interface ExperienceProps {
  data: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          {data.map((experience, index) => (
            <motion.div 
              key={experience.role + experience.company}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="card">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Briefcase className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                      {experience.role}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mt-1">
                      {experience.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-1 mb-3">
                      {experience.duration}
                    </p>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                      {experience.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {data.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600 dark:text-gray-400">No experience data available.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;