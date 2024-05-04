import { montserrat } from "@/app/fonts";
import { SearchForm } from "@/components/search-form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 shadow bg-black/70 rounded-xl max-w-[300px] md:max-w-[760px]">
      <div className="rounded max-w-full h-[200px] md:h-[400px] relative bg-box bg-center md:bg-inherit">
        <Image
          src={"/spaceship.png"}
          alt=""
          className="absolute md:w-full -bottom-14 left-24 md:-left-32 md:-bottom-24"
          width={400}
          height={400}
        />
        {/* <Image
          src={"/figure.png"}
          alt=""
          className="rounded-xl"
          width={400}
          height={400}
        /> */}
      </div>
      <div className="p-5 md:p-12">
        <p
          className={`${montserrat.className} font-normal text-white text-center text-lg mb-2 py-4`}
        >
          Discover all the information about Planets of the Star Wars Saga
        </p>
        <SearchForm />
      </div>
    </main>
  );
}
