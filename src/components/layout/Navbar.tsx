import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Cpu, Shield, Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 glass"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <div className="flex items-center gap-2">
        <Brain className="w-8 h-8 text-neon-blue" />
        <span className="text-xl font-bold tracking-widest text-white glow-text uppercase">Nexus AI</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <a href="#features" className="hover:text-neon-blue transition-colors cursor-pointer pointer-events-auto">Features</a>
        <a href="#demo" className="hover:text-neon-purple transition-colors cursor-pointer pointer-events-auto">Capabilities</a>
        <a href="#testimonials" className="hover:text-neon-blue transition-colors cursor-pointer pointer-events-auto">Network</a>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 text-white font-medium hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all pointer-events-auto">
          Initialize
        </button>
        <button className="md:hidden p-2 text-white pointer-events-auto">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.nav>
  )
}
