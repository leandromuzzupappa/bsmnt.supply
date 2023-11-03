"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import { Icon } from "@atoms/Icons/Icon";
import { CartButton } from "@atoms/CartButton/CartButton";
import { CartModal } from "@molecules/CartModal/CartModal";
import styles from "./Header.module.css";
import { IconNames } from "@/data/enums/Icons";
import { CartContext } from "@/contexts/CartContext";

export const Header = () => {
  const { getQuantity } = useContext(CartContext);
  const [cartOpen, setCartOpen] = useState(false);

  const onCardButtonClick = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <Icon
          name={IconNames.BASEMENT}
          className={`${styles.headerLogo} ${styles.headerLogoDesktop}`}
        />
        <Icon
          name={IconNames.FAVICON}
          className={`${styles.headerLogo} ${styles.headerLogoMobile}`}
        />
        <p className={styles.headerLogoReader}>Basement.</p>
      </Link>

      <div className={styles.headerIcons} aria-hidden="true">
        <Icon name={IconNames.RADIO} />
        <Icon name={IconNames.HD} />
        <Icon name={IconNames.EYE} />
        <Icon name={IconNames.UHD} />
        <Icon name={IconNames.ALERT} />
      </div>

      <CartButton
        onClick={onCardButtonClick}
        isOpen={cartOpen}
        qty={getQuantity()}
      />

      <CartModal isOpen={cartOpen} onCloseCart={() => setCartOpen(false)} />
    </header>
  );
};
