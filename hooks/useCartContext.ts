"use client";

import { useState, useEffect } from "react";
import { IProductCart } from "@/data/interfaces/product";

function loadCart(): IProductCart[] {
  if (typeof window !== "undefined") {
    const _cart = localStorage.getItem("cart");
    return _cart ? JSON.parse(_cart) : [];
  } else {
    console.log("window is undefined");
    return [];
  }
}

function persistCart(cart: IProductCart[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    console.log("window is undefined - product not persisted");
  }
}

export interface ICartContext {
  cart: IProductCart[];
  addToCart: (product: IProductCart) => void;
  removeFromCart: (productId: string) => void;
  getTotals: () => number;
  getQuantity: () => number;
  increaseOne: (productId: string) => void;
  decreaseOne: (productId: string) => void;
}

export const useCartContext = () => {
  const [cart, setCart] = useState(loadCart());

  useEffect(() => {
    persistCart(cart);
  }, [cart]);

  const addToCart = (product: IProductCart) => {
    const productIndex = cart.findIndex(({ id }) => id === product.id);

    if (productIndex > -1) {
      const newCart = [...cart];
      newCart[productIndex].quantity += product.quantity;
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId: string) => {
    const newCart = cart.filter(({ id }) => id !== productId);
    setCart(newCart);
  };

  const increaseOne = (productId: string) => {
    const newCart = [...cart];
    const productIndex = cart.findIndex(({ id }) => id === productId);
    newCart[productIndex].quantity += 1;
    setCart(newCart);
  };

  const decreaseOne = (productId: string) => {
    const newCart = [...cart];
    const productIndex = cart.findIndex(({ id }) => id === productId);

    if (newCart[productIndex].quantity === 1) {
      removeFromCart(productId);
      return;
    }

    newCart[productIndex].quantity -= 1;
    setCart(newCart);
  };

  const getTotals = () => {
    const total = cart.reduce((acc: number, item: IProductCart) => {
      return acc + item.price * item.quantity;
    }, 0);

    return total;
  };

  const getQuantity = () => {
    return cart.reduce((acc, { quantity }) => acc + quantity, 0);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    getTotals,
    getQuantity,
    increaseOne,
    decreaseOne,
  };
};
