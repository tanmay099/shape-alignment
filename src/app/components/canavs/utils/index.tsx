import { CircleShape } from "../../circle";
import { PolyLine } from "../../polyline";
import { Rectangle } from "../../Rectangle";
import { Triangle } from "../../triangle";

const defaultPoints: Record<string, any> = {
  RECTANGLE: [
    [-100, 100, 0],
    [0, 100, 0],
    [0, 0, 0],
    [-100, 0, 0],
  ],
  TRIANGLE: [
    [-100, 100, 0],
    [0, 100, 0],
    [0, 0, 0],
  ],
  CIRCLE: [50, 60] as [number, number],
  LINE: [
    [0, 100, 0],
    [100, -100, 0],
  ],
};

const SHAPE_CONSTANT = {
  RECTANGLE: "RECTANGLE",
  TRIANGLE: "TRIANGLE",
  CIRCLE: "CIRCLE",
  LINE: "LINE",
};

export function generateShape(
  shape: string,
  id: string
): JSX.Element | undefined {
  if (shape === SHAPE_CONSTANT.RECTANGLE)
    return <Rectangle id={id} defaultPoints={defaultPoints.RECTANGLE} />;
  if (shape === SHAPE_CONSTANT.TRIANGLE)
    return <Triangle id={id} defaultPoints={defaultPoints.TRIANGLE} />;
  if (shape === SHAPE_CONSTANT.CIRCLE)
    return <CircleShape id={id} args={defaultPoints.CIRCLE} />;
  if (shape === SHAPE_CONSTANT.LINE)
    return (
      <PolyLine
        id={id}
        defaultStart={defaultPoints.LINE[0]}
        defaultEnd={defaultPoints.LINE[1]}
      />
    );
  return undefined;
}
