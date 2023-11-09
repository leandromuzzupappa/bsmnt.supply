"use client";

import { useEffect, useRef, useState } from "react";
import { hideMouseIndicator } from "@atoms/MouseIndicator/MouseIndicator";
import styles from "./CartButton.module.css";

interface ICartButtonProps {
  isOpen: boolean;
  qty: number;
  onClick: () => void;
}

export const CartButton = ({ isOpen, qty = 0, onClick }: ICartButtonProps) => {
  const cartBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const cartButton = cartBtnRef.current;

    if (!cartButton) return;

    cartButton.addEventListener("mouseenter", () => {
      hideMouseIndicator.value = true;
    });

    cartButton.addEventListener("mouseleave", () => {
      hideMouseIndicator.value = false;
    });

    return () => {
      cartButton.removeEventListener("mouseenter", () => {
        hideMouseIndicator.value = true;
      });

      cartButton.removeEventListener("mouseleave", () => {
        hideMouseIndicator.value = false;
      });
    };
  }, []);

  return (
    <button
      ref={cartBtnRef}
      className={styles.cartButton}
      onClick={onClick}
      data-open={isOpen}
    >
      <span className={styles.cartButtonTextClose} aria-hidden={!isOpen}>
        → Close
      </span>
      <span className={styles.cartButtonText} aria-hidden={isOpen}>
        Cart (<span>{qty}</span>)
      </span>
    </button>
  );
};
