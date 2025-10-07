import { useDispatch } from "react-redux";
import { setCategory } from "../redux/slices/filtersSlice";

export default function FilterBar() {
  const dispatch = useDispatch();
  return (
    <div className="filter-bar">
      <button onClick={() => dispatch(setCategory("All"))}>All</button>
      <button onClick={() => dispatch(setCategory("Electronics"))}>Electronics</button>
      <button onClick={() => dispatch(setCategory("Clothing"))}>Clothing</button>
      <button onClick={() => dispatch(setCategory("Footwear"))}>Footwear</button>
    </div>
  );
}
