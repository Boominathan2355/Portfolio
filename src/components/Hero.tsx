import { FC } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { PersonalData } from "../data/personalData";
import toast from "react-hot-toast";
import SocialIcons from "./SocialIcons";
import ImageWithFallback from "./ImageWithFallback";
import img1 from "../../public/profile.jpg"; // Adjust if needed

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
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background decorative circles */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-200/30 dark:bg-primary-900/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary-200/30 dark:bg-secondary-900/20 rounded-full filter blur-3xl"></div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-3 z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary-500">{data.name.split(" ")[0]}</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              {data.title}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
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
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl bg-gray-100">
              <ImageWithFallback
                src={img1}
                alt={data.name}
                className="w-full h-full object-cover"
              />
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
