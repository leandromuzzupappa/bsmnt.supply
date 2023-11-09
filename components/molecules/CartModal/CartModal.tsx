"use client";

import { useContext, useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Headline } from "@atoms/Headline/Headline";
import { CartProduct } from "@molecules/CartProduct/CartProduct";
import { CartContext } from "@/contexts/CartContext";
import styles from "./CartModal.module.css";
import { IProductCart } from "@/data/interfaces/product";

interface ICartModalProps {
  isOpen: boolean;
  onCloseCart: () => void;
}

export const CartModal = ({ isOpen, onCloseCart }: ICartModalProps) => {
  const { cart, getTotals, increaseOne, decreaseOne } = useContext(CartContext);
  const [productList, setProductList] = useState<IProductCart[]>([]);
  const [total, setTotal] = useState(0);

  const cartModalRef = useRef<HTMLDivElement>(null);
  const cartOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cartModal = cartModalRef.current;
    const cartOverlay = cartOverlayRef.current;

    if (cartModal && cartOverlay) {
      const openCart = () => {
        gsap.to([cartModal, cartOverlay], {
          display: "block",
          autoAlpha: 1,
          x: 0,

          duration: 0.8,
          ease: "power2.inOut",
        });
      };

      const closeCart = () => {
        gsap.to([cartModal, cartOverlay], {
          display: "none",
          autoAlpha: 0,
          x: 100,
        });
      };

      if (isOpen) openCart();
      else closeCart();

      return () => {
        gsap.killTweensOf([cartModal, cartOverlay, openCart, closeCart]);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    setProductList(cart);
    setTotal(getTotals());
  }, [cart, getTotals]);

  return (
    <>
      <div ref={cartModalRef} className={styles.cartModal} data-show={isOpen}>
        <Headline
          as="h3"
          className={styles.cartTitle}
          copy={[
            {
              text: "Your",
              variant: "fill",
            },
            {
              text: "Cart",
              variant: "outline",
            },
          ]}
        />

        <ul className={styles.cartModalList}>
          {productList.map((product: IProductCart) => (
            <li key={product.id}>
              <CartProduct
                {...product}
                onAdd={() => increaseOne(product.id)}
                onRemove={() => decreaseOne(product.id)}
              />
            </li>
          ))}
        </ul>

        <div className={styles.cartModalActions}>
          <p>
            Total: <span>${total.toFixed(2)}</span>
          </p>
          <button className={styles.cartModalCheckout}>Checkout</button>
        </div>
      </div>
      <div
        ref={cartOverlayRef}
        className={styles.cartOverlay}
        data-show={isOpen}
        onClick={onCloseCart}
      ></div>
    </>
  );
};
