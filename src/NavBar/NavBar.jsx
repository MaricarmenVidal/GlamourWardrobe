import "./NavBar.css"
import image from "./logo.png"
import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
  return (
    <nav className="NavBar">
        <div>
            <img src={image} alt="logo" />
        </div>
        <ul>
            <li>Products</li>
            <li>Stores</li>
            <li>Contact us</li>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default NavBar