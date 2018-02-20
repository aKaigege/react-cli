import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Home from './views/HomeView'

const supportHistory = 'pushState' in window.history
const App = () => (
  <Router forceRefresh={!supportHistory} keyLength={12}>
    <div>
      <Home />
    </div>
  </Router>
)
export default App
