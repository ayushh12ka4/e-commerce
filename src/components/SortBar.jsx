import { useDispatch } from "react-redux";
import { setSort } from "../redux/slices/filtersSlice";

export default function SortBar() {
  const dispatch = useDispatch();
  return (
    <div className="sort-bar">
      <button onClick={() => dispatch(setSort("newest"))}>Newest</button>
      <button onClick={() => dispatch(setSort("low-high"))}>Price Low-High</button>
      <button onClick={() => dispatch(setSort("high-low"))}>Price High-Low</button>
    </div>
  );
}
