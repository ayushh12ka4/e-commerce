import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZXaJwjdM16j2dr6MpRzo9BeTxmdCn-Q4",
  authDomain: "movieapp-f80e9.firebaseapp.com",
  projectId: "movieapp-f80e9",
  storageBucket: "movieapp-f80e9.firebasestorage.app",
  messagingSenderId: "56827203924",
  appId: "1:56827203924:web:cdf8694c9facc8cd57b8c1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
