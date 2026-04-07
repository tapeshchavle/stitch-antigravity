import React from 'react'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 relative pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-16 text-white tracking-widest glow-text">
          Network Feedback
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "The computational efficiency limits we thought existed were completely demolished by Nexus. A fundamental shift.",
              author: "Dr. E. Tyrell",
              role: "Chief Architect, Tyrell Corp"
            },
            {
              quote: "Integration was seamless. Our entire neural pipeline was accelerated by 400% within hours of connecting to the MCP.",
              author: "S. Connor",
              role: "Systems Lead, Resistance AI"
            },
            {
              quote: "The interface logic feels less like coding and more like communication. Pure elegance in machine learning.",
              author: "D. Bowman",
              role: "Mission Commander, Discovery One"
            }
          ].map((t, i) => (
            <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-neon-purple/40 transition-colors relative overflow-hidden group">
              <div className="w-16 h-16 absolute -top-8 -left-8 bg-neon-purple/20 blur-2xl rounded-full group-hover:bg-neon-blue/30 transition-all"></div>
              <p className="text-gray-300 italic mb-6 text-sm leading-relaxed relative z-10">"{t.quote}"</p>
              <div className="mt-auto relative z-10">
                <p className="font-bold text-white tracking-wide uppercase text-sm">{t.author}</p>
                <p className="text-xs text-neon-blue font-mono mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
