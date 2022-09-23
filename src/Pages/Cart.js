import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import Checkout from "../Components/Checkout";
import { Link } from "react-router-dom";
import TrashIcon from "../Assets/icons/trash.png";
import { v4 as uuidv4 } from "uuid";

export default function Cart() {
  // extract the functions from the Context
  const { cartItems, checkout, removeFromCart, increase, decrease } =
    useContext(CartContext);
  return (
    <>
      <h2 className="text-info text-center p-2">
        Shopping Cart
        <span>({cartItems.length})</span>
      </h2>
      {/* Show the checkout message when the checkout button is clicked */}
      {checkout && (
        <div className="container">
          <h5 className="p-2 text-secondary" style={{width: 'fit-content'}}>Thank you for your purchase!</h5>
          <br/>
        </div>
      )}

      {/* If cart is empty,show a message and if not display each cart item in cart*/}
      {cartItems.length === 0 ? (
        <div className="container" style={{ minHeight: "52.4vh" }}>
          <div
            className="card"
            style={{ background: "inherit", border: "none" }}
          >

          </div>
          <div className="p-3">
            <p className="border p-2">Your cart is currently empty</p>
            <Link to="/">
              <button
                className="btn border rounded-0 text-white"
                style={{ background: "#94c4f7" }}
              >
                RETURN TO SHOP
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr className="text-center">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            {cartItems.map((product) => (
              <tbody key={uuidv4()}>
                <tr className="text-center">
                  <td >
                    <img
                      src={product.image}
                      alt={product.name}
                      width="100"
                      height="100"
                      className="img-fluid"
                    />
                    <br />
                    <small>{product.name}</small>
                  </td>
                  <td className="mt-2">{product.price}</td>
                  <td className="d-flex justify-content-around p-1 ">
                    {product.quantity > 1 && (
                      <button
                        className=" border"
                        onClick={() => decrease(product, product.id)}
                      >
                        -
                      </button>
                    )}
                    {product.quantity === 1 && (
                      <button
                        className=" border"
                        onClick={() => removeFromCart(product)}
                      >
                        <img src={TrashIcon} alt="trash" />
                      </button>
                    )}
                    {product.quantity}
                    <button
                      className="border"
                      onClick={() => increase(product)}
                    >
                      +
                    </button>
                  </td>
                  <td>{product.price * product.quantity}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
      {/* If cart is not empty, display the checkout button */}
      {cartItems.length > 0 && <Checkout />}
    </>
  );
}
