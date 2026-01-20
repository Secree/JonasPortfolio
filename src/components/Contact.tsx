'use client'

import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-20 bg-retro-beige border-t-8 border-retro-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-4 bg-retro-gold border-4 border-retro-brown shadow-retro mb-6">
            <h2 className="retro-text text-2xl md:text-3xl text-retro-brown">
              GET IN TOUCH
            </h2>
          </div>
          <p className="text-xl text-retro-brown font-mono max-w-2xl mx-auto">
            ▸ Let's create something amazing together ◂
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Social Links - Vertical on left */}
            <div className="md:col-span-2 space-y-4">
              <div className="bg-retro-orange border-4 border-retro-brown shadow-retro p-6">
                <h3 className="retro-text text-lg text-retro-cream mb-6">
                  ▸ CONNECT
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:your.email@example.com"
                    className="flex items-center gap-3 p-3 bg-retro-cream hover:bg-retro-gold border-2 border-retro-brown transition-colors group"
                  >
                    <Mail className="text-retro-orange group-hover:text-retro-rust" size={24} />
                    <span className="font-bold text-retro-brown text-sm">[EMAIL]</span>
                  </a>

                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-retro-cream hover:bg-retro-gold border-2 border-retro-brown transition-colors group"
                  >
                    <Github className="text-retro-brown" size={24} />
                    <span className="font-bold text-retro-brown text-sm">GITHUB</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-retro-cream hover:bg-retro-gold border-2 border-retro-brown transition-colors group"
                  >
                    <Linkedin className="text-retro-teal" size={24} />
                    <span className="font-bold text-retro-brown text-sm">LINKEDIN</span>
                  </a>

                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-retro-cream hover:bg-retro-gold border-2 border-retro-brown transition-colors group"
                  >
                    <Twitter className="text-retro-teal" size={24} />
                    <span className="font-bold text-retro-brown text-sm">TWITTER</span>
                  </a>
                </div>
              </div>

              {/* Retro decoration */}
              <div className="hidden md:block bg-retro-rust border-4 border-retro-brown shadow-retro p-6">
                <div className="text-retro-cream text-center space-y-2">
                  <p className="retro-text text-xs">★ AVAILABLE ★</p>
                  <p className="retro-text text-xs">FOR WORK</p>
                  <div className="flex justify-center gap-1 mt-4">
                    <div className="w-2 h-2 bg-retro-cream animate-pulse"></div>
                    <div className="w-2 h-2 bg-retro-cream animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-retro-cream animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3 bg-retro-cream border-4 border-retro-brown shadow-retro p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-retro-brown mb-2 uppercase tracking-wider">
                    ▸ Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border-4 border-retro-brown bg-white text-retro-brown font-mono focus:outline-none focus:border-retro-orange transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-retro-brown mb-2 uppercase tracking-wider">
                    ▸ Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border-4 border-retro-brown bg-white text-retro-brown font-mono focus:outline-none focus:border-retro-orange transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-retro-brown mb-2 uppercase tracking-wider">
                    ▸ Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border-4 border-retro-brown bg-white text-retro-brown font-mono focus:outline-none focus:border-retro-orange transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-retro-orange hover:bg-retro-rust text-retro-cream font-bold py-4 px-6 border-4 border-retro-brown shadow-retro hover:shadow-retro-hover transition-all hover:-translate-y-1 flex items-center justify-center gap-3 uppercase tracking-wider"
                >
                  <Send size={20} />
                  <span className="retro-text text-sm">SEND MESSAGE</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
