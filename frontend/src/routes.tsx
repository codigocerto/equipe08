import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Trails from './pages/Trails'
import LoginRegister from './pages/LoginRegister'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/loginRegister" element={<LoginRegister />} />
      <Route path="#trails" element={<Trails />} />
    </Routes>
  )
}

export default AppRoutes
