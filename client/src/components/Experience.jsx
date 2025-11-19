import { motion } from 'framer-motion'
import { FiCode, FiUsers, FiBriefcase, FiAward } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      icon: FiUsers,
      title: 'Co-Manager',
      organization: 'Byte Community, KITCoEK',
      period: 'Sep 2025 - Present',
      description: 'Managing community activities, workshops, and events to foster technical growth among students.',
      type: 'leadership'
    },
    {
      icon: FiCode,
      title: 'Technical Domain Member',
      organization: 'byteARQ Club',
      period: 'Feb 2025 - Present',
      description: 'Working on internal projects and mentorship programs to enhance technical skills.',
      type: 'technical'
    },
    {
      icon: FiBriefcase,
      title: 'Full Stack Developer (Virtual Internship)',
      organization: 'AICTE-EduSkills',
      period: 'Apr - Jun 2025',
      description: 'Built full-stack applications using MERN stack and REST APIs, gaining hands-on experience in modern web development.',
      type: 'internship'
    },
    {
      icon: FiAward,
      title: 'Employability Skills Internship',
      organization: 'AICTE-EduSkills',
      period: 'Jan - Mar 2025',
      description: 'Gained real-world communication and problem-solving skills essential for professional growth.',
      type: 'internship'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Experience & Leadership</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-accent-400 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:text-right">
                  {index % 2 === 0 && (
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                      <div className="flex items-start gap-4 md:flex-row-reverse">
                        <exp.icon className="text-3xl text-primary-600 dark:text-accent-400 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                          <p className="text-primary-600 dark:text-accent-400 font-semibold mb-2">{exp.organization}</p>
                          <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                          <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary-600 dark:bg-accent-400 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                </div>

                <div className="flex-1">
                  {index % 2 !== 0 && (
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                      <div className="flex items-start gap-4">
                        <exp.icon className="text-3xl text-primary-600 dark:text-accent-400 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                          <p className="text-primary-600 dark:text-accent-400 font-semibold mb-2">{exp.organization}</p>
                          <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                          <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
