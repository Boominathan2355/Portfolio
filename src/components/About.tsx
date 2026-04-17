import { FC } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Cpu } from 'lucide-react';
import { PersonalData } from '../data/personalData';
import ImageWithFallback from './ImageWithFallback';

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-32 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-100/20 dark:bg-primary-900/10 rounded-full blur-3xl -translate-x-1/2 mt-24"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Image & Quick Stats */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="/working.jpg"
                  alt="Boominathan at work"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl glass border border-primary-500/20 shadow-lg text-center hover:scale-105 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 dark:text-white">Education</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">B.Tech AI & DS</p>
              </div>
              <div className="p-6 rounded-2xl glass border border-secondary-500/20 shadow-lg text-center hover:scale-105 transition-transform duration-300">
                <Cpu className="w-8 h-8 text-secondary-600 dark:text-secondary-400 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 dark:text-white">Focus</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Optimization</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio & Info Grid */}
          <motion.div 
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight text-gray-900 dark:text-white"
              variants={itemVariants}
            >
              Transforming <span className="text-primary-500">Data</span> into <span className="text-secondary-500">Intelligence</span>
            </motion.h2>

            <div className="space-y-6 mb-10 max-w-3xl">
              {Array.isArray(data.about) ? (
                data.about.map((paragraph, index) => (
                  <motion.p 
                    key={index}
                    className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-inter text-justify"
                    variants={itemVariants}
                  >
                    {paragraph}
                  </motion.p>
                ))
              ) : (
                <motion.p 
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-inter text-justify"
                  variants={itemVariants}
                >
                  {data.about}
                </motion.p>
              )}
            </div>

            {/* Info Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4 p-6 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 max-w-2xl"
              variants={itemVariants}
            >
              {[
                { label: 'Name', value: data.name },
                { label: 'Email', value: data.email, link: `mailto:${data.email}` },
                { label: 'Phone', value: data.phone, link: `tel:${data.phone}` },
                { label: 'Location', value: data.location },
              ].map((info) => (
                <div key={info.label}>
                  <p className="text-[10px] font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
                    {info.label}
                  </p>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary-500 transition-colors break-words"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-gray-900 dark:text-white break-words">
                      {info.value}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default About;