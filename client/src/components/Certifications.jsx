import { motion } from 'framer-motion'
import { FiAward, FiMonitor, FiLayout, FiMic, FiShield, FiTrendingUp } from 'react-icons/fi'

const Certifications = () => {
  const certifications = [
    {
      icon: FiMonitor,
      title: 'OS Installation & Hardware Basics',
      organization: 'byteARQ',
      date: 'Feb 2025',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiLayout,
      title: 'Design Genix: Figma & UI Design',
      organization: 'Design Workshop',
      date: 'Apr 2025',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiMic,
      title: 'Public Speaking & Presentation Skills',
      organization: 'Udemy',
      date: 'Apr 2025',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: FiShield,
      title: 'Cybersecurity Fundamentals',
      organization: 'Zscaler Training (EDU-102)',
      date: '2025',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Pioneer 2025',
      organization: 'TECH-NEGOTIA 2.0',
      date: '2025',
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Certifications & Workshops</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
              <div className="p-6">
                <cert.icon className="text-4xl text-primary-600 dark:text-accent-400 mb-4" />
                <h3 className="text-xl font-bold font-poppins mb-2">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{cert.organization}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
