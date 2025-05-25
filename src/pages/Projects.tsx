import { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  image: string;
  link: string;
}

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      title: 'Gym App',
      image: '/src/images/gym.png',
      link: 'https://github.com/Nesrellah/GymmanagementV2'
    },
    {
      title: 'Bus management website',
      image: '/src/images/bus.png',
      link: 'https://github.com/deve1070/Bus-tracking-app'
    },
    {
      title: 'Shoool management website',
      image: '/src/images/school.png',
      link: 'https://github.com/BirukSe/School-Management-System'
    },
    {
      title: 'Weather of cities',
      image: '/src/images/pj1.png',
      link: 'https://github.com/Habtewold-D/weatherOf-Cities'
    },
    {
      title: 'Cloth shop website',
      image: '/src/images/cloth.png',
      link: 'https://github.com/Habtewold-D/ClothShop'
    },
    {
      
      title: 'Simple Calculator',
      image: '/src/images/pj2.png',
      link: 'https://github.com/Habtewold-D/simpleCalculator'
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-black mb-4">My Projects</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one represents a unique challenge and learning experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {!showAll && projects.length > 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowAll(true)}
            className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            See More Projects
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Projects; 