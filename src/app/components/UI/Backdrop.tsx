import { ReactEventHandler, useState } from "react";

export function Backdrop() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    // console.log(e.nativeEvent.offsetX);
    // console.log(e.nativeEvent.offsetY);
    setPos({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  };
  return (
    <div
      className="backdrop absolute inset-0"
      style={{ background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, transparent, #f7f7f7 15%)` }}
      onMouseMove={handleMouseMove}
    ></div>
  );
}
