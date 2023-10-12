import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Item from "../../components/ItemListContainer/Item"
import BackHome from "../../components/BackHome/BackHome"

const CategoryPage = () => {
  const [products, setProducts]=useState([])

  let {categoryId}=useParams()

  useEffect(()=>{
    fetch("http://localhost:3000/products")
        .then((datos) => datos.json())
        .then ((respuesta)=>setProducts(respuesta))
  },[])

  let filteredProducts=products.filter((product)=>{
    return product.category ==categoryId
  })

  return (
    <div>
    <div className="Container">
      {filteredProducts.map((product)=>{
      return(
        <div style={{margin:10}} key ={product.id}>
          <Item product={product}/>
        </div>
      )
    })}
    </div>
    <BackHome/>
    </div>
  )
}

export default CategoryPage