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
      {products.map((product) => (
        <ProductCard
          key={product.id + "dsa"}
          {...product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </section>
  );
};
