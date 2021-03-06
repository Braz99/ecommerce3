import PriceCalculator from "./PriceCalculator";
import useProduct from "../hooks/useProduct";
import { FaTrashAlt } from "react-icons/fa";
import ImageSite from "./ImageSite";

export default function CartProduct({ product }) {
  let { handleDeleteProduct } = useProduct();

  return (
    <li className="product-cart" id={product.id}>
      <div className="product-cart-name-image">
        <ImageSite
          className="product-cart-image"
          width={180}
          height={180}
          image={product.image}
          name={product.name}
        />

        <h3 className="product-cart-name">{product.name}</h3>
      </div>

      <div className="product-cart-price-value-remove">
        <div className="product-cart-price-value">
          <h3 className="product-cart-price">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </h3>

          <PriceCalculator productId={product.id} quantity={product.quantity} />
        </div>

        <div className="product-cart-button-div">
          <button
            className="product-cart-button"
            onClick={() => handleDeleteProduct(product)}
          >
            Remover <FaTrashAlt />
          </button>
        </div>
      </div>
    </li>
  );
}
