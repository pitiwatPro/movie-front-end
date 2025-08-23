import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function NotFound() {
  const t = await getTranslations("notFoundPage");

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
          <p className="mt-3">{t("description")}</p>
        </div>
      </div>
    </div>
  );
}
