import { ThemeToggle } from "@/components/common/theme-toggle";

export default async function Home() {
  // deley
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div>
      <h1>hello</h1>
      <ThemeToggle />
    </div>
  );
}
