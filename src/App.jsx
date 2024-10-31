import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Header from './components/Header'
import HeaderItem from './components/HeaderItem'
import Slider from './components/Slider'
import ProductionHouse from './components/productionHouse'
import GenreMovieList from './components/GenreMovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Slider></Slider>
        <ProductionHouse></ProductionHouse>
        <GenreMovieList/>
    </>
  )
}

export default App