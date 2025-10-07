import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(state => state.cart);
  const { user } = useSelector(state => state.auth);

  const handleCheckout = () => {
    if (!user) {
      alert("Please login to proceed to checkout");
      navigate("/login");
      return;
    }
    alert("Checkout successful!");
    dispatch(clearCart());
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>{item.title} - ${item.price}</li>
            ))}
          </ul>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
}
