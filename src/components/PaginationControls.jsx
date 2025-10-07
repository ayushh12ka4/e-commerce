import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../redux/slices/paginationSlice";

export default function PaginationControls({ totalPages }) {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.pagination.page);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {pages.map(p => (
        <button key={p} className={p === currentPage ? "active" : ""} onClick={() => dispatch(setPage(p))}>{p}</button>
      ))}
    </div>
  );
}
