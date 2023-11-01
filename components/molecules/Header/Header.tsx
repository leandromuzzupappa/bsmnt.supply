"use client";

import { useEffect, useRef, createRef } from "react";
import { Icon } from "@atoms/Icons/Icon";

import styles from "./Header.module.css";
import { IconNames } from "@/data/enums/Icons";

export const Header = () => {
  const eyeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ojito = eyeRef.current;

    if (!ojito) return;

    console.log(ojito);
  }, [eyeRef]);

  return (
    <header className={styles.header}>
      <Icon name={IconNames.BASEMENT} />

      <div className={styles.headerIcons}>
        <Icon name={IconNames.RADIO} />
        <Icon name={IconNames.HD} />
        <Icon name={IconNames.EYE} selfRef={eyeRef} />
        <Icon name={IconNames.UHD} />
        <Icon name={IconNames.ALERT} />
      </div>

      <button>cart (0)</button>
    </header>
  );
};
