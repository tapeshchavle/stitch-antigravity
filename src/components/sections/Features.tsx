import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Network, Zap, Lock, Database } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: <Network className="w-8 h-8 text-neon-blue" />,
    title: "Quantum Neural Mesh",
    desc: "Distributed processing across decentralized nodes offering near-zero latency."
  },
  {
    icon: <Zap className="w-8 h-8 text-neon-purple" />,
    title: "Hyper-Realtime Inference",
    desc: "Predictive modeling that acts blocks ahead of traditional temporal algorithms."
  },
  {
    icon: <Lock className="w-8 h-8 text-neon-blue" />,
    title: "Cryptographic Synapses",
    desc: "Every data packet is secured by multi-dimensional elliptic curve encryption."
  },
  {
    icon: <Database className="w-8 h-8 text-neon-purple" />,
    title: "Infinite Context Matrix",
    desc: "Memory architecture that scales dynamically without catastrophic forgetting."
  }
]

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const cards = containerRef.current.querySelectorAll('.feature-card')
    
    gsap.fromTo(cards, 
      { y: 100, opacity: 0, scale: 0.9 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        stagger: 0.1, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    )
  }, [])

  return (
    <section id="features" className="py-32 px-6 relative pointer-events-none">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 pointer-events-auto">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-widest glow-text">Core Architecture</h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
            Built on a fundamentally new paradigm of machine learning, Nexus AI abandons traditional limitations.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="feature-card glass p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group border border-white/5 hover:border-neon-blue/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 blur-[50px] rounded-full group-hover:bg-neon-purple/20 transition-all"></div>
              <div className="mb-6 p-4 rounded-xl bg-deep-space/50 inline-block border border-white/5 group-hover:border-neon-blue/40 transition-all">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
