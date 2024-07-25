import { forwardRef, ReactNode } from "react";

interface InputProps {
  placeholder: string;
}

const Input = forwardRef(({ placeholder }: InputProps, ref) => {
  return <input className="text-black w-full rounded-md h-14 p-2" ref={ref} placeholder={placeholder} />;
});

export default Input;
