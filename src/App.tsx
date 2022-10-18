import './App.css'

import { Route, Routes } from 'react-router-dom'

import Router from 'router'
import { Header, Home, Profile } from './components'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path=":username" element={<Profile />} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
