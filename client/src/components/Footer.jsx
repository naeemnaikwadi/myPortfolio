import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/naeemnaikwadi', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/naeem-naikwadi?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:naeemnaikwadi32@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold font-poppins mb-4">
              <span className="text-accent-400">NN</span>
            </h3>
            <p className="text-gray-400">
              Full Stack Developer passionate about creating innovative solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-accent-400 hover:text-gray-900 rounded-lg transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Naeem Anjum Naikwadi. Built with <FiHeart className="text-red-500" /> using React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
