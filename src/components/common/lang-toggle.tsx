"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useState, useTransition } from "react";

export default function LangToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "th" : "en";

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div
      onClick={toggleLanguage}
      className={`cursor-pointer p-4 border-2 border-primary rounded-full py-1 text-sm font-bold text-primary ${
        isPending ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {locale === "en" ? "TH" : "EN"}
    </div>
  );
}
