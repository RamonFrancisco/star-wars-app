"use client";
import { getPlanet } from "@/data/integration/planets";
import { useRouter } from "next/navigation";
import { FormEvent, HTMLAttributes, useState } from "react";
import { usePlanets } from "@/context/planet-context";

export function SearchForm() {
  const router = useRouter()
  const [text, setText] = useState('');

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    router.push(`/planet/${text}`)
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        onChange={(event) => setText(event.target.value)}
        placeholder="Enter the name in the planet"
        className="w-full rounded text-center p-2 mb-2 outline-none placeholder:text-zinc-500" 
      />
      <button className="w-full rounded text-center bg-red-600 text-white p-2 ">
        Search
      </button>
      {/* <div className="flex">
          <span>Filter</span>
        </div> */}
    </form>
  );
}
