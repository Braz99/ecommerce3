import { useHistory } from "react-router-dom";
import "../../styles/checkout.css";

export default function Checkout() {
  let history = useHistory();

  function handleHome(event) {
    event.preventDefault();
    history.push("/");
  }

  return (
    <main className="checkout-container">
      <h2 className="checkout-title">Compra Finalizada</h2>
      <p>Muito obrigado pelo apoio, tua compra chegará em breve! </p>
      <button className="checkout-button" onClick={handleHome}>
        Voltar
      </button>
    </main>
  );
}
