import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);

  const handleAddToCart = () => {
    if (!user) {
      alert("Please login to add items to the cart");
      navigate("/");
      return;
    }
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img src={`${product.image}`} alt="" />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
