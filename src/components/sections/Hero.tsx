import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pointer-events-none">
      <div className="text-center z-10 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="pointer-events-auto"
        >
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white">NEXUS</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neon-purple glow-text">INTELLIGENCE</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            The next evolution in neural architecture. Seamlessly integrated, boundlessly capable, universally accessible.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-8 py-4 rounded-full bg-neon-blue text-deep-space font-bold hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] transition-all duration-300 w-full sm:w-auto uppercase tracking-wider">
              Initialize Sequence
            </button>
            <button className="px-8 py-4 rounded-full glass border border-neon-purple/50 text-white font-bold hover:bg-neon-purple/20 transition-all duration-300 w-full sm:w-auto uppercase tracking-wider">
              View Documentation
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Scroll to explore</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-neon-blue to-transparent"
          animate={{ height: ["0px", "48px", "0px"], y: [0, 24, 48] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}
