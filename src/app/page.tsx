"use client"
import CanvasRoot from "./components/canavs";
import SidePanel from "./components/sidepanel";

export default function Home() {
  return (<div className="flex h-screen">
    <SidePanel/>
    <CanvasRoot/> 
  </div>
    
  );
}
