import Image from "next/image";
import ThemeToggle from "../ui/ThemeToggle";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#08111f]/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <Image
          src="/logo/unity-logo.svg"
          alt="Unity Logo"
          width={150}
          height={40}
        />

        <nav className="hidden gap-8 text-gray-300 md:flex">
          <a href="#" className="transition hover:text-cyan-400">
            Home
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            Percorso
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            Biblioteca
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            Contatti
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Button>
            Inizia
          </Button>
        </div>
      </div>
    </header>
  );
}