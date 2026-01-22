import { motion } from 'framer-motion'
import { FiAward, FiBook, FiCode } from 'react-icons/fi'

const About = () => {
  const education = [
    { degree: 'B.Tech - Computer Science and Business Systems', institution: "KIT's College of Engineering, Kolhapur", year: '2023 - 2027', grade: '8.89 CGPA' },
    { degree: 'Higher Secondary Certificate (HSC)', institution: 'Maharashtra State Board', year: '2023', grade: '68.67%' },
    { degree: 'Secondary School Certificate (SSC)', institution: 'Maharashtra State Board', year: '2021', grade: '93.20%' },
  ]

  const interests = [
    { icon: FiCode, title: 'Full Stack Development', desc: 'MERN Stack & Modern Web Technologies' },
    { icon: FiAward, title: 'AI & Machine Learning', desc: 'Building intelligent systems' },
    { icon: FiBook, title: 'UI/UX Design', desc: 'Creating beautiful user experiences' },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/workspace.jpg"
              alt="Workspace"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm a B.Tech Computer Science and Business Systems student at KIT's College of Engineering, Kolhapur. 
              I'm driven by curiosity to learn, innovate, and solve real-world problems through software development, AI, and design.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              With a strong foundation in full-stack development and a passion for emerging technologies, 
              I strive to create impactful solutions that make a difference in people's lives.
            </p>
            <a
              href="/Naeem_Naikwadi_resume.pdf"
              download
              className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
            >
              View Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold font-poppins mb-8 text-center">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <FiBook className="text-primary-600 dark:text-accent-400 text-2xl mt-1" />
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">{edu.year}</span>
                      <span className="text-sm font-semibold text-primary-600 dark:text-accent-400">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold font-poppins mb-8 text-center">Key Interests</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center"
              >
                <interest.icon className="text-5xl text-primary-600 dark:text-accent-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">{interest.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{interest.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
