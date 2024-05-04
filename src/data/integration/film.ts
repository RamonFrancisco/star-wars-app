import { api } from "../api";
import { Film } from "../types/film";

export async function getFilm(id: string): Promise<Film> {
  const response = await api(`films/${id}/`);
  const film = await response.json();

  return film;
}
