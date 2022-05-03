import { LiStyled } from "./style";
import { BsTrash } from "react-icons/bs";

export const Products = ({
  product,
  isCart = false,
  addToCart,
  removeFromCart,
}) => {
  return (
    <LiStyled>
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>R$ {product.price},00</p>
      {isCart ? (
        <>
          <span>{product.quantity}x</span>
          <button onClick={() => removeFromCart(product)}>
            <BsTrash />
          </button>
        </>
      ) : (
        <button onClick={() => addToCart(product)}>
          Adicionar ao carrinho
        </button>
      )}
    </LiStyled>
  );
};
