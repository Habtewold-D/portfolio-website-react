import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMobile, FaGlobe, FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface ProjectsProps {
  isDarkMode: boolean;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'mobile' | 'website';
  technologies: string[];
  githubLink: string;
  liveLink?: string;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'mobile' | 'website'>('all');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<string>>(new Set());

  const projects: Project[] = [
    {
      id: 'tour-app',
      title: 'Tour Booking App',
      description: 'Built a tour booking app using Flutter and Firebase with real payment integration (Chapa, SantimPay). Features include tour package browsing/purchase, in-app and push notifications (Firebase), and dashboards for companies and admins. Admin panel is available on both mobile and web with full feature parity.',
      image: '/images/tourapp.jpg',
      category: 'mobile',
      technologies: ['Flutter', 'Firebase', 'Chapa', 'SantimPay', 'Push Notifications', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/Habtewold-D/Tour-App-Flutter'
    },
    {
      id: 'gym-app',
      title: 'Gym Management App',
      description: 'Developed a Gym Management Application for Android using Kotlin and Jetpack Compose. The app enables gym staff to manage members efficiently by assigning personalized workout plans, listing upcoming gym events, tracking trainee progress, and viewing detailed member profiles. Focused on building an intuitive user interface and implementing core functionalities to support gym operations digitally.',
      image: '/images/gymapp.jpg',
      category: 'mobile',
      technologies: ['Kotlin', 'Jetpack Compose', 'Android', 'MySQL'],
      githubLink: 'https://github.com/Nesrellah/GymmanagementV2'
    },
    {
      id: 'chat-app',
      title: 'Chat App',
      description: 'Built a real-time chat application using Flutter (frontend) and Node.js with Socket.IO (backend). The app supports sending text and image messages, with core chat features including edit, delete, reply, and forward.',
      image: '/images/chatapp.jpg',
      category: 'mobile',
      technologies: ['Flutter', 'Node.js', 'Socket.io'],
      githubLink: 'https://github.com/Habtewold-D/Chat-App-Flutter'
    },
    {
      id: 'cloth-shop',
      title: 'E-Commerce Clothing Store',
      description: 'A comprehensive e-commerce website for clothing with complete product catalog featuring category filtering, and advanced product search functionality. The website provides detailed product information with multiple images and descriptions, responsive design for all devices.',
      image: '/images/cloth.png',
      category: 'website',
      technologies: ['React', 'Express', 'MongoDB', 'Mongoose', 'Multer'],
      githubLink: 'https://github.com/Habtewold-D/ClothShop',
      liveLink: 'https://www.bernosdesign.com'
    },
    
    {
      id: 'restaurant-management',
      title: 'Restaurant Management System',
      description: 'Developed a full-stack Restaurant Management System using Next.js, TypeScript, and Firebase (Auth, Firestore). The app features a customer ordering system with menu categories, cart, checkout, and real-time order tracking. Built an admin dashboard for managing menu items, categories, orders, reviews, and analytics. Implemented role-based authentication with Firebase Auth and integrated Stripe and PayPal for secure payments. Used Cloudinary for image management.',
      image: '/images/restaurant.png',
      category: 'website',
      technologies: ['Next.js', 'TypeScript', 'Firebase', 'Stripe', 'PayPal', 'Cloudinary'],
      githubLink: 'https://github.com/Habtewold-D/RestaurantWebsite',
      liveLink: 'https://restaurant-website-one-green.vercel.app/'
    },
    {
      id: 'movie-search',
      title: 'Movie Search Website with AI Chatbot',
      description: 'Built a movie search and discovery app using the TMDB API, with features including favorites, watchlist, and commenting. Integrated a chatbot that suggests movies based on genre, title, release date, and user preferences.',
      image: '/images/movie.png',
      category: 'website',
      technologies: ['React', 'Node.js', 'TMDB API', 'Chatbot'],
      githubLink: 'https://github.com/Habtewold-D/movie-database',
      liveLink: 'https://movie-database-one-tawny.vercel.app/'
    },

    {
      id: 'whiteboard',
      title: 'Collaborative Whiteboard',
      description: 'A real-time collaborative whiteboard app built with React, React-Konva, Socket.io, and Node.js. Draw, sketch, and collaborate live with multiple users, with persistent storage, user cursors, and multiple drawing tools.',
      image: '/images/canvas.png',
      category: 'website',
      technologies: ['React', 'React-Konva', 'Socket.io', 'Node.js'],
      githubLink: 'https://github.com/Habtewold-D/realtime-collaboration-canvas',
      liveLink: 'https://realtime-collaboration-canvas.vercel.app/'
    },
    {
      id: 'weather-app',
      title: 'Weather App',
      description: 'A modern, responsive weather application built with React that provides real-time weather information for cities worldwide. The app features a beautiful glassmorphism UI design with dynamic weather icons and smooth animations.',
      image: '/images/pj1.png',
      category: 'website',
      technologies: ['React', 'CSS', 'OpenWeatherMap API'],
      githubLink: 'https://github.com/Habtewold-D/weatherOf-Cities',
      liveLink: 'https://weather-of-cities.vercel.app/'
    },
    {
      id: 'tour-website',
      title: 'Tour Admin Dashboard',
      description: 'Admin dashboard for the tour booking app. The admin can use both the website and mobile application to manage tour packages, view bookings, handle payments, and oversee the entire tour booking system. Provides full administrative control with comprehensive analytics and management tools.',
      image: '/images/Screenshot 2025-07-09 011457.png',
      category: 'website',
      technologies: ['EJS', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Firebase'],
      githubLink: 'https://github.com/Habtewold-D/Tour-App-Flutter'
    },
    {
      id: 'bus-tracking',
      title: 'Bus Tracking System',
      description: 'Real-time bus tracking and management system with route optimization and passenger information.',
      image: '/images/bus.png',
      category: 'website',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      githubLink: 'https://github.com/deve1070/Bus-tracking-app'
    },
    
    
    {
      id: 'school-management',
      title: 'School Management System',
      description: 'Comprehensive school management platform with student records, attendance tracking, and grade management.',
      image: '/images/school.png',
      category: 'website',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/BirukSe/School-Management-System'
    }
    
    
  ];

  const getFilteredProjects = () => {
    if (activeCategory === 'all') {
      return showAllProjects ? projects : projects.slice(0, 6);
    }
    return projects.filter(project => project.category === activeCategory);
  };

  const filteredProjects = getFilteredProjects();

  const categories = [
    { id: 'all', label: 'All Projects', icon: null },
    { id: 'mobile', label: 'Mobile Apps', icon: <FaMobile /> },
    { id: 'website', label: 'Websites', icon: <FaGlobe /> }
  ];

  const handleCategoryChange = (category: 'all' | 'mobile' | 'website') => {
    setActiveCategory(category);
    if (category !== 'all') {
      setShowAllProjects(false);
    }
  };

  const toggleDescription = (projectId: string) => {
    const newExpanded = new Set(expandedDescriptions);
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedDescriptions(newExpanded);
  };

  const isDescriptionLong = (description: string) => {
    return description.length > 200;
  };

  return (
    <div className="py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore my work across mobile applications and web development. Each project represents unique challenges and innovative solutions.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mb-12"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(category.id as 'all' | 'mobile' | 'website')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              {category.icon && <span>{category.icon}</span>}
              {category.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-orange-500 hover:text-white transition-colors"
                      title="View Code"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    {project.category === 'website' && project.liveLink && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-orange-500 hover:text-white transition-colors"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                    project.category === 'mobile'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {project.category === 'mobile' ? 'Mobile App' : 'Website'}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                
                {/* Description with Expand/Collapse */}
                <div className="mb-4">
                  <p className={`text-gray-600 dark:text-gray-300 ${
                    !expandedDescriptions.has(project.id) && isDescriptionLong(project.description)
                      ? 'overflow-hidden'
                      : ''
                  }`} style={{
                    display: !expandedDescriptions.has(project.id) && isDescriptionLong(project.description)
                      ? '-webkit-box'
                      : 'block',
                    WebkitLineClamp: !expandedDescriptions.has(project.id) && isDescriptionLong(project.description) ? 3 : 'unset',
                    WebkitBoxOrient: !expandedDescriptions.has(project.id) && isDescriptionLong(project.description) ? 'vertical' : 'unset'
                  }}>
                    {project.description}
                  </p>
                  
                  {isDescriptionLong(project.description) && !expandedDescriptions.has(project.id) && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleDescription(project.id)}
                      className="text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-400 text-sm font-medium mt-2 flex items-center gap-1 transition-colors"
                    >
                      <FaChevronDown size={12} />
                      Read More
                    </motion.button>
                  )}
                  
                  {isDescriptionLong(project.description) && expandedDescriptions.has(project.id) && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleDescription(project.id)}
                      className="text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-400 text-sm font-medium mt-2 flex items-center gap-1 transition-colors"
                    >
                      <FaChevronUp size={12} />
                      Show Less
                    </motion.button>
                  )}
                </div>
                
                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    <FaGithub size={16} />
                    View Code
                  </motion.a>
                  {project.category === 'website' && project.liveLink && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      <FaExternalLinkAlt size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button for All Projects */}
        {activeCategory === 'all' && projects.length > 6 && !showAllProjects && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllProjects(true)}
              className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              View More Projects
            </motion.button>
          </motion.div>
        )}

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects; 