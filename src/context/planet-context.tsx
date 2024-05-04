"use client";

import { Planet } from "@/data/types/planet";
import { ReactNode, createContext, useContext, useState } from "react";

interface PlanetContextType {
  planets: Planet[];
  savePlanet: (planet: Planet) => void;
}

const PlanetContext = createContext({} as PlanetContextType);

export function PlanetProvider({ children }: { children: ReactNode }) {
  const [planets, setPlanets] = useState<Planet[]>([]);

  function savePlanet(planet: Planet) {
    setPlanets((state) => {
      const planetInState = state.some((item) => item.id === planet.id);

      if (planetInState) {
        return state.map((item) => {
          if (item.id === planet.id) {
            return { ...item, name: planet.name };
          } else {
            return item;
          }
        });
      } else {
        return [...state, planet];
      }
    });
  }

  return (
    <PlanetContext.Provider value={{ planets, savePlanet }}>
      {children}
    </PlanetContext.Provider>
  );
}

export const usePlanets = () => useContext(PlanetContext);
