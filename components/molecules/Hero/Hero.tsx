"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Headline } from "@atoms/Headline/Headline";
import { Bubble } from "@atoms/Bubble/Bubble";
import styles from "./Hero.module.css";

export const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bubbleLeftRef = useRef<HTMLSpanElement>(null);
  const bubbleRightRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const headline = headlineRef.current;
    if (!headline) return;

    const headlineSpans = headline.querySelectorAll("span");
    const supplySpan = headlineSpans[1];

    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power4.out",
      },
    });

    handleHeadlineAnimation({ tl, headlineSpans });

    if (!bubbleLeftRef.current || !bubbleRightRef.current) return;
  }, []);

  const handleHeadlineAnimation = ({
    tl,
    headlineSpans,
  }: {
    tl: gsap.core.Timeline;
    headlineSpans: NodeListOf<HTMLSpanElement>;
  }) => {
    tl.fromTo(
      headlineSpans,
      {
        opacity: 1,
        y: 100,
      },
      {
        opacity: 1,
        stagger: 0.1,
        y: 0,
      }
    );
  };

  return (
    <section className={styles.hero}>
      <Headline
        as="h1"
        className={styles.heroHeadline}
        copy={[
          { text: "Basement", variant: "fill" },
          { text: "Supply", variant: "outline", position: "center" },
        ]}
        selfRef={headlineRef}
      />
      <Bubble
        selfRef={bubbleLeftRef}
        className={styles.heroBubbleLeft}
        copy="EST"
      />
      <Bubble
        selfRef={bubbleRightRef}
        className={styles.heroBubbleRight}
        copy="2K19"
      />
    </section>
  );
};
