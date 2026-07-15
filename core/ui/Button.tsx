import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/20",

    secondary:
      "border border-white/10 bg-white/5 hover:bg-white/10 text-white",

    ghost:
      "bg-transparent hover:bg-white/5 text-white",
  };

  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-6
        py-3
        font-semibold
        transition-all
        duration-300
        hover:scale-[1.02]
        active:scale-95
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}