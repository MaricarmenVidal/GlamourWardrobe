import "./NavBar.css"
import image from "./logo.png"
import CartWidget from "./CartWidget/CartWidget"
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="NavBar">
        <Link to = "/">
            <img src={image} alt="logo" />
        </Link>
        <ul>
            <Link className="li" to = "/">Home</Link>
            <Link className="li" to = "/about">About</Link>
            <Link className="li" to = "/contact">Contact</Link>
            <Link className="li" to = "/category/poleras">Poleras</Link>
            <Link className="li" to = "/category/casacas">Casacas</Link>
            <Link className="li" to = "/category/vestidos">Vestidos</Link>
            <Link className="li" to = "/category/pantalones">Pantalones</Link>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default NavBar