"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@atoms/Icons/Icon";
import { Headline } from "@atoms/Headline/Headline";
import styles from "./ProductCard.module.css";
import { IconNames } from "@/data/enums/Icons";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  onAddToCart: (id: string) => { id: string };
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

  return (
    <article className={styles.productCard}>
      <button className={styles.cardImage} onClick={() => onAddToCart(id)}>
        <Image
          src={image}
          alt={name}
          width={440}
          height={577}
          className="my-auto"
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
