import React from "react";
import { useDispatch } from "react-redux";
import deleteProduct from "../store/actions/deleteProduct";
import PriceCalculator from "./PriceCalculator";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export default function CartProduct({ product }) {
  const dispatch = useDispatch();

  function handleDeleteProduct() {
    dispatch(deleteProduct(product.id));

    toast.error("Produto removido do carrinho!");
  }

  return (
    <li className="product-cart" id={product.id}>
      <div className="product-cart-name-image">
        <img
          className="product-cart-image"
          src={`assets/${product.image}`}
          alt={product.image}
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
            onClick={() => handleDeleteProduct()}
          >
            Remover <FaTrashAlt />
          </button>
        </div>
      </div>
    </li>
  );
}
