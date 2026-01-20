'use client'

import { Code, Coffee, Lightbulb } from 'lucide-react'
import Image from 'next/image'
import jonasImage from '@/images/jonasImage.jpg'

export default function About() {
  return (
    <section className="py-20 bg-retro-beige border-y-8 border-retro-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-4 bg-retro-orange border-4 border-retro-brown shadow-retro mb-6">
            <h2 className="retro-text text-2xl md:text-3xl text-retro-cream">
              ABOUT ME
            </h2>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-2 bg-retro-brown"></div>
            <div className="w-6 h-6 bg-retro-orange border-2 border-retro-brown rotate-45"></div>
            <div className="w-16 h-2 bg-retro-brown"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with retro frame */}
          <div className="relative">
            <div className="aspect-square border-8 border-retro-brown shadow-retro relative overflow-hidden">
              <Image 
                src={jonasImage}
                alt="Jonas"
                fill
                className="object-cover"
                priority
              />
              {/* Retro TV effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-retro-cream/10 to-transparent pointer-events-none"></div>
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-8 h-8 border-l-4 border-t-4 border-retro-cream"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-r-4 border-t-4 border-retro-cream"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-l-4 border-b-4 border-retro-cream"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-r-4 border-b-4 border-retro-cream"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="bg-retro-cream p-8 border-4 border-retro-brown shadow-retro">
              <p className="text-xl text-retro-brown leading-relaxed font-mono mb-4">
                ▸ I love working with web technologies and am passionate about creating websites that pis pleasing to the eye yet being easy to use as well.
              </p>
              <p className="text-xl text-retro-brown leading-relaxed font-mono">
                ▸ My skills is coing in web development such as HTML, CSS, JavaScript, and frameworks like React and Next.js. I also have experience with backend technologies like Node.js and databases like MongoDB.
              </p>
            </div>

            {/* Fun retro stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-retro-orange border-4 border-retro-brown shadow-retro">
                <Code className="mx-auto mb-2 text-retro-cream" size={32} />
                <p className="retro-text text-xs text-retro-cream">CODER</p>
              </div>
              <div className="text-center p-4 bg-retro-rust border-4 border-retro-brown shadow-retro">
                <Coffee className="mx-auto mb-2 text-retro-cream" size={32} />
                <p className="retro-text text-xs text-retro-cream">COFFEE</p>
              </div>
              <div className="text-center p-4 bg-retro-gold border-4 border-retro-brown shadow-retro">
                <Lightbulb className="mx-auto mb-2 text-retro-brown" size={32} />
                <p className="retro-text text-xs text-retro-brown">IDEAS</p>
              </div>
            </div>

            {/* Skills */}
            <div className="pt-6">
              <h3 className="retro-text text-xl text-retro-orange mb-6 uppercase">
                ▸ Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {['HTML', 'CSS', 'JS', 'REACT', 'NODEJS', 'MONGODB', 'EXPRESSJS', 'NEXTJS'].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-retro-brown text-retro-cream font-bold border-2 border-retro-orange uppercase tracking-wider text-sm hover:bg-retro-orange hover:text-retro-cream transition-colors cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
