import { products } from "./src/data/products.js";
import { api } from "./src/api/firebaseApi.js";

const seedProducts = async () => {
  for (let p of products) {
    try {
      const res = await api.post("/products.json", p);
      console.log("Uploaded:", p.title, res.data);
    } catch (err) {
      console.log("Error uploading:", p.title, err.message);
    }
  }
};

seedProducts();
