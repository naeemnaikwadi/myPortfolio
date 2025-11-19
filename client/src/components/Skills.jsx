import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiTool, FiLayout } from 'react-icons/fi'

const Skills = () => {
  const skillCategories = [
    {
      icon: FiCode,
      title: 'Languages & Frameworks',
      skills: ['C', 'HTML5', 'CSS3', 'JavaScript', 'Python', 'Java', 'React.js', 'Node.js', 'Express.js']
    },
    {
      icon: FiDatabase,
      title: 'Databases',
      skills: ['MongoDB', 'MongoDB Atlas', 'Cloudinary']
    },
    {
      icon: FiTool,
      title: 'Tools & Technologies',
      skills: ['VS Code', 'Visual Studio', 'Git', 'GitHub', 'MS Office', 'REST APIs', 'JWT']
    },
    {
      icon: FiLayout,
      title: 'Design Tools',
      skills: ['Figma', 'Canva', 'UI/UX Design', 'Responsive Design']
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <category.icon className="text-5xl text-primary-600 dark:text-accent-400 mb-4" />
              <h3 className="text-xl font-bold font-poppins mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
