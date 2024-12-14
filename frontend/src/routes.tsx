import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Trails from './pages/Trails'
import Login from './pages/LoginRegister'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="#trails" element={<Trails />} />
    </Routes>
  )
}

export default AppRoutes
