import React from "react";
import RenderMap from "./_components/RenderMap";

export default function page() {
  return (
    <>
      <div className="flex w-[100%] h-[100%]">
        <div className="w-[20%] h-screen bg-orange-400 ">Sidebar</div>
        <div className="w-[80%] h-screen"><RenderMap/></div>
      </div>
    </>
  );
}
