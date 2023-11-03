"use client";
import { useContext, useRef, useEffect } from "react";
import { ProductCard } from "@/components/molecules/ProductCard/ProductCard";
import { CartContext } from "@/contexts/CartContext";
import styles from "./ProductGrid.module.css";
import { products } from "@/data/products/products";
import { IProductCart } from "@/data/interfaces/product";

export const ProductGrid = () => {
  const { cart, addToCart } = useContext(CartContext);

  const handleAddToCart = (product: IProductCart) => {
    addToCart(product);
  };

  return (
    <section className={styles.productGrid}>
      <ul>
        {products.map((product) => (
          <li key={product.id + "dsa"}>
            <ProductCard {...product} onAddToCart={handleAddToCart} />
          </li>
        ))}
      </ul>
    </section>
  );
};
