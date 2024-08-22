import {
    RightArrow,
    UpArrow,
    DragIcon,
    ArcIcon,
    PointIcon,
    RightClick,
  } from "@/app/components/sidepanel/utils";
  
  export const USER_GUIDE_LIST = [
    {
      text: "Left click and hold than move up and down to rotate",
      icon: <ArcIcon />,
    },
    {
      text: "click on point than drag to change shape size",
      icon: <PointIcon />,
    },
    { text: "click on arrow and drag to move up and down (Relative to orientation)", icon: <UpArrow /> },
    {
      text: "click on arrow and drag to move left and right (Relative to orientation)",
      icon: <RightArrow />,
    },
    {
      text: "click on pink square and drag to move anywhere on canvas",
      icon: <DragIcon />,
    },
    {
      text: "right click on shape vertex or boundary to delete the shape",
      icon: <RightClick />,
    },
  ];