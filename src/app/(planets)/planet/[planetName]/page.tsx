import { montserrat } from "@/app/fonts";
import { CgTerrain } from "react-icons/cg";
import {
  FaThermometerThreeQuarters,
  FaUsers,
  FaChevronLeft,
  FaUser,
} from "react-icons/fa";
import { PiFilmSlateFill } from "react-icons/pi";

import Image from "next/image";
import * as Card from "@/components/Card/Index";
import { getPlanet } from "@/data/integration/planets";
import Link from "next/link";

interface PlanetProps {
  params: {
    planetName: string;
  };
}

interface imageUrlI {
  [index: string]: string;
}

const imageUrl: imageUrlI = {
  naboo: "https://cryptospro.com.br/planetas/planeta_0001_naboo.png",
  mustafar: "https://cryptospro.com.br/planetas/planeta_0002_mustafar.png",
  kashyyyk: "https://cryptospro.com.br/planetas/planeta_0003_kashyyyk.png",
  hoth: "https://cryptospro.com.br/planetas/planeta_0004_hoth.png",
  endor: "https://cryptospro.com.br/planetas/planeta_0005_endor.png",
  dagobah: "https://cryptospro.com.br/planetas/planeta_0006_dagobah.png",
  coruscant: "https://cryptospro.com.br/planetas/planeta_0007_coruscant.png",
  bespin: "https://cryptospro.com.br/planetas/planeta_0008_bespin.png",
  alderaan: "https://cryptospro.com.br/planetas/planeta_0009_alderaan.png",
  tatooine: "https://cryptospro.com.br/planetas/planeta_0000_tatooine.png",
};

export default async function PlanetPage({ params }: PlanetProps) {
  const planet = await getPlanet(params.planetName);
  const name: string = planet.name.toLocaleLowerCase();

  return (
    <main className={`${montserrat.className} flex flex-col`}>
      <div className="flex flex-col p-7 shadow bg-white rounded-xl max-w-[300px] md:min-w-[592px]">
        <div className="flex flex-col md:flex-row gap-8 w-full mb-1">
          <div className="flex items-center gap-4 mr-6">
            <Image src={imageUrl[name]} width={82} height={82} alt="" />
            <div className="">
              <p className="text-sm">Planet</p>
              <span className="font-black text-lg uppercase">
                {planet?.name}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center font-black mb-2">
              <FaThermometerThreeQuarters className="mr-4 text-xl" />
              <p>
                Climate: <span className="font-normal">{planet?.climate}</span>
              </p>
            </div>
            <div className="flex items-center font-black mb-2">
              <CgTerrain className="mr-4 text-xl" />
              <p>
                Terrain: <span className="font-normal">{planet?.terrain}</span>
              </p>
            </div>
            <div className="flex items-center font-black mb-2">
              <FaUsers className="mr-4 text-xl" />
              <p>
                Population:{" "}
                <span className="font-normal">{planet?.population}</span>
              </p>
            </div>
          </div>
        </div>
        <Card.Root>
          <Card.Title>
            <FaUser className="mr-2 text-xl" />
            <p className="font-bold">Residents:</p>
          </Card.Title>
          <p>{planet.residents.join(", ")}</p>
        </Card.Root>
        <Card.Root>
          <Card.Title>
            <PiFilmSlateFill className="mr-2 text-xl" />
            <p className="font-bold">Films ({planet?.films.length}):</p>
          </Card.Title>
          <p>{planet.films.join(", ")}</p>
        </Card.Root>
      </div>

      <Link href={"/"} className="self-end flex items-center text-white">
        <FaChevronLeft className="mr-2 my-4" />
        voltar
      </Link>
    </main>
  );
}
