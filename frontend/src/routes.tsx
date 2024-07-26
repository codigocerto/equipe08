import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Trails from './pages/Trails'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trilhas" element={<Trails />} />
    </Routes>
  )
}

export default AppRoutes
