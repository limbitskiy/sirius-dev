import { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
}

export default function Pill({ children }: PillProps) {
  return <div className="s-pill bg-white rounded-3xl shadow-md p-11 mx-12">{children}</div>;
}
