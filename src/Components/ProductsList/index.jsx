import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import { ProductsContext } from "../../Providers/Products";
import { Products } from "../Products";
import { ContainerDiv, UlStyled } from "./style";

export const ProductsList = () => {
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <ContainerDiv>
        <h3>
          Escolha o deck de cartas do seu desenho favorito e divirta-se com seus
          amigos!
        </h3>
      </ContainerDiv>
      <UlStyled>
        {products.map((product) => {
          return (
            <Products
              key={product.id}
              product={product}
              isCart={false}
              addToCart={addToCart}
            />
          );
        })}
      </UlStyled>
    </>
  );
};
