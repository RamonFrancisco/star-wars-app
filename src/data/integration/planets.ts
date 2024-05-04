import { api } from "../api";
import { Planet } from "../types/planet";

export async function getPlanet(planetName: string): Promise<Planet> {
  const response = await api(`planets/?search=${planetName}`);
  const planet = await response.json();
  
  const getIdByUrl = (url: string) => {
    const id = url.match(/\d+/g);
    return id
  } 

  const transform = (items: string[]) => {
    return items.reduce((acc: string[], curr: string) => {
      const id = getIdByUrl(curr);
      return [...acc, `${id}`]
    }, [])
  } 

  const planetResult = {
    ...planet.results[0],
    films: transform(planet.results[0].films),
    residents: transform(planet.results[0].residents),
  }

  return planetResult;
}
