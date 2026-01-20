'use client'

import { ExternalLink, Github, Star } from 'lucide-react'
import Image from 'next/image'
import mirangelica from '@/images/mirangelica.png'
import emailSender from '@/images/emailSender.png'

export default function Projects() {
  const projects = [
    {
      title: 'Mirangelica: Health Quest',
      description: 'Java desktop application that promotes healthy computer habits through timed wellness challenges. Set in the fictional Town of Fitonia, users meet characters Mira and Lucifer who guide them through four health challenges.',
      image: mirangelica,
      tags: ['Java'],
      links: {
        github: 'https://github.com/Secree/College-Projects/tree/main/Data%20Structure%20And%20Algorithm',
        live: '#',
      },
    },
    {
      title: 'Email Sender',
      description: 'A web application that allows users to send emails directly from the platform. Built with a Node.js backend and a simple HTML/CSS/JavaScript frontend, it provides a user-friendly interface for composing and sending emails.',
      image: emailSender,
      tags: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
      links: {
        github: 'https://github.com/Secree/Email-Sender',
        live: '#',
      },
    },
    {
      title: 'Jonas Entetainment',
      description: 'A website where you can listen to music and play games. Built with HTML, CSS, and JavaScript to provide an engaging user experience with a retro aesthetic.',
      image: null,
      tags: ['HTML', 'CSS', 'JavaScript', 'React'],
      links: {
        github: 'https://github.com/Secree/JonasEntertainment',
        live: 'jonasentertainment.vercel.app',
      },
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-retro-cream to-retro-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-4 bg-retro-rust border-4 border-retro-brown shadow-retro mb-6">
            <h2 className="retro-text text-2xl md:text-3xl text-retro-cream">
              MY PROJECTS
            </h2>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Star className="text-retro-orange" fill="currentColor" size={20} />
            <p className="text-xl text-retro-brown font-mono max-w-2xl">
              Check out some of my recent work
            </p>
            <Star className="text-retro-orange" fill="currentColor" size={20} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-retro-cream border-4 border-retro-brown shadow-retro hover:shadow-retro-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-retro-orange via-retro-rust to-retro-gold relative overflow-hidden border-b-4 border-retro-brown">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="retro-text text-retro-cream text-sm group-hover:scale-110 transition-transform">
                        [PROJECT]
                      </p>
                    </div>
                    {/* Retro grid overlay */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}></div>
                  </>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 bg-retro-cream">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-retro-orange border border-retro-brown"></div>
                  <h3 className="text-xl font-bold text-retro-brown uppercase tracking-wide">
                    {project.title}
                  </h3>
                </div>
                <p className="text-retro-brown mb-4 font-mono">
                  ▸ {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-retro-orange text-retro-cream text-xs font-bold border-2 border-retro-brown uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t-2 border-retro-brown">
                  <a
                    href={project.links.github}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-retro-brown hover:bg-retro-orange text-retro-cream font-bold transition-colors border-2 border-retro-brown"
                  >
                    <Github size={18} />
                    <span className="text-xs uppercase">Code</span>
                  </a>
                  {project.links.live && project.links.live !== '#' && (
                    <a
                      href={project.links.live}
                      className="flex-1 flex items-center justify-center gap-2 py-2 bg-retro-gold hover:bg-retro-orange text-retro-brown hover:text-retro-cream font-bold transition-colors border-2 border-retro-brown"
                    >
                      <ExternalLink size={18} />
                      <span className="text-xs uppercase">Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
