import Image from "next/image";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/images/netflix.png"
          alt="Netflix Logo"
          width={300}
          height={75}
        />
        <div className="mt-6"></div>
        <h1 className="text-4xl font-bold text-primary">
          404 - Page Not Found
        </h1>
        <p className="text-primary">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
