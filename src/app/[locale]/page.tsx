import { getTranslations } from "next-intl/server";
import { ThemeToggle } from "../../components/common/theme-toggle";

export default async function Home() {
  // deley
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const t = await getTranslations("HomePage");

  return (
    <div>
      <h1>{t("title")}</h1>
      <ThemeToggle />
    </div>
  );
}
