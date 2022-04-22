import { lazy, Suspense, useMemo } from "react";

export default function MainHome() {
  let data = useMemo(() => require("../api/products.json"), []);

  const Product = lazy(() => import("./Product"));

  return (
    <ul className="home-list">
      <Suspense fallback={<div>Loading...</div>}>
        {data.map((product, index = product.id) => (
          <Product key={index} product={product} />
        ))}
      </Suspense>
    </ul>
  );
}
