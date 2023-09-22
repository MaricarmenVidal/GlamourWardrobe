import "./ItemListContainer.css"

const ItemListContainer =({image, name, price})=> {
  return (
    <div >
        <div className="Card">
            <img src={image} alt="" />
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    </div>
    
  );
}

export default ItemListContainer;