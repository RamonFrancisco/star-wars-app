"use client"; // Error components must be Client Components

import Image from "next/image";
import Link from "next/link";

export default function Error({}: { error: Error & { digest?: string } }) {
  return (
    <div
      className={`{montserrat.className} flex flex-col justify-center items-center p-7 shadow bg-white rounded-xl max-w-[300px] md:min-w-[400px]`}
    >
      <Image src={"/baby-yoda.png"} width={200} height={200} alt="" />
      <h2 className="mb-4 text-center text-xl ">
        Ops!
        <br /> O Planeta que você está buscando não existe :(
      </h2>
      <Link
        className="flex items-center justify-center rounded bg-red-600 hover:bg-red-800 text-white px-4 py-2"
        href={"/"}
      >
        Voltar
      </Link>
    </div>
  );
}
