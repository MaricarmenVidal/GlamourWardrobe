
import './App.css'
import NavBar from "./NavBar/NavBar"
import ItemListContainer from './ItemListContainer/ItemListContainer'

function App() {


  return (
    <>
      <NavBar/>
      <div className='Container'>
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
      </div>

    </>
  )
}

export default App
