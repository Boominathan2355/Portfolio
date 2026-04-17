import { FC } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { Download, ChevronDown, Sparkles } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { PersonalData } from "../data/personalData";
import toast from "react-hot-toast";
import SocialIcons from "./SocialIcons";
import ImageWithFallback from "./ImageWithFallback";

interface HeroProps {
  data: PersonalData;
}

const Hero: FC<HeroProps> = ({ data }) => {
  // Function to handle resume download with file check
  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    try {
      // Get the base URL from Vite's import.meta.env
      const baseUrl = import.meta.env.BASE_URL || '/';
      const resumePath = `${baseUrl}Boominathan-A_AIDS.pdf`.replace('//', '/');
      
      const response = await fetch(resumePath, { method: "HEAD" });

      if (response.ok) {
        // If file exists, open in new window to trigger download
        window.open(resumePath, '_blank');
        toast.success('Resume download started!', {
          duration: 3000,
          position: 'bottom-right',
        });
      } else {
        console.error('Resume file not found');
        toast.error('Resume is temporarily unavailable. Please check back later.', {
          duration: 4000,
          position: 'bottom-right',
        });
      }
    } catch (error) {
      console.error('Error downloading resume:', error);
      toast.error('Unable to download resume. Please try again later.', {
        duration: 4000,
        position: 'bottom-right',
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white dark:bg-gray-950 relative overflow-hidden pt-16"
    >
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-300 dark:bg-primary-900/30 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary-300 dark:bg-secondary-900/30 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-300 dark:bg-accent-900/30 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent)] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(29,78,216,0.15),transparent)]"></div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-3 z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-6 border border-primary-200 dark:border-primary-800"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>Available for New Opportunities</span>
            </motion.div>


            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-200">{data.name.split(" ")[0]}</span>
            </h1>
            
            <div className="h-12 sm:h-16 mb-6">
              <TypeAnimation
                sequence={[
                  'AI & Data Science Student',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'IoT Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200"
                repeat={Infinity}
              />
            </div>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">
              {data.bio}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {/* Resume Download */}
              <a
                href={`${import.meta.env.BASE_URL || '/'}Boominathan-A_AIDS.pdf`}
                onClick={handleDownload}
                className="btn-primary flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer"
              >
                <Download size={18} />
                Download CV
              </a>

              {/* Contact Me Scroll */}
              <ScrollLink
                to="contact"
                smooth={true}
                duration={800}
                className="px-6 py-2.5 border-2 border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-500 text-gray-800 dark:text-gray-200 rounded-md transition-all duration-300 font-medium cursor-pointer"
              >
                Contact Me
              </ScrollLink>
            </div>

            {/* Social Icons */}
            <SocialIcons social={data.social} />
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:col-span-2 flex justify-center lg:justify-end z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-900 shadow-2xl bg-gray-100 dark:bg-gray-800 transition-transform duration-500 group-hover:scale-[1.02]">
                <ImageWithFallback
                  src="/profile.jpg"
                  alt={data.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex items-center justify-center border border-gray-100 dark:border-gray-700 animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">10+</div>
                  <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Projects</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ScrollLink to="about" smooth={true} duration={800} className="cursor-pointer">
            <ChevronDown className="w-8 h-8 text-primary-500" />
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
