import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import addToCart from "../store/actions/addToCart";
import updateProduct from "../store/actions/updateProduct";
import removeProduct from "../store/actions/removeProduct";
import deleteProduct from "../store/actions/deleteProduct";

export default function useProduct() {
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

  function handleDeleteProduct(product) {
    dispatch(deleteProduct(product.id));

    toast.error("Produto removido do carrinho!");
  }

  function handleIncrease(id) {
    dispatch(updateProduct(id));
  }

  function handleDecrease(id) {
    dispatch(removeProduct(id));
  }

  return {
    handleAddProduct,
    handleDeleteProduct,
    handleIncrease,
    handleDecrease,
  };
}
