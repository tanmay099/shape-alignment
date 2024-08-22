import { ThreeEvent } from "@react-three/fiber";
import { useState } from "react";
import { Vector3 } from "three";

type IPoint = {
  position: [number, number, number] | Vector3;
  onDrag: (e: any) => void;
  id: string
};

export function Point({ position, onDrag }: IPoint) {
  const [active, setActive] = useState(false);
  const [hovered, setHover] = useState(false);
  const down = (event: any) => {
    event.stopPropagation();
    event.target.setPointerCapture(event.pointerId);
    setActive(true);
  };
  const up = (event: any) => {
    setActive(false);
  };
  const move = (event: ThreeEvent<PointerEvent>) => {
    if (active && onDrag) onDrag(event.unprojectedPoint.toArray());
  };
  return (
    <mesh
      position={position}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onPointerDown={down}
      //@ts-ignore
      onLostPointerCapture={up}
      onPointerUp={up}
      onPointerMove={move}>
      <sphereGeometry args={[10, 16, 16]} />
      <meshBasicMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
