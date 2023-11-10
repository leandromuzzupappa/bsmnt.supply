"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import { Headline } from "@atoms/Headline/Headline";
import { Bubble } from "@atoms/Bubble/Bubble";
import { HeroExperience } from "./HeroExperience";
import styles from "./Hero.module.css";
import { useWindowSize } from "@/hooks/useWindowSize";

export const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bubbleLeftRef = useRef<HTMLSpanElement>(null);
  const bubbleRightRef = useRef<HTMLSpanElement>(null);

  const windowSize = useWindowSize();

  useEffect(() => {
    const headline = headlineRef.current;
    if (!headline) return;

    const headlineSpans = headline.querySelectorAll("span");
    const supplySpan = headlineSpans[1];

    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power4.out",
        delay: 0.5,
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
        opacity: 0,
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

      {windowSize.width > 768 && (
        <div className={styles.canvasWrapper}>
          <Canvas
            orthographic
            camera={{ zoom: 75 }}
            gl={{ antialias: false, alpha: true }}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0);
              gl.clearDepth();
              gl.autoClear = false;
            }}
          >
            <HeroExperience />
          </Canvas>
        </div>
      )}
    </section>
  );
};
