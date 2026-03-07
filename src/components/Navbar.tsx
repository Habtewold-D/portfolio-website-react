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
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
        ? 'py-3 glass shadow-2xl'
        : 'py-5 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <span className={`text-3xl font-black tracking-tighter transition-all duration-300 ${isScrolled
              ? 'text-gradient'
              : 'text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]'
              }`}>
              Habtewold
            </span>
            <div className={`ml-1 w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-all ${isScrolled ? 'block' : 'hidden'}`}></div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className={`flex items-center p-1 rounded-2xl transition-all duration-300 ${isScrolled ? 'bg-black/5 dark:bg-white/5' : ''}`}>
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  label={item.label}
                  isActive={activeSection === item.id}
                  onClick={() => scrollToSection(item.id)}
                  isDarkMode={isDarkMode}
                  isScrolled={isScrolled}
                />
              ))}
            </div>

            <div className="flex items-center gap-4 ml-4">
              <div className={`w-px h-8 ${isScrolled ? 'bg-gray-300 dark:bg-gray-700' : 'bg-white/20'}`}></div>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-3 rounded-2xl transition-all duration-300 ${isScrolled
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400'
                  : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
              >
                {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-xl transition-all duration-300 ${isScrolled
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400'
                : 'bg-white/10 text-white'
                }`}
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </motion.button>

            <button
              className={`p-2 rounded-xl transition-all duration-300 ${isScrolled
                ? 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                : 'text-white hover:bg-white/10'
                }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-7 w-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
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
        animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden glass"
      >
        <div className="px-6 pt-4 pb-8 space-y-2">
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
  isDarkMode,
  isScrolled
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
  isDarkMode: boolean;
  isScrolled: boolean;
}) => (
  <motion.button
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`relative px-6 py-2.5 rounded-xl font-bold transition-all duration-300 ${isActive
      ? isScrolled
        ? 'text-orange-500 bg-orange-500/10'
        : 'text-white bg-white/20'
      : isScrolled
        ? 'text-gray-500 dark:text-gray-400 hover:text-orange-500'
        : 'text-white/70 hover:text-white'
      }`}
  >
    {label}
    {isActive && (
      <motion.div
        layoutId="activeTab"
        className={`absolute bottom-1 left-6 right-6 h-0.5 rounded-full ${isScrolled ? 'bg-orange-500' : 'bg-white'
          }`}
      />
    )}
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
    className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-semibold ${isActive
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