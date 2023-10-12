import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import "./ItemListContainer.css"
import Item from "./Item"

const ItemListContainer =()=> {

  const [products, setProducts]=useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/products")
        .then((datos) => datos.json())
        .then ((respuesta)=>setProducts(respuesta))
  },[])

  return (
    <div className="Container">
          {products.map((product)=>{
            return(
                <div key={product.id}>
                  <Link to = {`/item/${product.id}`}>
                    <Item  product={product}/>
                  </Link>
                </div>
            )
          })}
    </div>
    
  );
}

export default ItemListContainer;