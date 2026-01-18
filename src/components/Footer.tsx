'use client'

import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-retro-brown text-retro-cream border-t-8 border-retro-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="retro-text text-xl text-retro-orange mb-4">
              ◄ PORTFOLIO ►
            </h3>
            <p className="text-retro-beige font-mono">
              Building digital experiences with passion and creativity.
            </p>
            <div className="mt-4 flex gap-2">
              <div className="w-4 h-4 bg-retro-orange border-2 border-retro-cream"></div>
              <div className="w-4 h-4 bg-retro-rust border-2 border-retro-cream"></div>
              <div className="w-4 h-4 bg-retro-gold border-2 border-retro-cream"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wider border-b-2 border-retro-orange pb-2">
              ▸ Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-retro-beige hover:text-retro-gold transition-colors font-mono flex items-center gap-2">
                  <span className="text-retro-orange">►</span> Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-retro-beige hover:text-retro-gold transition-colors font-mono flex items-center gap-2">
                  <span className="text-retro-orange">►</span> About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-retro-beige hover:text-retro-gold transition-colors font-mono flex items-center gap-2">
                  <span className="text-retro-orange">►</span> Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-retro-beige hover:text-retro-gold transition-colors font-mono flex items-center gap-2">
                  <span className="text-retro-orange">►</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wider border-b-2 border-retro-orange pb-2">
              ▸ Connect
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-retro-orange hover:bg-retro-rust border-2 border-retro-cream transition-colors"
              >
                <Github size={20} />
                <span className="text-xs font-bold">GIT</span>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-retro-teal hover:bg-retro-rust border-2 border-retro-cream transition-colors"
              >
                <Linkedin size={20} />
                <span className="text-xs font-bold">IN</span>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-retro-teal hover:bg-retro-rust border-2 border-retro-cream transition-colors"
              >
                <Twitter size={20} />
                <span className="text-xs font-bold">X</span>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="flex items-center justify-center gap-2 p-3 bg-retro-gold hover:bg-retro-rust border-2 border-retro-cream transition-colors text-retro-brown hover:text-retro-cream"
              >
                <Mail size={20} />
                <span className="text-xs font-bold">MAIL</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-retro-orange pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-retro-beige font-mono text-sm flex items-center gap-2">
              © {currentYear} [Your Name] - Made with <Heart size={16} className="text-retro-orange" fill="currentColor" /> and retro vibes
            </p>
            <p className="retro-text text-xs text-retro-orange">
              ◄ PORTFOLIO V1.0 ►
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
