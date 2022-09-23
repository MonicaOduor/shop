import { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import menuIcon from "../Assets/icons/menu.svg";
import grocery from "../Assets/icons/grocery.png";
import cartIcon from "../Assets/icons/cart.png";
import CartContext from "../Context/Cart/CartContext";

function CollapsibleExample() {
  const { cartItems } = useContext(CartContext);

  return (
    <Navbar className="sticky" collapseOnSelect expand="lg">
      <Link to="/" className="logo">
        <h5>
          <img src={grocery} width="100" height="70" alt="grocery" />
          <br />
          GFRESH
        </h5>
      </Link>

      <Navbar.Toggle
        className="menu-icon navbar-toggle"
        aria-controls="basic-navbar-nav"
      >
        <img src={menuIcon} alt="menu-icon" />
      </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto d-sm-none d-md-none d-lg-block"> </Nav>
        <Nav>
          <Link to="/" className="navlink ml-lg-5 mr-lg-4 ">
            Store
          </Link>
          <Link to="/about" className="navlink mr-lg-4">
            About
          </Link>
          <Link to="/contact" className="navlink mr-lg-4">
            Contact
          </Link>
          <Link to="/cart" className="navlink mr-lg-4">
            <img src={cartIcon} alt="cart-icon" />
            {/* if the number of items in the cart is greater than 0, then show the number of items in the cart */}
            {cartItems.length > 0 && (
              <small className="cart-number">{cartItems.length}</small>
            )}
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CollapsibleExample;
