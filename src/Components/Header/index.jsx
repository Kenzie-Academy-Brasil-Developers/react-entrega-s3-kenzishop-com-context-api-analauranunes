import { BsCart2 } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { HeaderStyled } from "./style";

export const Header = () => {

  const history = useHistory()

  return (
    <HeaderStyled>
      <h1 onClick={() => history.push("/")}>Kenzie <span>Cartoon</span></h1>
      <div onClick={() => history.push("/cart")}>
        <BsCart2 className="cart-img"/>
        <p>Carrinho</p>
      </div>
    </HeaderStyled>
  );
};
