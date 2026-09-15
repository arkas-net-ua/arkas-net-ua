import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Uchni from './pages/Uchni'
import Vchyteli from './pages/Vchyteli'
import Vypusknyky from './pages/Vypusknyky'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/uchni" element={<Uchni />} />
      <Route path="/vchyteli" element={<Vchyteli />} />
      <Route path="/vypusknyky" element={<Vypusknyky />} />
    </Routes>
  )
}
