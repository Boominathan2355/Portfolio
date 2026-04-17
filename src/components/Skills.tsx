import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../data/personalData';


interface SkillsProps {
  data: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  const categories = Array.from(new Set(data.map((skill) => skill.category)));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        
        <div className="space-y-12">
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  {category.charAt(0)}
                </span>
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="group p-4 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-500">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                          className="skill-progress bg-primary-500"
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

};

export default Skills;