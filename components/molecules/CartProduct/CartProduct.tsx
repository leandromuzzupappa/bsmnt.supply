"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./CartProduct.module.css";
import { IProductCart } from "@/data/interfaces/product";

const sizes = ["S", "M", "L", "XL"];

interface ICartProductProps extends IProductCart {
  onAdd: () => void;
  onRemove: () => void;
}

export const CartProduct = ({
  id,
  name,
  price,
  image,
  options,
  quantity,
  onAdd,
  onRemove,
}: ICartProductProps) => {
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
            <button onClick={onRemove}>-</button>
            {quantity}
            <button onClick={onAdd}>+</button>
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
