import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-4xl font-black tracking-wider text-black font-logo">
              Habtewold
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" isActive={location.pathname === '/'} />
            <NavLink to="/about" label="About" isActive={location.pathname === '/about'} />
            <NavLink to="/projects" label="Projects" isActive={location.pathname === '/projects'} />
            <NavLink to="/contact" label="Contact" isActive={location.pathname === '/contact'} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black hover:text-orange-500 focus:outline-none"
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

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <MobileNavLink to="/" label="Home" isActive={location.pathname === '/'} onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink to="/about" label="About" isActive={location.pathname === '/about'} onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink to="/projects" label="Projects" isActive={location.pathname === '/projects'} onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink to="/contact" label="Contact" isActive={location.pathname === '/contact'} onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      </motion.div>
    </motion.nav>
  );
};

const NavLink = ({ to, label, isActive }: { to: string; label: string; isActive: boolean }) => (
  <Link
    to={to}
    className={`transition-colors font-medium ${
      isActive ? 'text-orange-500' : 'text-black hover:text-orange-500'
    }`}
  >
    {label}
  </Link>
);

const MobileNavLink = ({
  to,
  label,
  isActive,
  onClick,
}: {
  to: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block px-3 py-2 transition-colors font-medium ${
      isActive ? 'text-orange-500' : 'text-black hover:text-orange-500'
    }`}
  >
    {label}
  </Link>
);

export default Navbar; 