import React from "react";
import { useThree } from "@react-three/fiber";
import { Line, Text } from "@react-three/drei";

const WIDTH_RATIO = 1.9;
const SECTION_SIZE_HORIZONTAL = 50;
const SECTION_SIZE_VERTICAL = 50;

export const RulerHorizontal = ({ color = "black" }) => {
  const { size } = useThree();
  const offsetY = size.height / WIDTH_RATIO;

  let divisions = size.width / SECTION_SIZE_HORIZONTAL;
  let length = size.width;
  let x1 = -size.width;
  let y1 = -size.height + offsetY + 20;
  let y2 = -size.height + offsetY;
  let x2 = size.width;
  const createTicks = () => {
    const ticks = [];
    for (let i = 0; i <= divisions; i++) {
      const tickLength = i % 5 === 0 ? 25 : 12.5;
      const point = i * (length / divisions);
      ticks.push(
        <group>
          <Text fontSize={12} color={"black"} anchorX={point} anchorY={-y1}>
            {-point}
          </Text>
          <Line
            color={color}
            key={i}
            points={[
              [-point, y2, 0],
              [-point, y2 - tickLength, 0],
            ]}
            lineWidth={3}
          ></Line>
        </group>
      );
    }
    return ticks;
  };
  const createTicksRight = () => {
    const ticks = [];
    for (let i = 0; i <= divisions; i++) {
      const tickLength = i % 5 === 0 ? 25 : 12.5;
      const point = i * (length / divisions);
      ticks.push(
        <group>
          <Text fontSize={12} color={color} anchorX={-point} anchorY={-y1}>
            {point}
          </Text>
          <Line
            color={color}
            key={i}
            points={[
              [point, y2, 0],
              [point, y2 - tickLength, 0],
            ]}
            lineWidth={3}
          ></Line>
        </group>
      );
    }
    return ticks;
  };
  return (
    <group>
      <Line
        points={[
          [x1, y2, 0],
          [x2, y2, 0],
        ]}
        color={color}
        lineWidth={3}
      />
      {createTicks().map((line) => line)}
      {createTicksRight().map((line) => line)}
    </group>
  );
};


export const RulerVertical = ({ color = "black" }) => {
  const { size } = useThree();
  const offset = size.width / WIDTH_RATIO;

  let divisions = size.height / SECTION_SIZE_VERTICAL;
  let length = size.height;
  let x1 = -size.width + offset;
  let y1 = size.height;
  let y2 = -size.height;
  let x2 = -size.width + offset;
  let x3 = -size.width + offset;
  const createTicks = () => {
    const ticks = [];
    for (let i = 0; i <= divisions; i++) {
      const tickLength = i % 5 === 0 ? 25 : 12.5;
      const point = i * (length / divisions);
      ticks.push(
        <group key={i}>
          <Text fontSize={12} color={color} anchorX={-x1} anchorY={-point}>
            {point}
          </Text>
          <Line
            color={color}
            key={i}
            points={[
              [x1, point, 0],
              [x3 - tickLength, point, 0],
            ]}
            lineWidth={3}
          ></Line>
        </group>
      );
    }
    return ticks;
  };
  const createTicksRight = () => {
    const ticks = [];
    for (let i = 0; i <= divisions; i++) {
      const tickLength = i % 5 === 0 ? 25 : 12.5;
      const point = i * (length / divisions);
      ticks.push(
        <group>
          <Text fontSize={12} color={color} anchorX={-x1} anchorY={point}>
            {-point}
          </Text>
          <Line
            color={color}
            key={i}
            points={[
              [x1, -point, 0],
              [x3 - tickLength, -point, 0],
            ]}
            lineWidth={3}
          ></Line>
        </group>
      );
    }
    return ticks;
  };
  return (
    <group>
      <Line
        points={[
          [x1, y1, 0],
          [x2, y2, 0],
        ]}
        color={color}
        lineWidth={3}
      />
      {createTicks().map((line) => line)}
      {createTicksRight().map((line) => line)}
    </group>
  );
};
