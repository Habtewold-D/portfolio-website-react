import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram, FaDownload, FaChevronDown } from 'react-icons/fa';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 bg-hero bg-fixed"
      />

      {/* Light gradient at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 dark:to-black"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <div className="glass-dark px-10 py-16 md:px-20 md:py-24 max-w-5xl mx-auto">
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow-pop">
              Hi, I'm <span className="text-orange-500">Habtewold Degfie</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 text-shadow-pop">
              <span className="text-orange-500">Full Stack Website & Application Developer</span>
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto text-base sm:text-lg text-shadow-pop">
              I create beautiful, user-friendly applications that connect people and ideas.
              Specializing in both frontend and backend development, I bring digital experiences to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Habtewold-Degfie-Resume.pdf"
              download="Habtewold-Degfie-Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
            >
              <FaDownload />
              Download Resume
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-6 pt-8"
          >
            {[
              { icon: FaGithub, href: "https://github.com/Habtewold-D" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/habtewold-degfie-972084379/" },
              { icon: FaTelegram, href: "https://t.me/habtsh1234" },
              { icon: FaInstagram, href: "https://www.instagram.com/habdeg21/" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.2, y: -5 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-orange-500 transition-colors"
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-sm font-light tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaChevronDown />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home; 