import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram, FaDownload } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1 className="text-5xl md:text-6xl font-bold text-black">
            Hi, I'm <span className="text-black-500">Habtewold Degfie</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700">
          <span className="text-orange-500">Full Stack Website & Application Developer</span>
            
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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
          <a
            href="/resume.pdf"
            download="Habtewold-Degfie-Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            <FaDownload />
            Download Resume
          </a>
          <Link
            to="/contact"
            className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-6 pt-8"
        >
          <a
            href="https://github.com/Habtewold-D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-orange-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/habtewold-degfie-396041339/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-orange-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://t.me/habtsh1234"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-orange-500 transition-colors"
          >
            <FaTelegram />
          </a>
          <a
            href="https://www.instagram.com/habdeg21/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-orange-500 transition-colors"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 