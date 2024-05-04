import { montserrat } from "@/app/fonts";
import { SearchForm } from "@/components/search-form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-2 shadow bg-black/70 rounded-xl md:flex-row max-w-[300px] md:max-w-[800px]">
      <div className="w-full relative before:content-[url('/spaceship.png')] before:absolute before:w-full before:bottom-[-140px] before:left-[-140px]">
        <Image
          src={"/figure.png"}
          alt=""
          className="rounded-xl"
          width={400}
          height={400}
        />
      </div>
      <div className="p-12">
        <p
          className={`${montserrat.className} text-white text-center text-xl mb-2 p-4`}
        >
          Discover all the information about Planets of the Star Wars Saga
        </p>
        <SearchForm />
      </div>
    </main>
  );
}
