//import { useEffect, useState } from 'react'

import './App.css'
import NavBar from "../src/assets/components/NavBar/NavBar"
//import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import HomePage from "../src/assets/pages/HomePage/HomePage"
import DetailPage from "../src/assets/pages/DetailPage/DetailPage"
import ContactPage from "../src/assets/pages/ContactPage/ContactPage"
import AboutPage from "../src/assets/pages/AboutPage/AboutPage"
import CategoryPage from "../src/assets/pages/CategoryPage/CategoryPage"


function App() {

//  const [dataJson, setDataJson]=useState({})

  return (
    <Router>
      <NavBar/>

      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/about' element= {<AboutPage/>}/>
        <Route path='/contact' element= {<ContactPage/>}/>
        <Route path='/item/:id' element= {<DetailPage/>}/>
        <Route path='/category/:categoryId' element= {<CategoryPage/>}/>
      </Routes>
      {/* <div className='Container'>
      <ItemListContainer
      name="Cargo Jean"
      price="S/ 75.90"
      image="https://m.media-amazon.com/images/I/71GimsTy+dL._AC_UY1000_.jpg"
      />
      <ItemListContainer
      name="Basic Sweater"
      price="S/ 49.90"
      image="https://www.eightyfiveclo.com/cdn/shop/products/3373-85-1120-Dark-Grey-Heavy-Sweater_5.jpg?v=1693929980"
      />
      <ItemListContainer
      name="Cardigan Rayas"
      price="S/ 45.90"
      image="https://www.milimonerokids.com/server/Portal_0012310/img/products/cardigan-rayas_9387140_15250579.jpg"
      />
      </div> */}

    
    </Router>
  )
}

export default App
