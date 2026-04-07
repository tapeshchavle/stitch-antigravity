import React from 'react'
import { Brain } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-deep-space/50 pt-16 pb-8 px-6 mt-20 pointer-events-auto relative z-10 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-neon-blue" />
          <span className="text-lg font-bold tracking-widest text-white uppercase">Nexus AI</span>
        </div>
        
        <div className="flex gap-6 text-sm text-gray-500 font-mono">
          <a href="#" className="hover:text-neon-blue transition-colors">Documentation</a>
          <a href="#" className="hover:text-neon-purple transition-colors">API Reference</a>
          <a href="#" className="hover:text-neon-blue transition-colors">Protocol Terms</a>
        </div>
        
        <div className="text-xs text-gray-600 font-mono">
          &copy; {new Date().getFullYear()} Nexus Intelligence Network. All systems nominal.
        </div>
      </div>
    </footer>
  )
}
