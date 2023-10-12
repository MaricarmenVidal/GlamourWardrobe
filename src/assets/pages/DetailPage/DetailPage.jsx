import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';

import "../../components/ItemListContainer/ItemListContainer.css"
import Item from "../../components/ItemListContainer/Item"
import BackHome from "../../components/BackHome/BackHome";
const DetailPage =()=> {
  let {id}=useParams()
  const [products, setProducts]=useState([])

  useEffect(()=>{
    fetch(`http://localhost:3000/products/${id}`)
        .then((datos) => datos.json())
        .then ((respuesta)=>setProducts(respuesta))
  },[id])

  return (
    <div>
    <div className="Container">
          {products.id ? <Item product={products} />:null}
    </div>
    <BackHome/>
    </div>
  );
}

export default DetailPage
