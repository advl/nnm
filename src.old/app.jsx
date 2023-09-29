import React from 'react'
import { render } from 'ink'
import { MemoryRouter, Routes, Route } from 'react-router'
import MainMenu from './MainMenu'
import Menu1 from './1/Menu'

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        {/*
        <Route path="/1" element={<Menu1 />} />
        <Route path="/2" element={<MainMenu />} />
        <Route path="/3" element={<MainMenu />} />
        */}
      </Routes>
    </MemoryRouter>
  )
}

render(<App />)
