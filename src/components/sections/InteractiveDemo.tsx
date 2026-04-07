import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Send } from 'lucide-react'

export default function InteractiveDemo() {
  const [input, setInput] = useState('')
  const [computing, setComputing] = useState(false)

  const handleSimulate = () => {
    if(!input) return
    setComputing(true)
    setTimeout(() => {
      setComputing(false)
      setInput('')
    }, 2000)
  }

  return (
    <section id="demo" className="py-32 px-6 relative pointer-events-none">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 pointer-events-auto">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-widest glow-text">
            Simulate Now
          </h2>
          <p className="text-gray-400 font-light leading-relaxed">
            Interface directly with the Nexus MCP environment. Pass parameters to the global AI engine and observe sub-millisecond reasoning compilation.
          </p>
          
          <div className="glass p-1 rounded-full flex items-center border border-neon-blue/30 w-full max-w-md focus-within:border-neon-blue/80 transition-colors bg-black/40">
            <div className="pl-4">
              <Terminal className="text-neon-blue w-5 h-5" />
            </div>
            <input 
              type="text" 
              className="bg-transparent border-none outline-none text-white px-4 py-3 w-full font-mono text-sm placeholder:text-gray-600"
              placeholder="Inject command (e.g., execute pattern-alpha)..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSimulate()}
            />
            <button 
              onClick={handleSimulate}
              className="bg-neon-blue p-3 rounded-full hover:shadow-[0_0_15px_rgba(0,243,255,0.8)] transition-all mr-1 disabled:opacity-50"
              disabled={computing}
            >
              <Send className="w-4 h-4 text-deep-space" />
            </button>
          </div>

          {computing && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-neon-purple font-mono text-xs tracking-widest uppercase flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-neon-purple animate-ping"></div>
              Computing multidimensional array...
            </motion.div>
          )}
        </div>

        <div className="flex-1 w-full bg-deep-space border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-50 z-0"></div>
          
          <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4 relative z-10">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            <span className="text-gray-500 font-mono text-xs ml-4">nexus_terminal_v4.2</span>
          </div>

          <div className="font-mono text-xs md:text-sm text-gray-300 space-y-2 relative z-10">
            <p className="text-green-400">root@nexus-core:~$ system_status</p>
            <p className="text-gray-500">Node cluster operational... 100%</p>
            <p className="text-gray-500">Synaptic bridges... stable</p>
            <p className="text-green-400 mt-4">root@nexus-core:~$ receive_mcp_config --id stitch</p>
            <p className="text-neon-blue">✔ Connection established with https://stitch.googleapis.com/mcp</p>
            <p className="text-gray-500">Awaiting input stream...</p>
            
            {computing && (
              <motion.p 
                initial={{ opacity: 0, y: 5 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="text-white mt-4"
              >
                &gt; executing user generated command batch... <br/>
                <span className="text-neon-purple leading-loose text-xs font-bold">SUCCESS (0.003ms)</span>
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
