import React from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Line, Text } from "@react-three/drei";

const Ruler = ({ color = "black" }) => {
    const { size } = useThree();
    const offsetY = size.height / 1.9

    let divisions = size.width / 100
    let length = size.width/2
    let x1 = -size.width;
    let y1 = -size.height + offsetY + 20;
    let y2 = -size.height + offsetY;
    let x2 = size.width;
    const createTicks = () => {
        const ticks = [];
        for (let i = 0; i <= divisions; i++) {
            const tickLength = i % 5 === 0 ? 25 : 12.5;
            const point = i * (length / divisions)
            ticks.push(<group>
                <Text fontSize={12} color={'black'} anchorX={point} anchorY={-y1}>{-point}</Text>
                <Line color={color} key={i} points={[[-point, y2, 0], [-point, y2 - tickLength, 0]]} lineWidth={3}>
                </Line>
            </group>
            );
        }
        console.log(ticks)
        return ticks;
    };
    const createTicksRight = () => {
        const ticks = [];
        for (let i = 0; i <= divisions; i++) {
            const tickLength = i % 5 === 0 ? 25 : 12.5;
            const point = i * (length / divisions)
            ticks.push(<group>
                <Text fontSize={12} color={color} anchorX={-point} anchorY={-y1}>{point}</Text>
                <Line color={color} key={i} points={[[point, y2, 0], [point, y2 - tickLength, 0]]} lineWidth={3}>
                </Line>
            </group>
            );
        }
        return ticks;
    };
    return (
        <group>
            <Line points={[[x1, y2, 0], [x2, y2, 0]]} color={'blue'} lineWidth={3} />
            {createTicks().map(line => line)}
            {createTicksRight().map(line => line)}
        </group>
    );
};

export default Ruler;

export const RulerVertical = ({ color = "black" }) => {
    const { size } = useThree();
    const offset = size.width / 1.9

    let divisions = size.height / 50
    length = size.height
    let x1 = -size.width + offset;
    let y1 = 600;
    let y2 = -600;
    let x2 = -size.width + offset;
    let x3 = -size.width + offset
    const createTicks = () => {
        const ticks = [];
        for (let i = 0; i <= divisions; i++) {
            const tickLength = i % 5 === 0 ? 25 : 12.5;
            const point = i * (length / divisions)
            ticks.push(<group key={i}>
                <Text fontSize={12} color={color} anchorX={-x1} anchorY={-point}>{point}</Text>
                <Line color={color} key={i} points={[[x1, point, 0], [x3 - tickLength, point, 0]]} lineWidth={3}>
                </Line>
            </group>
            );
        }
        return ticks;
    };
    const createTicksRight = () => {
        const ticks = [];
        for (let i = 0; i <= divisions; i++) {
            const tickLength = i % 5 === 0 ? 25 : 12.5;
            const point = i * (length / divisions)
            ticks.push(<group>
                <Text fontSize={12} color={'black'} anchorX={-x1} anchorY={point}>{-point}</Text>
                <Line color={color} key={i} points={[[x1, -point, 0], [x3 - tickLength, -point, 0]]} lineWidth={3}></Line>
            </group>
            );
        }
        return ticks;
    };
    return (
        <group>
            <Line points={[[x1, y1, 0], [x2, y2, 0]]} color={'blue'} lineWidth={3} />
            {createTicks().map(line => line)}
            {createTicksRight().map(line => line)}
        </group>
    );
};

