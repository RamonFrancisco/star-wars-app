import { api } from "../api";
import { Planet } from "../types/planet";
import { getFilm } from "./film";
import { getPeople } from "./people";

interface ServiceResponse {
  name?: string;
  title?: string;
}

const getIdByUrl = (url: string) => {
  const id = url.match(/\d+/g);
  return id;
};

const transformURLInPromises = (
  items: string[],
  cb: Function
): Promise<ServiceResponse>[] => {
  return items.reduce((acc: Promise<ServiceResponse>[], curr: string) => {
    const id = getIdByUrl(curr);
    const prm = cb(id);
    return [...acc, prm];
  }, []);
};

const callOtherServices = async (paths: string[], service: Function) => {
  const isFulfilled = <T>(
    p: PromiseSettledResult<T>
  ): p is PromiseFulfilledResult<T> => p.status === "fulfilled";

  const prms = transformURLInPromises(paths, service);
  const result = await Promise.allSettled(prms);
  const fulfilledValues = result.filter(isFulfilled).map((r) => r.value);

  return fulfilledValues.map((value) => value.name || value.title);
};

export async function getPlanet(planetName: string): Promise<Planet> {
  const response = await api(`planets/?search=${planetName}`);
  const planet = await response.json();

  const id = getIdByUrl(planet.results[0].url);
  const films = await callOtherServices(planet.results[0].films, getFilm);
  const residents = await callOtherServices(
    planet.results[0].residents,
    getPeople
  );

  const planetResult = {
    ...planet.results[0],
    id,
    films,
    residents,
  };

  return planetResult;
}
