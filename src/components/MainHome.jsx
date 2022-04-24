import { useMemo } from "react";
import Product from "./Product";

export default function MainHome() {
  let data = require("../api/products.json");
  let dataMemo = useMemo(() => data, [data]);

  return (
    <ul className="home-list">
      {dataMemo.map((product, index = product.id) => (
        <Product key={index} product={product} />
      ))}
    </ul>
  );
}
