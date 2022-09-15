import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: Props) {
  return (
    <input {...props} className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500" />
  );
}

export default Input;
