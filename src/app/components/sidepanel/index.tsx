import React from "react";
import { Circle, Line, Rectangle, Triangle } from "./utils";
import { useStore } from "@/app/store";
import { v4 as uuid } from "uuid";
import { UserGuideList } from "../list";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";

const icons = [
  { icon: <Rectangle />, text: "Rectangle", type: "RECTANGLE", id: uuid() },
  { icon: <Line />, text: "Line", type: "LINE", id: uuid() },
  { icon: <Circle />, text: "Circle", type: "CIRCLE", id: uuid() },
  { icon: <Triangle />, text: "Triangle", type: "TRIANGLE", id: uuid() },
];

export default function SidePanel() {
  return (
    <div className="flex-none w-60 bg-slate-200">
      <p className="font-lg px-3 mx-3 my-3 shadow-md bg-green-800 text-white">
        Select a Shape to Add
      </p>
      <div className="flex flex-wrap">
        {icons.map(({ icon, text, id, type }) => (
          <Tile type={type} key={id} icon={icon} text={text} id={id} />
        ))}
      </div>
      <UserGuideList />
    </div>
  );
}

interface ITile {
  icon: any;
  text: string;
  id: string;
  type?: string;
}

function Tile({ icon, text, type = "" }: ITile) {
  const addShape = useStore((state) => state.addShape);
  return (
    <div
      onClick={() => {
        {sendGAEvent('event', 'buttonClicked', { value: `clicked by at ${Date.now()}` })}
        addShape({ type, id: uuid() })
      }}
      className="cursor-pointer mx-2 my-2 h-20 shadow-md flex flex-col justify-center text-center bg-gray-50"
    >
      {icon}
      <div>{text}</div>
    </div>
  );
}
