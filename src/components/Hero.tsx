'use client'

import { ArrowRight, Star, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-retro-cream via-retro-beige to-retro-gold/20 pt-20 relative overflow-hidden">
      {/* Retro decorative elements */}
      <div className="absolute top-20 left-10 text-retro-orange/20 animate-pulse">
        <Star size={80} fill="currentColor" />
      </div>
      <div className="absolute bottom-20 right-10 text-retro-purple/20 animate-pulse">
        <Zap size={100} fill="currentColor" />
      </div>
      <div className="absolute top-1/2 right-20 text-retro-teal/20">
        <div className="w-32 h-32 border-8 border-current rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Retro badge */}
          <div className="inline-block mb-6 px-6 py-3 bg-retro-orange border-4 border-retro-brown shadow-retro animate-bounce">
            <p className="retro-text text-sm text-retro-cream">
              ★ SINCE 2026 ★
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl font-bold text-retro-brown mb-8 animate-slide-up">
            <span className="block text-2xl md:text-4xl mb-4 retro-text text-retro-orange">HI, I'M</span>
            <span className="font-display text-6xl md:text-8xl neon-text text-retro-rust">
              Jan Jonas G. Sta. Ana
            </span>
          </h1>

          {/* Subtitle with retro styling */}
          <div className="mb-8 animate-slide-up">
            <div className="inline-block px-8 py-4 bg-retro-brown text-retro-cream border-4 border-retro-orange shadow-retro">
              <p className="text-2xl md:text-4xl font-bold uppercase tracking-widest">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-retro-brown mb-12 max-w-3xl mx-auto animate-slide-up font-mono">
            ▸ I’m an aspiring full-stack web developer passionate about building modern, responsive web applications. I enjoy working with both frontend and backend technologies and continuously learning to improve my skills. ◂
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center px-10 py-4 bg-retro-orange hover:bg-retro-rust text-retro-cream font-bold text-lg border-4 border-retro-brown shadow-retro hover:shadow-retro-hover transition-all duration-200 hover:-translate-y-1 uppercase tracking-wider"
            >
              <span className="retro-text text-sm">VIEW WORK</span>
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-retro-cream hover:bg-retro-beige text-retro-brown font-bold text-lg border-4 border-retro-brown shadow-retro hover:shadow-retro-hover transition-all duration-200 hover:-translate-y-1 uppercase tracking-wider"
            >
              <span className="retro-text text-sm">CONTACT ME</span>
            </a>
          </div>

          {/* Retro divider */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="w-20 h-1 bg-retro-orange"></div>
            <Star className="text-retro-orange" fill="currentColor" size={24} />
            <div className="w-20 h-1 bg-retro-orange"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
