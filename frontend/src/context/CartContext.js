import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  // ADD TO CART
  const addToCart = (product) => {

    const existing = cartItems.find(
      (item) => item.id === product.id
    );

    if (existing) {

      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1
        }
      ]);

    }
  };

  // INCREASE
  const increaseQty = (id) => {

    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  };

  // DECREASE
  const decreaseQty = (id) => {

    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // REMOVE
  const removeFromCart = (id) => {

    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );
  };

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart
      }}
    >

      {children}

    </CartContext.Provider>
  );
};