import { products } from "../data";
import ProductCard from "../Components/ProductCard";
import CardImg from "../Components/CardImg";

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
