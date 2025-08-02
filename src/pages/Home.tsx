import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram, FaDownload } from 'react-icons/fa';

interface HomeProps {
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ isDarkMode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Hi, I'm <span className="text-orange-500">Habtewold Degfie</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
            <span className="text-orange-500">Full Stack Website & Application Developer</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            I create beautiful, user-friendly applications that connect people and ideas.
            Specializing in both frontend and backend development, I bring digital experiences to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Habtewold-Degfie-Resume.pdf"
            download="Habtewold-Degfie-Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
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
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://github.com/Habtewold-D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://www.linkedin.com/in/habtewold-degfie-396041339/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://t.me/habtsh1234"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
          >
            <FaTelegram />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://www.instagram.com/habdeg21/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
          >
            <FaInstagram />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 