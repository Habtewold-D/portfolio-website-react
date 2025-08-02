import type { FC } from 'react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: FC<FooterProps> = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-900 border-gray-700' 
        : 'bg-white border-gray-200'
    } py-6`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className={`transition-colors duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Copyright &copy; {currentYear} Habtewold | All rights reserved
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer; 