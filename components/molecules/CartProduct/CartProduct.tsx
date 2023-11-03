import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./CartProduct.module.css";
import { IProductCart } from "@/data/interfaces/product";

const sizes = ["S", "M", "L", "XL"];

export const CartProduct = ({
  id,
  name,
  price,
  image,
  options,
  quantity,
}: IProductCart) => {
  const [qty, setQty] = useState(quantity || 1);
  const [size, setSize] = useState(options.size || "S");

  return (
    <article className={styles.cartProduct}>
      <div className={styles.cartProductImage}>
        <Image src={image} alt={name} width={226} height={218} />
      </div>
      <div className={styles.cartProductInfo}>
        <p className={styles.cartProductName}>{name}</p>
        <p className={styles.cartProductDesc}>Unisex Basic Softstyle</p>

        <p className={styles.cartProductQty}>
          QUANTITY:
          <span>
            <button>-</button>
            {quantity}
            <button>+</button>
          </span>
        </p>
        <p className={styles.cartProductOptions}>
          SIZE:
          <span>
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSize(size)}
                data-selected={size === options.size}
              >
                {size}
              </button>
            ))}
          </span>
        </p>
        <p className={styles.cartProductPrice}>${price}</p>
      </div>
    </article>
  );
};
