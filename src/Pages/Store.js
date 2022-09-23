import { products } from "../data";
import ProductCard from "../Components/ProductCard";

const Store = () => {
  return (
    <div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Store;
