import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import addToCart from "../store/actions/addToCart";
import updateProduct from "../store/actions/updateProduct";

export default function Product({ product }) {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state);

  let model = {
    id: 0,
    name: "",
    price: 0,
    image: "",
    quantity: 1,
  };

  function handleAddProduct(product, e) {
    e.preventDefault();
    model.id = product.id;
    model.name = product.name;
    model.price = product.price;
    model.image = product.image;

    const find = cart.find((item) => item.id === model.id);

    if (find) {
      dispatch(updateProduct(model.id));
    } else {
      dispatch(addToCart(model));
    }

    toast.success("Produto adicionado ao carrinho!");
  }

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
        Adicionar ao carrinho
      </button>
    </li>
  );
}
