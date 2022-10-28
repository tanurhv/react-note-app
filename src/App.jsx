import React from 'react'
import './style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Tasks from './components/Tasks'
import Forbidden from './pages/Forbidden'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<><Navigation /><Tasks /></>} />
          <Route path="*" element={<Forbidden />} />
        </Routes>
      </Router>


    </>
  )
}

export default App;
