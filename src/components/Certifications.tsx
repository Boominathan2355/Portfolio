import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Certification } from '../data/personalData';

interface CertificationsProps {
  data: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ data }) => {
  return (
    <section id="certifications\" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {data.map((cert, index) => (
            <motion.div
              key={cert.name}
              className="card hover:scale-[1.03] transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0 mr-4">
                  <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                    {cert.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {cert.date}
                  </p>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Achievements</h3>
          <div className="max-w-3xl mx-auto">
            {/* If there are achievements, display them */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                First Prize in Metaverse Debugging & Code Design Efficiency
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                October 2024
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;