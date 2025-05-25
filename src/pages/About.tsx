import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPython } from 'react-icons/fa';
import { SiFlutter, SiKotlin, SiNestjs } from 'react-icons/si';

interface Skill {
  name: string;
  icon: JSX.Element;
}

interface ProfessionalSkill {
  name: string;
  description: string;
}

const About = () => {
  const technicalSkills: Skill[] = [
    { name: 'JavaScript', icon: <FaJs className="text-4xl" /> },
    { name: 'React', icon: <FaReact className="text-4xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-4xl" /> },
    { name: 'Java', icon: <FaJava className="text-4xl" /> },
    { name: 'Python', icon: <FaPython className="text-4xl" /> },
    { name: 'Flutter', icon: <SiFlutter className="text-4xl" /> },
    { name: 'Kotlin', icon: <SiKotlin className="text-4xl" /> },
    { name: 'NestJS', icon: <SiNestjs className="text-4xl" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-4xl" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-4xl" /> }
  ];

  const professionalSkills: ProfessionalSkill[] = [
    {
      name: 'Problem Solving',
      description: 'Strong analytical skills to break down complex problems into manageable solutions'
    },
    {
      name: 'Team Collaboration',
      description: 'Excellent at working in cross-functional teams and communicating effectively'
    },
    {
      name: 'Communication',
      description: 'Clear and concise communication with both technical and non-technical stakeholders'
    },
    {
      name: 'Project Management',
      description: 'Experience in managing projects from conception to deployment'
    }
  ];

  return (
    <div className="py-8">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-black mb-2">About Me</h1>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-12 mb-16 items-center"
      >
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="aspect-square max-w-sm mx-auto">
            <img
              src="/images/IMG_8110~2.jpg"
              alt="Habtewold Degfie"
              className="rounded-2xl shadow-xl w-full h-full object-cover"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="space-y-4 text-gray-600">
            <motion.p 
              className="leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Hello! I'm Habtewold Degfie, a passionate developer based in Addis Ababa, Ethiopia.
              I create comprehensive web solutions that are not only visually appealing but also highly
              functional and user-friendly.
            </motion.p>
            <motion.p 
              className="leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              My expertise in software development has equipped me with a diverse skill set, allowing me
              to handle projects from concept to deployment. I specialize in creating responsive,
              scalable applications using modern technologies and best practices.
            </motion.p>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-12"
      >
        <div>
          <h2 className="text-3xl font-bold text-black text-center mb-8">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-orange-500 mb-2">{skill.icon}</div>
                <span className="text-gray-700 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-black text-center mb-8">Professional Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {professionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-black mb-2">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About; 
