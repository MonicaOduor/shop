import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";

export default function Checkout() {
  const { clearCart, handleCheckout, itemCount, total } =
    useContext(CartContext);

  return (
    <div className="text-center border p-4" width="fit-content">
      <h3>
        <strong>Order Summary</strong>
      </h3>
      <p>
        <>Total Items: </>
        <>{itemCount}</>
      </p>

      <p>
        <>Total Price: </>
        <>$ {total}</>
        <br />
      </p>
      <div className="d-flex justify-content-around">
        <button
          className="btn btn-success rounded-0 mr-3"
          onClick={handleCheckout}
        >
          CHECKOUT
        </button>
        <br />
        <button className="btn btn-success rounded-0 " onClick={clearCart}>
          CLEAR CART
        </button>
      </div>
    </div>
  );
}
