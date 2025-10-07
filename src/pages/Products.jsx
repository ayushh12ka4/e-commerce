import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import SortBar from "../components/SortBar";
import PaginationControls from "../components/PaginationControls";

export default function Products() {
  const dispatch = useDispatch();
  const { list, status } = useSelector(state => state.products);
  const filters = useSelector(state => state.filters);
  const { page } = useSelector(state => state.pagination);

  const itemsPerPage = 10;

  useEffect(() => { dispatch(fetchProducts()); }, []);

  let filtered = [...list];
  if (filters.category !== "All") filtered = filtered.filter(p => p.category === filters.category);
  filtered.sort((a,b)=>{
    if(filters.sort==="newest") return b.createdAt - a.createdAt;
    if(filters.sort==="low-high") return a.price - b.price;
    if(filters.sort==="high-low") return b.price - a.price;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (page-1)*itemsPerPage;
  const paginated = filtered.slice(start, start+itemsPerPage);

  return (
    <div className="products-page">
      <div 
  style={{ 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: "20px" 
  }}
>
  <FilterBar />
  <SortBar />
</div>
      <div className="product-grid">
        {status==="loading" ? "Loading..." : paginated.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
      <PaginationControls totalPages={totalPages} />
    </div>
  );
}
