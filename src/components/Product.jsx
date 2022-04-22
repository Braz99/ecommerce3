import { lazy, Suspense } from "react";
import useProduct from "../hooks/useProduct";

export default function Product({ product }) {
  let { handleAddProduct } = useProduct();

  const ImageSite = lazy(() => import("./ImageSite"));

  return (
    <li className="product" id={product.id}>
      <Suspense fallback={<div>Loading...</div>}>
        <ImageSite
          className="product-image"
          width={180}
          height={180}
          image={product.image}
        />
      </Suspense>

      <h3 className="product-name">{product.name}</h3>

      <h3 className="product-price">
        R$ {product.price.toFixed(2).replace(".", ",")}
      </h3>

      <button
        className="product-button"
        onClick={(e) => handleAddProduct(product, e)}
      >
        Comprar
      </button>
    </li>
  );
}
