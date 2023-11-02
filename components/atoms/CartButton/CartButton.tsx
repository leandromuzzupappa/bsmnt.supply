"use client";

import { useState } from "react";
import styles from "./CartButton.module.css";

export const CartButton = () => {
  const [cartCount, setCartCount] = useState(12);

  return (
    <button className={styles.cartButton}>
      Cart (<span>{cartCount}</span>)
    </button>
  );
};
