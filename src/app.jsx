import React from 'react'
import { render } from 'ink'
import { MemoryRouter, Routes, Route } from 'react-router'
import MainMenu from './MainMenu'
import {
  ExecutionInterface,
  OutputContextProvider,
} from './common'

function App() {
  return (
    <OutputContextProvider>
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route
            path="/environment/*"
            element={<ExecutionInterface items={[1, 2, 3]} />}
          />
          {/*
        <Route path="/1" element={<Menu1 />} />
        <Route path="/2" element={<MainMenu />} />
        <Route path="/3" element={<MainMenu />} />
        */}
        </Routes>
      </MemoryRouter>
    </OutputContextProvider>
  )
}

render(<App />)
