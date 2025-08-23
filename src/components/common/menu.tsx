"use client";

import { Link, usePathname } from "@/i18n/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const menuItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "tvShows", label: "TV Shows", href: "/tv-shows" },
  { key: "movies", label: "Movies", href: "/movies" },
  { key: "myList", label: "My List", href: "/my-list" },
  { key: "newAndPopular", label: "New & Popular", href: "/new-and-popular" },
  {
    key: "browseByLanguages",
    label: "Browse by Languages",
    href: "/browse-by-languages",
  },
];

export function Menu() {
  return (
    <div>
      <div className="hidden md:block">
        <MenuDesktop />
      </div>
      <div className="md:hidden">
        <MenuMobile />
      </div>
    </div>
  );
}

export function MenuDesktop() {
  const pathname = usePathname();
  const t = useTranslations("menu");

  return (
    <div>
      <ul className="flex items-center text-sm gap-4">
        {menuItems.map((item) => (
          <li key={item.href} className="">
            <Link
              href={item.href}
              className={cn("text-nav font-bold hover:text-primary", {
                "text-primary": pathname === item.href,
              })}
            >
              {t(item.key)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MenuMobile() {
  const pathname = usePathname();
  const t = useTranslations("menu");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-primary bg-transparent text-xs p-0">
            Menu
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-secondary/85 w-56 text-center">
            <div className="flex flex-col gap-5 text-nav text-2xl font-bold">
              {menuItems.map((item) => (
                <NavigationMenuLink
                  key={item.href}
                  asChild
                  className={cn("hover:text-primary", {
                    "text-primary": pathname === item.href,
                  })}
                >
                  <Link href={item.href}> {t(item.key)}</Link>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
