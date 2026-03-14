import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Homepage'
import Moviepage from '../src/pages/Moviepage'
import MyListpage from '../src/pages/MyListpage'
import DummyPage from '../src/pages/DummyPage'
import DummyPage2 from '../src/pages/DummyPage2'
import DummyPage3 from '../src/pages/DummyPage3'
import DummyPage4 from '../src/pages/DummyPage4'
import { movies } from '../src/pages/Browsepage'

function App() {
  const [wishlist, setWishlist] = useState([])

  const toggleWishlist = (movie) => {
    setWishlist(prev => prev.some(m => m.id === movie.id) ? prev.filter(m => m.id !== movie.id) : [...prev, movie])
  }

  const isInWishlist = (id) => wishlist.some(m => m.id === id)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home movies={movies} wishlistCount={wishlist.length} toggleWishlist={toggleWishlist} isInWishlist={isInWishlist} />} />
        <Route path='/movies/:id' element={<Moviepage wishlistCount={wishlist.length} toggleWishlist={toggleWishlist} isInWishlist={isInWishlist} />} />
        <Route path='/my-list' element={<MyListpage movies={movies} wishlist={wishlist} wishlistCount={wishlist.length} toggleWishlist={toggleWishlist} />} />
        <Route path='/dummy' element={<DummyPage />} />
        <Route path='/dummy-2' element={<DummyPage2 />} />
        <Route path='/dummy-3' element={<DummyPage3 />} />
        <Route path='/dummy-4' element={<DummyPage4 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
