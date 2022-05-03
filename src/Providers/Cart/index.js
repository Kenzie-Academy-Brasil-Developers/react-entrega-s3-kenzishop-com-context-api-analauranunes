import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const cartStorage = JSON.parse(localStorage.getItem("cart")) || [];

  const [cart, setCart] = useState(cartStorage);

  const addToCart = (product) => {
    const alreadyInCart = cart.find((prod) => prod.id === product.id);
    const productIndex = cart.findIndex((prod) => prod === product);

    if (!alreadyInCart) {
      product.quantity = 1;
      console.log(product);
      const newProductList = [...cart, product];
      setCart(newProductList);
      localStorage.setItem("cart", JSON.stringify(newProductList));

      toast.success(`${product.name} adicionado ao carrinho com sucesso!`);
    } else {
      console.log(product);
      cart[productIndex].quantity += 1;
      setCart(cart);
      localStorage.setItem("cart", JSON.stringify(cart));

      toast.success(
        `Adicionado mais uma unidade de ${product.name} ao carrinho!`
      );
    }
  };

  const removeFromCart = (product) => {
    const productIndex = cart.findIndex((prod) => prod === product);

    if (product.quantity > 1) {
      cart[productIndex].quantity -= 1;
      setCart([...cart]);
      localStorage.setItem("cart", JSON.stringify(cart));

      toast.success(
        `Uma unidade de ${product.name} excluído do carrinho com sucesso!`
      );
    } else {
      const filteredList = cart.filter((prods) => prods.id !== product.id);
      setCart(filteredList);
      localStorage.setItem("cart", JSON.stringify(filteredList));

      toast.success(`${product.name} excluído do carrinho com sucesso!`);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
