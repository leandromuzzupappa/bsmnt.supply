import { ReactNode } from "react";
import { CartProvider } from "@/contexts/CartContext";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return <CartProvider>{children}</CartProvider>;
};
