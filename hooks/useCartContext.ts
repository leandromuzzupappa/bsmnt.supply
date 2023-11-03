"use client";

import { useState, useEffect } from "react";
import { IProductCart } from "@/data/interfaces/product";

function loadCart() {
  try {
    const _cart = localStorage.getItem("cart");
    return _cart ? JSON.parse(_cart) : [];
  } catch (error) {
    console.log(error);
  }
}

function persistCart(cart: IProductCart[]) {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.log(error);
  }
}

export interface ICartContext {
  cart: IProductCart[];
  addToCart: (product: IProductCart) => void;
  removeFromCart: (product: IProductCart) => void;
  getTotals: () => number;
}

export const useCartContext = () => {
  const [cart, setCart] = useState(loadCart());

  useEffect(() => {
    persistCart(cart);
  }, [cart]);

  const addToCart = (product: IProductCart) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product: IProductCart) => {
    setCart(cart.filter((item: IProductCart) => item.id !== product.id));
  };

  const getTotals = () => {
    const total = cart.reduce((acc: number, item: IProductCart) => {
      return acc + item.price * item.quantity;
    }, 0);

    return total;
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    getTotals,
  };
};
