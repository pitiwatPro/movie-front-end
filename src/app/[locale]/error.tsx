"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("errorPage");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/images/netflix.png"
          alt="Netflix Logo"
          width={300}
          height={75}
        />
        <div className="mt-6 text-center text-primary">
          <h1 className="text-4xl font-bold">{t("title")}</h1>
          <p className="my-3">{t("description")}</p>
          <p>{JSON.stringify(error)}</p>
        </div>
      </div>
    </div>
  );
}
