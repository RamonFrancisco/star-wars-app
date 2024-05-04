import { api } from "../api";
import { People } from "../types/people";

export async function getPeople(id: string): Promise<People> {
  const response = await api(`people/${id}/`);
  const people = await response.json();

  return people;
}
