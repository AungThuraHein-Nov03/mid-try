
import { Routes, Route, Link } from "react-router-dom"
import './App.css'
import Settings from "./components/settings.jsx"
import Profile from "./components/profile.jsx"
import Home from "./components/home.jsx"
import NameCard from "./components/namecard.jsx"
import Buttons from "./components/buttons.jsx"

function App() {
  return (
      <div>
      
      <Buttons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/namecard" element={<NameCard/>} />
      </Routes>
    </div>
  )
}

export default App
