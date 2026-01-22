import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: 'GrowSkill.edu',
      description: 'Offline-first learning PWA with AI progress analysis & doubt solving. Features student app, teacher dashboard, and admin portal.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'IndexedDB', 'AI Models', 'RAG'],
      image: '/projects/growskill.jpg',
      github: 'https://github.com/naeemnaikwadi/GrowSkill-offline-',
      // demo: 'None'
    },
    {
      title: 'SkillSync',
      description: 'ERP-based student management system with authentication, AI chatbot & role-based access control for efficient administration.',
      tech: ['MERN Stack', 'Gemini AI', 'JWT', 'RBAC'],
      image: '/projects/skillsync.jpg',
      github: 'https://github.com/naeemnaikwadi/erpfull',
      demo: 'https://modernerp-bay.vercel.app/'
    },
    {
      title: 'EduVerse',
      description: 'Smart learning dashboard for students and teachers.',
      tech: ['HTML', 'CSS', 'JavaScript', 'MongoDB Atlas'],
      image: '/projects/eduverse.jpg',
      github: 'https://github.com/naeemnaikwadi/EduVerse',
      demo: 'https://eduverse-liard.vercel.app/'
    },
    {
      title: 'iCam',
      description: 'Object detection app for visually impaired using ML & text-to-speech feedback for enhanced accessibility.',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'TTS'],
      image: '/projects/icam.jpg',
      github: 'https://github.com/sgavankar43/iCAM',
      demo: 'https://github.com/sgavankar43/iCAM/releases/download/v1.0.0/iCAM.apk'
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary-500 to-accent-400">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <FiGithub size={24} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <FiExternalLink size={24} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold font-poppins mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
