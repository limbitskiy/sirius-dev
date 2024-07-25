import { ReactNode } from "react";

interface ButtonProps {
  type: string;
  children: ReactNode;
  onClick: () => void;
}

export function Button({ type, children, onClick }: ButtonProps) {
  return (
    <button className={"rounded-xl py-4 px-16 text-lg font-bold select-none uppercase text-white pointer-events-auto transition-all w-full sm:w-auto " + type} onClick={onClick}>
      {children}
    </button>
  );
}
