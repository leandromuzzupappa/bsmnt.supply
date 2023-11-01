"use client";

import { useEffect, useRef, createRef } from "react";
import EyeIcon from "@atoms/Icons/EyeIcon";

import styles from "./Header.module.css";
import { ReactComponent as BasementLogo } from "@assets/images/logo.svg";

export const Header = () => {
  const eyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ojito = eyeRef.current;

    if (!ojito) return;

    console.log(ojito);
  }, [eyeRef]);

  return (
    <header className={styles.header}>
      <h1>dsadas</h1>

      <div className="header-icons">
        <EyeIcon selfRef={eyeRef} />
      </div>

      <button>cart (0)</button>
    </header>
  );
};
