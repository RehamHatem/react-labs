
import './App.css'
import Hero from './components/Hero'
import Home from './components/Home'
import MovieDetails from './components/MovieDetails'
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
 

  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} /> {/* ✅ */}
      </Routes>
    </Router>
  )
}

export default App
