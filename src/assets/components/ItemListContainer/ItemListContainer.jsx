import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import "./ItemListContainer.css"
import Item from "./Item"

const ItemListContainer =()=> {

  const [products, setProducts]=useState([])

  useEffect(() => {
    axios.get('/products.json').then((res) => {
      setProducts(res.data.products)
    });
  }, []);

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