"use client";
import { useRef, useEffect } from "react";
import { signal, computed, effect, useSignalEffect } from "@preact/signals";
import { gsap } from "gsap";
import styles from "./MouseIndicator.module.css";

export const hideMouseIndicator = signal(false);

export const MouseIndicator = () => {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const indicator = indicatorRef.current;

    if (!indicator) return;

    window.onpointermove = (event) => {
      const { pageX, pageY } = event;

      gsap.to(indicator, {
        opacity: hideMouseIndicator.value ? 0 : 1,
        left: `${pageX}px`,
        top: `${pageY}px`,
        duration: 0.3,
        ease: "sin.out",
      });
    };
  }, []);

  return <div ref={indicatorRef} className={styles.indicator}></div>;
};
