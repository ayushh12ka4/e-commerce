import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/slices/authSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { clearCart } from "../redux/slices/cartSlice";

export default function Navbar() {
  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);       // Firebase logout
      dispatch(logoutUser());
      dispatch(clearCart());    // Clear Redux user
      navigate("/");        // Redirect to login
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="navbar">
      <div>
        <Link to="/products">Explore Products</Link>
        {user&&<Link to="/cart">Cart ({cart.length})</Link>}
      </div>

      <div>
        {user ? (
          <>
            <span style={{ marginRight: "10px" }}>
              Hi, {user.email}
            </span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button onClick={() => navigate("/")}>Login</button>
        )}
      </div>
    </nav>
  );
}


