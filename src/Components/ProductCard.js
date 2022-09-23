import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";

const ProductCard = ({ product }) => {
  // Extract these functions from the CartContext
  const { addToCart, increase, cartItems} =
    useContext(CartContext);

  // Check if product is in the cart or not
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };
  return (
    <div className="border-dark border p-1 rounded-0 product-card">
      <img
        src={product.image + "?v=" + product.id}
        alt={product.name}
        className="img-fluid"
      />
      <div className="d-flex justify-content-between text-secondary">
        <small>${product.price} / kg</small>
        <small className="bg-light">{product.brand}</small>
      </div>
      <div className="d-flex justify-content-between">
        <small>{product.name}</small>
        <small>{product.category}</small>
      </div>
      <p>$ {product.price}</p>
      {isInCart(product) && (
        <button
          className="btn border btn-block border-dark rounded-0 text-danger"
          onClick={() => increase(product)}
        >
          Add more
        </button>
      )}
      {!isInCart(product) && (
        <button
          className="btn btn-block border-dark border text-danger rounded-0"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      )}
      <br />
    </div>
  );
};
export default ProductCard;
