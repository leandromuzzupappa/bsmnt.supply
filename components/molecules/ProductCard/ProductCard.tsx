"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@atoms/Icons/Icon";
import { Headline } from "@atoms/Headline/Headline";
import styles from "./ProductCard.module.css";
import { IconNames } from "@/data/enums/Icons";
import { IProductCart } from "@/data/interfaces/product";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  onAddToCart: (product: IProductCart) => void;
}

export const ProductCard = ({
  id,
  image,
  name,
  price,
  onAddToCart,
}: ProductCardProps) => {
  const handleProductName = (str: string) => {
    return str.replace(/\s/g, "-").toLowerCase();
  };

  const handleAddToCart = () => {
    const product = {
      id,
      image,
      name,
      price,
      options: {
        size: "M",
      },
      quantity: 1,
    };

    onAddToCart(product);
  };

  return (
    <article className={styles.productCard}>
      <button className={styles.cardImage} onClick={handleAddToCart}>
        <Image
          src={image}
          alt={name}
          width={440}
          height={577}
          className="my-auto"
          priority
        />

        <span className={styles.cardIndicator}>
          <Icon name={IconNames.WORLD} />
          <Headline
            as="p"
            className={styles.indicatorHeadline}
            copy={[{ text: "Add to cart", variant: "outline" }]}
          />
        </span>
      </button>
      <div className={styles.cardInfo}>
        <Link href={`/p/${id}/${handleProductName(name)}`}>
          <h4>{name}</h4>
        </Link>
        <p>${price}</p>
      </div>
    </article>
  );
};
