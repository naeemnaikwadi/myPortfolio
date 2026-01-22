import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'

const Hero = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/naeemnaikwadi', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/naeem-naikwadi', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:naeemnaikwadi32@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-accent-500/20 dark:from-primary-900/30 dark:to-accent-900/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold font-poppins mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm <span className="text-primary-600 dark:text-accent-400">Naeem</span>
            </motion.h1>
            
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Full Stack Developer | AI & ML Enthusiast | Technical Leader
            </motion.h2>
            
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Passionate about building innovative solutions that bridge learning, accessibility, and technology.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
              >
                View My Projects
              </a>
              <a
                href="/Naeem_Naikwadi_resume.pdf"
                download
                className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:border-accent-400 dark:text-accent-400 hover:bg-primary-600 hover:text-white dark:hover:bg-accent-400 dark:hover:text-gray-900 rounded-lg font-medium transition-all flex items-center gap-2"
              >
                <FiDownload /> Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-gray-800 hover:bg-primary-600 hover:text-white dark:hover:bg-accent-400 dark:hover:text-gray-900 rounded-lg transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="./profile.jpg"
                alt="Naeem Anjum Naikwadi"
                className="relative rounded-full w-full border-4 border-primary-500 dark:border-accent-400 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
