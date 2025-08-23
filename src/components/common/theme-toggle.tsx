"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <ThemeIcon path="/images/light-mode.png" />
      ) : (
        <ThemeIcon path="/images/dark-mode.png" />
      )}
    </div>
  );
}

const ThemeIcon = (props: { path: string }) => {
  const { path } = props;
  return (
    <div className="relative w-5 h-5 md:w-7 md:h-7">
      <Image
        src={path}
        alt="theme icon"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </div>
  );
};
