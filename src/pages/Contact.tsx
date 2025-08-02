import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheck, FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import type { FC, FormEvent, ChangeEvent } from 'react';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: FC<ContactProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    // Get EmailJS credentials from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if environment variables are set
    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus('error');
      setStatusMessage('Email configuration is missing. Please check your environment variables.');
      setIsLoading(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        e.currentTarget,
        publicKey
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setStatusMessage('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again or contact me directly.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className={`p-8 rounded-2xl shadow-lg ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                  <FaPhone className="text-orange-500 text-xl" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Phone Number</p>
                  <p className="font-medium">+251 906624739</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-orange-500 text-xl" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Email Address</p>
                  <p className="font-medium">habtewold21degfie@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-orange-500 text-xl" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Location</p>
                  <p className="font-medium">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-8 rounded-2xl shadow-lg ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="flex justify-center gap-6">
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://github.com/Habtewold-D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://www.linkedin.com/in/habtewold-degfie-396041339/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://t.me/habtsh1234"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
              >
                <FaTelegram className="text-xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://www.instagram.com/habdeg21/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
              >
                <FaInstagram className="text-xl" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className={`p-8 rounded-2xl shadow-lg space-y-6 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            {/* Status Message */}
            {submitStatus !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus === 'success'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                }`}
              >
                {submitStatus === 'success' ? (
                  <FaCheck className="text-green-600 dark:text-green-400" />
                ) : (
                  <FaTimes className="text-red-600 dark:text-red-400" />
                )}
                <span className="text-sm font-medium">{statusMessage}</span>
              </motion.div>
            )}

            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                placeholder="Enter your full name"
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                placeholder="Enter your email address"
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                placeholder="Enter subject"
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                placeholder="Enter your message"
                required
                disabled={isLoading}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-6 rounded-lg transition-colors font-medium flex items-center justify-center gap-2 ${
                isLoading
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  : 'bg-orange-500 text-white hover:bg-orange-600'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 