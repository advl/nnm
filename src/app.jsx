import React from 'react'
import { render } from 'ink'
import { MemoryRouter, Routes, Route } from 'react-router'
import MainMenu from './MainMenu.jsx'

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/1" element={<MainMenu />} />
        <Route path="/2" element={<MainMenu />} />
        <Route path="/3" element={<MainMenu />} />
      </Routes>
    </MemoryRouter>
  )
}

render(<App />)
