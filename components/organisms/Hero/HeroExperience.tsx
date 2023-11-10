"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { ThingGeometry } from "@atoms/Geometries/ThingGeometry";

export const HeroExperience = () => {
  const leftThingRef = useRef<THREE.Group>(null);
  const rightThingRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const leftThing = leftThingRef.current;
    const rightThing = rightThingRef.current;

    if (!leftThing || !rightThing) return;

    leftThing.rotation.x = clock.getElapsedTime() / 2;
    leftThing.rotation.y = clock.getElapsedTime() * 1.1;
    rightThing.rotation.x = clock.getElapsedTime();
  });

  useEffect(() => {
    const leftThing = leftThingRef.current;
    const rightThing = rightThingRef.current;

    if (!leftThing || !rightThing) return;

    gsap.fromTo(
      [leftThing.position, rightThing.position],
      {
        y: -5,
      },
      {
        y: -1.5,
        duration: 1,
        delay: 0.8,
        stagger: 0.2,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      [leftThing.scale, rightThing.scale],
      {
        x: 0,
        y: 0,
        z: 0,
      },
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 1,
        delay: 0.8,
        stagger: 0.2,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <>
      {/* <OrbitControls /> */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <ThingGeometry
          selfRef={leftThingRef}
          position={[-9, -1.5, 0]}
          scale={[0, 0, 0]}
        />
      </Float>

      <Float speed={1} rotationIntensity={3} floatIntensity={1}>
        <ThingGeometry
          selfRef={rightThingRef}
          position={[9, -1.5, 0]}
          scale={[0.5, 0.5, 0.5]}
        />
      </Float>

      <EffectComposer>
        <Bloom luminanceThreshold={0.6} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.1} />
      </EffectComposer>
    </>
  );
};
