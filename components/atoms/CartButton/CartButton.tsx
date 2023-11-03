"use client";

import { useRef, useState } from "react";
import styles from "./CartButton.module.css";

interface ICartButtonProps {
  isOpen: boolean;
  qty: number;
  onClick: () => void;
}

export const CartButton = ({ isOpen, qty = 0, onClick }: ICartButtonProps) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const cartBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <button className={styles.cartButton} onClick={onClick} data-open={isOpen}>
      <span className={styles.cartButtonTextClose} aria-hidden={!isOpen}>
        → Close
      </span>
      <span className={styles.cartButtonText} aria-hidden={isOpen}>
        Cart (<span>{qty}</span>)
      </span>
    </button>
  );
};
