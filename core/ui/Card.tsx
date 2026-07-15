import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
        shadow-lg
        transition-all
        duration-300
        hover:border-cyan-400/20
        hover:shadow-cyan-500/10
        ${className}
      `}
    >
      {children}
    </div>
  );
}