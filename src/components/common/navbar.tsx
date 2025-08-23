import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { Menu } from "./menu";
import LangToggle from "./lang-toggle";

export function Navbar() {
  return (
    <div className="flex px-4 py-2 items-center justify-between fixed top-0 left-0 right-0 z-50 bg-black/30 hover:bg-black/70 transition shadow-md duration-300">
      <div className="flex items-center gap-4 relative">
        <div className="relative w-11 h-6 md:w-20 md:py-5">
          <Image
            src="/images/netflix.png"
            alt="netflix logo"
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <Menu />
      </div>
      <div className="flex items-center gap-3">
        <LangToggle />
        <ThemeToggle />
      </div>
    </div>
  );
}
