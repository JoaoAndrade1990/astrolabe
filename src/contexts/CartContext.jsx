import { createContext, useState } from 'react';

const CartContext = createContext();

export default CartContext;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
