"use client";
import * as THREE from "three";
import { useMemo } from "react";
import { Edges, MeshTransmissionMaterial } from "@react-three/drei";

interface IThingGeometryProps {
  position: [number, number, number];
  scale: [number, number, number];
  selfRef?: React.MutableRefObject<THREE.Group | null>;
}

export const ThingGeometry = ({ selfRef, ...props }: IThingGeometryProps) => {
  const sizesObject = useMemo(() => {
    const sizes = [
      [1.8, 0.33, 0.33],
      [0.33, 1.8, 0.33],
      [0.33, 0.33, 1.8],
    ];

    return sizes.map((size) => new THREE.Vector3(...size));
  }, []);

  return (
    <group ref={selfRef} {...props}>
      {sizesObject.map((size, index) => (
        <mesh castShadow receiveShadow key={index}>
          <boxGeometry args={[size.x, size.y, size.z]} />
          <MeshTransmissionMaterial
            anisotropy={1}
            backside
            backsideThickness={10.1}
            distortion={11}
            distortionScale={0.2}
            temporalDistortion={0.1}
            thickness={3}
          />

          <Edges scale={1} renderOrder={10}>
            <meshBasicMaterial color="#FFF" depthTest={true} />
          </Edges>
        </mesh>
      ))}
    </group>
  );
};
