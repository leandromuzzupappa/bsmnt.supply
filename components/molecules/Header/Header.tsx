"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Icon } from "@atoms/Icons/Icon";
import { CartButton } from "@atoms/CartButton/CartButton";

import styles from "./Header.module.css";
import { IconNames } from "@/data/enums/Icons";

export const Header = () => {
  const eyeRef = useRef<HTMLSpanElement>(null);

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
        <Icon name={IconNames.EYE} selfRef={eyeRef} />
        <Icon name={IconNames.UHD} />
        <Icon name={IconNames.ALERT} />
      </div>

      <CartButton />
    </header>
  );
};
