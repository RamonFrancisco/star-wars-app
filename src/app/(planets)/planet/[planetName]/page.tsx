import { montserrat } from "@/app/fonts";
import { CgTerrain } from "react-icons/cg";
import { FaThermometerThreeQuarters, FaUsers } from "react-icons/fa";

import Image from "next/image";
import * as Card from '@/components/Card/Index'
import { getPlanet } from "@/data/integration/planets";
import { getFilm } from "@/data/integration/film";
import { getPeople } from "@/data/integration/people";
import Link from "next/link";

interface PlanetProps {
  params: {
    planetName: string;
  };
}

export default async function PlanetPage({ params }: PlanetProps) {
  const planet = await getPlanet(params.planetName);
  const prmFilms = planet.films.map((film) => getFilm(film));
  const resultFilms = await Promise.allSettled(prmFilms)
  const films = resultFilms.map(film => film.value.title)

  const prmResidents = planet.residents.map((resident) => getPeople(resident));
  const resultresidents = await Promise.allSettled(prmResidents)
  console.log(resultresidents);
  const residents = resultresidents.map(resident => resident.value.name)
  

  return (
    <main
      className={`${montserrat.className} flex flex-col`}
    >
      <div className="flex flex-col p-7 shadow bg-white rounded-xl max-w-[300px] md:min-w-[592px]">
        <div className="flex gap-8 w-full mb-1">
          <div className="flex items-center gap-4 mr-6">
            <Image
              src={"https://cryptospro.com.br/planetas/planeta_0009_alderaan.png"}
              width={82}
              height={82}
              alt=""
            />
            <div className="">
              <p className="text-sm">Planet</p>
              <span className="font-black text-lg uppercase">{planet?.name}</span>
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
            <FaThermometerThreeQuarters className="mr-2 text-xl" />
            <p className="font-bold">Residents:</p>
          </Card.Title>
          <p >{residents.join(', ')}</p>
        </Card.Root>
        <Card.Root>
          <Card.Title>
            <FaThermometerThreeQuarters className="mr-2 text-xl" />
            <p className="font-bold">Films ({planet?.films.length}):</p>
            </Card.Title>
            <p >{films.join(', ')}</p>
          <p></p>
        </Card.Root>
      </div>
      
      <Link href={'/'} className="self-end text-white">
       voltar
      </Link>

    </main>
  );
}
