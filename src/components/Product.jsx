import useProduct from "../hooks/useProduct";

export default function Product({ product }) {
  let { handleAddProduct } = useProduct();

  return (
    <li className="product" id={product.id}>
      <img
        className="product-image"
        src={`assets/${product.image}`}
        alt={product.image}
      />

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
