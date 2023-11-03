"use client";

import { createContext, ReactNode } from "react";
import { ICartContext, useCartContext } from "@/hooks/useCartContext";

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as ICartContext);
export const CartProvider = ({ children }: CartProviderProps) => {
  const cartContextProps = useCartContext();
  return (
    <CartContext.Provider value={cartContextProps}>
      {children}
    </CartContext.Provider>
  );
};
