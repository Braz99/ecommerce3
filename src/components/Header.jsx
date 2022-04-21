import { Link } from "react-router-dom";
import useCartInformation from "../hooks/useCartInformation";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/header.css";

export default function Header() {
  let { cartItems } = useCartInformation();

  return (
    <header className="header">
      <span className="logo">
        <Link to="/">Shop</Link>
      </span>

      <nav className="nav">
        <ul className="menu">
          <li className="icon-cart">
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
            <span className="total-items">{cartItems}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
