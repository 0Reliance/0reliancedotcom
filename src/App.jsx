import React from 'react'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>0reliancedotcom</h1>
        <p>A modern web application project</p>
        <div className="features">
          <div className="feature">
            <h3>🚀 Modern Stack</h3>
            <p>Built with React, Vite, and modern web technologies</p>
          </div>
          <div className="feature">
            <h3>📱 Responsive Design</h3>
            <p>Optimized for all devices and screen sizes</p>
          </div>
          <div className="feature">
            <h3>⚡ High Performance</h3>
            <p>Fast loading times and smooth user experience</p>
          </div>
        </div>
      </header>
      <main className="App-main">
        <section className="welcome">
          <h2>Welcome to 0reliancedotcom</h2>
          <p>This is a modern web application built with best practices and cutting-edge technologies.</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 0reliancedotcom. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
