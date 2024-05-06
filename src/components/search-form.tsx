"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";

export function SearchForm() {
  const router = useRouter();
  const [text, setText] = useState("");

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    router.push(`/planet/${text}`);
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        onChange={(event) => setText(event.target.value)}
        placeholder="Enter the name in the planet"
        className="w-full rounded text-center p-2 mb-2 outline-none placeholder:text-zinc-500"
      />
      <button className="w-full flex items-center justify-center rounded bg-red-600 hover:bg-red-800 text-white p-2 ">
        <FaSearch className="mr-2" />
        Search
      </button>
      {/* TODO: Add filters */}
    </form>
  );
}
