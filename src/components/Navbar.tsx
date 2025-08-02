import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import type { FC } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navbar: FC<NavbarProps> = ({ isDarkMode, setIsDarkMode, activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? isDarkMode 
            ? 'bg-gray-900 shadow-2xl border-b border-gray-700' 
            : 'bg-white shadow-2xl border-b border-gray-200'
          : isDarkMode 
            ? 'bg-gray-900 shadow-lg' 
            : 'bg-white shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <span className={`text-3xl font-black tracking-wider ${
              isDarkMode 
                ? 'bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent'
            }`}>
              Habtewold
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                label={item.label}
                isActive={activeSection === item.id}
                onClick={() => scrollToSection(item.id)}
                isDarkMode={isDarkMode}
              />
            ))}
            
            {/* Divider */}
            <div className={`w-px h-6 mx-2 ${
              isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
            }`}></div>
            
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 hover:shadow-lg' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-lg'
              }`}
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Theme Toggle for Mobile */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 text-yellow-400' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {isDarkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
            </motion.button>
            
            <button
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDarkMode 
                  ? 'text-white hover:bg-gray-800' 
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden"
      >
        <div className={`px-4 pt-2 pb-4 space-y-1 border-t ${
          isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          {navItems.map((item) => (
            <MobileNavLink
              key={item.id}
              label={item.label}
              isActive={activeSection === item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsMobileMenuOpen(false);
              }}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

const NavLink = ({ 
  label, 
  isActive, 
  onClick, 
  isDarkMode 
}: { 
  label: string; 
  isActive: boolean; 
  onClick: () => void;
  isDarkMode: boolean;
}) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`transition-all duration-300 font-semibold px-4 py-2 rounded-xl ${
      isActive 
        ? isDarkMode
          ? 'text-orange-400 bg-orange-400/10 border border-orange-400/20'
          : 'text-orange-500 bg-orange-500/10 border border-orange-500/20'
        : isDarkMode
          ? 'text-gray-300 hover:text-white hover:bg-gray-800'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
    }`}
  >
    {label}
  </motion.button>
);

const MobileNavLink = ({
  label,
  isActive,
  onClick,
  isDarkMode,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
  isDarkMode: boolean;
}) => (
  <motion.button
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-semibold ${
      isActive 
        ? isDarkMode
          ? 'text-orange-400 bg-orange-400/10 border border-orange-400/20'
          : 'text-orange-500 bg-orange-500/10 border border-orange-500/20'
        : isDarkMode
          ? 'text-gray-300 hover:text-white hover:bg-gray-800'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
    }`}
  >
    {label}
  </motion.button>
);

export default Navbar; 