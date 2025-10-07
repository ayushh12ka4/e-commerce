import { useSelector, useDispatch } from "react-redux";
import { api } from "../api/firebaseApi";
import { clearCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      const order = { items: cart, createdAt: Date.now() };
      await api.post("/orders.json", order);
      dispatch(clearCart());
      alert("Order placed!");
      navigate("/products");
    } catch(err){ console.log(err); }
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cart.map(item=>(
        <p key={item.id}>{item.title} x {item.qty} - ₹{item.price*item.qty}</p>
      ))}
      <button onClick={handleCheckout} disabled={cart.length===0}>Place Order</button>
    </div>
  );
}
