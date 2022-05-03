import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import { Products } from "../Products";
import { UlStyled } from "./style";

export const Cart = () => {
  // const cartStorage = JSON.parse(localStorage.getItem("cart")) || [];
  
  const {cart, removeFromCart} = useContext(CartContext)

  const totalCart = cart.reduce(
    (prevValue, currValue) => prevValue + currValue.price * currValue.quantity,
    0
  );

  return (
    <UlStyled>
      {cart.length === 0 ? (
        <div>
          <h3>Você ainda não tem produtos adicionados ao carrinho!</h3>
          <img
            src="https://c.tenor.com/KxO3nLRhygkAAAAC/adventure-time-bmo.gif"
            alt="Bmo"
          ></img>
        </div>
      ) : (
        <>
          <h3>Carrinho</h3>
          {cart.map((product) => {
            return (
              <Products
                key={product.id}
                product={product}
                isCart={true}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </>
      )}
      <p className="total-p">Total: R$ {totalCart},00</p>
    </UlStyled>
  );
};
