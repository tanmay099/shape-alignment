import { Line, PivotControls } from "@react-three/drei"
import { useState } from "react"
import { Point } from "../point"
import { useStore } from "@/app/store"

type ITriangle = {
    defaultPoints: [number, number, number][],
    id: string
}


export function Triangle({ defaultPoints, id }: ITriangle) {
    const [points, setPoints] = useState(defaultPoints)
    const removeShape = useStore((state) => state.removeShape);
    const handleRightClick = () => {
      removeShape(id);
    };
    return (<group onContextMenu={handleRightClick}>
        <PivotControls disableScaling activeAxes={[true, true, true]} rotation={[0, Math.PI / 2, 0]} scale={75} depthTest={false} fixed lineWidth={2} anchor={[0, 0, 0]} enabled >
            <Line points={[...points[0], ...points[1]]} lineWidth={3} color="gray" />
            <Line points={[...points[1], ...points[2]]} lineWidth={3} color="gray" />
            <Line points={[...points[2], ...points[0]]} lineWidth={3} color="gray" />
            <Point id={id} position={points[0]} onDrag={(e: any) => {
                const p = [e, [points[1][0], e[1], 0], points[2], [e[0], points[2][1], 0]]
                setPoints(p)
            }} />
            <Point id={id} position={points[1]} onDrag={(e: any) => {
                const p = [[points[0][0], e[1], 0], e, [e[0], points[2][1], 0], points[3]]
                setPoints(p)
            }} />
            <Point id={id} position={points[2]} onDrag={(e: any) => {
                const p = [points[0], [e[0], points[1][1], 0], e, [points[2][0], e[1], 0]]
                setPoints(p)
            }} />     
        </PivotControls>
    </group>)
}