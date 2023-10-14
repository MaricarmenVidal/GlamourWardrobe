import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import axios from "axios";
import "../../components/ItemListContainer/ItemListContainer.css"
import Item from "../../components/ItemListContainer/Item"
import BackHome from "../../components/BackHome/BackHome";
const DetailPage =()=> {
  let {id}=useParams()
  const [products, setProducts]=useState([])

  useEffect(() => {
    axios.get('/products.json').then((res) => {
      const product = res.data.products.find(products=>products.id===parseInt(id))
      setProducts(product);
    });
  }, [id]);

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
