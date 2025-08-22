import Image from "next/image";

// loading
export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-32 h-16 sm:w-40 md:w-56 md:h-28 relative">
          <Image
            src={"/images/netflix.png"}
            alt="Netflix logo"
            priority
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="animate-spin rounded-full h-8 w-8 md:h-16 md:w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    </div>
  );
}
