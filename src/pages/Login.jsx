import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

       const userData = {
      uid: res.user.uid,
      email: res.user.email
      
    };
      dispatch(loginUser(userData));
      navigate("/products");
    } catch (err) { console.log(err); }
  };

  const signup = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const userData = {
      uid: res.user.uid,
      email: res.user.email
      
    };
      dispatch(loginUser(userData));
      navigate("/products");
    } catch (err) { console.log(err); }
  };

  return (
    <div className="login-page">
      <h2>Login / Signup</h2>
      <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
      <button onClick={signup}>Signup</button>
    </div>
  );
}
