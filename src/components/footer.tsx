import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex p-4 items-center justify-center w-full fixed bottom-0 bg-white">
      <p className="text-sm border-r-[1px] border-stone-600 text-stone-600 sr-only md:not-sr-only md:p-4 md:pr-8 ">
        STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos
        reservados
      </p>
      <Image
        src="/logo-footer.png"
        className="md:ml-8"
        width={85}
        height={37}
        alt="Logo star wars"
      />
    </footer>
  );
}
