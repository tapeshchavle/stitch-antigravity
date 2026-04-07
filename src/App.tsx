import React from 'react'
import Scene from './components/3d/Scene'

function App() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none" style={{ position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, zIndex: -1 }}>
      <Scene />
    </div>
  )
}

export default App
