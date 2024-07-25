import { forwardRef, ReactNode } from "react";

interface TextareaProps {
  placeholder: string;
}

const Textarea = forwardRef(({ placeholder }: TextareaProps, ref) => {
  return <textarea className="text-black w-full rounded-md h-32 p-2" ref={ref} placeholder={placeholder}></textarea>;
});

export default Textarea;
