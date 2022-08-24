import React, { createContext, useContext, useState } from "react";

import { ShopingCartItem } from "../components/ShopingCartItem";

const ShopingCartContext = createContext({});

export function UseShopingContext() {
  return useContext(ShopingCartContext);
}

export function ShopingProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItem.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQnty(id) {
    let exits = cartItem.find((item) => item.id === id);
    if (exits) {
      return exits.quantity;
    } else {
      return 0;
    }
  }

  function onAdd(id) {
    const exist = cartItem.find((item) => item.id === id);
    if (exist) {
      setCartItem(
        cartItem.map((item) =>
          item.id === id ? { ...exist, quantity: exist.quantity + 1 } : item
        )
      );
    } else {
      setCartItem([...cartItem, { id, quantity: 1 }]);
    }
    return true;
  }

  function decrementCart(id) {
    let exist = cartItem.find((item) => item.id === id);
    if (exist.quantity === 1) {
      setCartItem(cartItem.filter((item) => item.id !== id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === id ? { ...exist, quantity: exist.quantity - 1 } : item
        )
      );
    }
  }

  function removeCart(id) {
    setCartItem((cartItem) => {
      return cartItem.filter((item) => item.id !== id);
    });
  }

  return (
    <ShopingCartContext.Provider
      value={{
        getItemQnty,
        decrementCart,
        removeCart,
        onAdd,
        openCart,
        closeCart,
        cartItem,
        cartQuantity,
      }}
    >
      {children}
    </ShopingCartContext.Provider>
  );
}
