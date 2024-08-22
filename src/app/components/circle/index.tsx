import { useStore } from "@/app/store";
import { PivotControls, Ring } from "@react-three/drei";

export function CircleShape({ args, id }: { args: any; id: string }) {
  const removeShape = useStore((state) => state.removeShape);
  const handleRightClick = () => {
    removeShape(id);
  };
  return (
    <PivotControls
      activeAxes={[true, true, true]}
      rotation={[0, Math.PI / 2, 0]}
      scale={75}
      depthTest={false}
      fixed
      lineWidth={2}
      anchor={[0, 0, 0]}
      enabled
    >
      <Ring onContextMenu={handleRightClick} args={[50, 60]}  />
    </PivotControls>
  );
}
