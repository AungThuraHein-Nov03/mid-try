
import { Routes, Route, Link } from "react-router-dom"
import './App.css'
import Settings from "./components/settings.jsx"
import Profile from "./components/profile.jsx"
import Home from "./components/home.jsx"
import NameCard from "./components/namecard.jsx"


function App() {
  return (
      <div>
      <nav style={{ padding: "10px", borderBottom: "1px solid black" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/profile" style={{ marginRight: "10px" }}>Profile</Link>
        <Link to="/settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/Name Card" element={<NameCard/>} />
      </Routes>
    </div>
  )
}

export default App
