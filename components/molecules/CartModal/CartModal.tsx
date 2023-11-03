import { useContext, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Headline } from "@atoms/Headline/Headline";
import { CartProduct } from "@molecules/CartProduct/CartProduct";
import { CartContext } from "@/contexts/CartContext";
import styles from "./CartModal.module.css";
import { IProductCart } from "@/data/interfaces/product";

const mockProductsCart = [
  {
    id: "1",
    name: "Product 1",
    price: 10,
    image: "/products/remera.png",
    options: {
      size: "S",
      color: "Black",
    },
    quantity: 1,
  },
  {
    id: "2",
    name: "Product 2",
    price: 23.99,
    image: "/products/buzo.png",
    options: {
      size: "M",
      color: "Black",
    },
    quantity: 2,
  },
  {
    id: "3",
    name: "Product 3",
    price: 12,
    image: "/products/gorrita.png",
    options: {
      size: "L",
      color: "Black",
    },
    quantity: 3,
  },
];

interface ICartModalProps {
  isOpen: boolean;
  onCloseCart: () => void;
}

const from = {
  display: "none",
  autoAlpha: 0,
  x: 100,
};

const to = {
  display: "block",
  autoAlpha: 1,
  x: 0,

  duration: 0.8,
  ease: "power2.inOut",
};

export const CartModal = ({ isOpen, onCloseCart }: ICartModalProps) => {
  const { cart } = useContext(CartContext);

  const cartModalRef = useRef<HTMLDivElement>(null);
  const cartOverlayRef = useRef<HTMLDivElement>(null);

  const openCart = () => {
    gsap.fromTo([cartModalRef.current, cartOverlayRef.current], from, to);
  };

  const closeCart = () => {
    gsap.fromTo([cartModalRef.current, cartOverlayRef.current], to, from);
  };

  useEffect(() => {
    if (isOpen) openCart();
    else closeCart();
  }, [isOpen]);

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
          {cart.map((product: IProductCart) => (
            <li key={product.id}>
              <CartProduct {...product} />
            </li>
          ))}
        </ul>

        <div className={styles.cartModalActions}>
          <p>
            Total: <span>$ 60.00</span>
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
