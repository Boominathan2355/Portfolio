import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Certification, Achievement } from '../data/personalData';

interface CertificationsProps {
  certifications: Certification[];
  achievements: Achievement[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications, achievements }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="certifications" className="py-32 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 dark:bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Certifications & Awards
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Professional recognitions and technical milestones achieved throughout my journey.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              className="group p-8 rounded-3xl glass border border-white/20 dark:border-gray-800/50 shadow-xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                  {cert.date}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                {cert.name}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm mb-6">
                {cert.issuer}
              </p>
              
              {cert.link && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white border-b-2 border-primary-500/30 hover:border-primary-500 transition-all pb-1"
                >
                  Verify Certificate
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {achievements.length > 0 && (
          <motion.div 
            className="mt-32"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-6 mb-12">
              <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">Achievements</h3>
              <div className="h-1 flex-grow bg-gradient-to-r from-gray-200 dark:from-gray-800 to-transparent rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 flex items-start gap-4 hover:border-secondary-500/30 transition-all group"
                >
                  <div className="w-2 h-12 bg-secondary-500 rounded-full shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-secondary-500 transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 mt-1 font-medium italic">
                      {achievement.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};


export default Certifications;