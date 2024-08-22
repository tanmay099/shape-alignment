import { useState } from "react";
import { Point } from "../point";
import { Line } from "@react-three/drei";
import { Vector2, Vector3 } from "three";
import { useStore } from "@/app/store";

type IPolyLine = {
  defaultStart: Vector3 | [number, number, number];
  defaultEnd: Vector3 | [number, number, number];
  id: string;
};
export function PolyLine({ defaultStart, defaultEnd, id }: IPolyLine) {
  const [start, setStart] = useState(defaultStart);
  const [end, setEnd] = useState(defaultEnd);
  const removeShape = useStore((state) => state.removeShape);
  const handleRightClick = () => {
    removeShape(id);
  };
  return (
    <group onContextMenu={handleRightClick}>
      <Line points={[start, end]} lineWidth={3} color="lightgray" />
      <Point id={id} position={start} onDrag={setStart} />
      <Point id={id} position={end} onDrag={setEnd} />
    </group>
  );
}
