import type { FC } from 'react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600">
          Copyright &copy; {currentYear} Habtewold | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer; 