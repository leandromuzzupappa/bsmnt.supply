"use client";

import { ProductCard } from "@/components/molecules/ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";
import { products } from "@/data/products/products";

export const ProductGrid = () => {
  const handleAddToCart = (id: string): { id: string } => {
    console.log("pepitos", id);

    return { id };
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
