"use client";

import { Planet } from "@/data/types/planet";
import { ReactNode, createContext, useContext, useState } from "react";

interface PlanetContextType {
  planets: Planet[];
}

const PlanetContext = createContext({} as PlanetContextType);

export function PlanetProvider({ children }: { children: ReactNode }) {
  const [planets, setPlanets] = useState<Planet[]>([]);

  //TODO: create function for savePlanet

  return (
    <PlanetContext.Provider value={{ planets }}>
      {children}
    </PlanetContext.Provider>
  );
}

export const usePlanets = () => useContext(PlanetContext);
