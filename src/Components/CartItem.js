import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import TrashIcon from "../Assets/icons/trash.png";

export default function CartItem({ product }) {
  const { removeFromCart, increase, decrease } = useContext(CartContext);
  return (
    <table className="table container">
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{product.length}</th>
          <td>
            <img
              src={product.image}
              alt={product.name}
              width="100"
              height="100"
              className="img-fluid"
            />
          </td>
          <td >{product.price}</td>
          <td>
            {product.quantity > 1 && (
              <button className="m-2 border" onClick={() => decrease(product)}>
                -
              </button>
            )}
            {product.quantity === 1 && (
              <button
                className="m-2 border"
                onClick={() => removeFromCart(product)}
              >
                <img src={TrashIcon} alt="trash" />
              </button>
            )}
            {product.quantity}
            <button className="m-2 border" onClick={() => increase(product)}>
              +
            </button>
          </td>
          <td>{product.price * product.quantity}</td>
        </tr>
      </tbody>
    </table>
  );
}
