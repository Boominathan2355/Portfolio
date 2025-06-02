import { FC } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Cpu, Lightbulb } from 'lucide-react';
import { PersonalData } from '../data/personalData';
import ImageWithFallback from './ImageWithFallback';
import image from '../../public/working.jpg'; // Adjust the path as necessary

interface AboutProps {
  data: PersonalData;
}

const About: FC<AboutProps> = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl bg-gray-100">
              <ImageWithFallback 
                src={`${image}`}
                alt="Working on computer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-6"
              variants={itemVariants}
            >
              {data.about}
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center p-5 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-3">
                  <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Education</h3>
                <p className="text-center text-gray-600 dark:text-gray-400">B.Tech in AI & Data Science</p>
              </div>

              <div className="flex flex-col items-center p-5 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="w-12 h-12 rounded-full bg-secondary-100 dark:bg-secondary-900 flex items-center justify-center mb-3">
                  <Cpu className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Experience</h3>
                <p className="text-center text-gray-600 dark:text-gray-400">Database Optimization</p>
              </div>

              <div className="flex flex-col items-center p-5 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="w-12 h-12 rounded-full bg-accent-100 dark:bg-accent-900 flex items-center justify-center mb-3">
                  <Lightbulb className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Interests</h3>
                <p className="text-center text-gray-600 dark:text-gray-400">IoT, ML, Full Stack</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-3">Personal Info</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Name:</p>
                  <p className="font-medium">{data.name}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Email:</p>
                  <p className="font-medium">{data.email}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Phone:</p>
                  <p className="font-medium">{data.phone}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Location:</p>
                  <p className="font-medium">{data.location}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;