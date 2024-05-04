import { Footer } from "@/components/footer";
import Image from "next/image";
import { PlanetProvider } from "@/context/planet-context";

export default function PlanetLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PlanetProvider>
      <div className="min-h-screen bg-app">
        <div className="flex flex-col justify-center items-center w-full py-20">
          <Image
            src="/logo-title.png"
            className="max-w-56 mb-14"
            width={320}
            height={180}
            alt=""
          />
          {children}
        </div>
        <Footer />
      </div>
    </PlanetProvider>
  );
}
