"use client";

import { useRef, useState } from "react";
import styles from "./CartButton.module.css";

interface ICartButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const CartButton = ({ isOpen, onClick }: ICartButtonProps) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const cartBtnRef = useRef<HTMLButtonElement>(null);

  const [cartCount, setCartCount] = useState(12);

  return (
    <button className={styles.cartButton} onClick={onClick} data-open={isOpen}>
      <span className={styles.cartButtonTextClose} aria-hidden={!isOpen}>
        → Close
      </span>
      <span className={styles.cartButtonText} aria-hidden={isOpen}>
        Cart (<span>{cartCount}</span>)
      </span>
    </button>
  );
};
