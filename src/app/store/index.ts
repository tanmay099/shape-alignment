import { create } from "zustand";
type Shape = { type: string; id: string };

export type State = {
  shapes: Shape[];
};

export type Action = {
  addShape: (shape: Shape) => void;
  removeShape: (shapeId: string) => void;
};

export const useStore = create<State & Action>((set) => ({
  shapes: [],
  addShape: (shape: Shape) =>
    set((state: State) => ({ shapes: [...state.shapes, shape] })),
  removeShape: (shapeId: string) =>
    set((state: State) => ({
      shapes: [...state.shapes.filter((shape) => shape.id !== shapeId)],
    })),
}));
