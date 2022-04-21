import Product from "./Product";

export default function MainHome() {
  let data = require("../api/products.json");
  return (
    <ul className="home-list">
      {data.map((product, index = product.id) => (
        <Product key={index} product={product} />
      ))}
    </ul>
  );
}
