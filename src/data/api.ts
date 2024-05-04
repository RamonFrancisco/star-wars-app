export function api(path: string, init?: RequestInit) {
  const baseUrl = "https://swapi.dev/";
  const prefix = "api/";
  const url = new URL(prefix.concat(path), baseUrl);
  console.log(url);

  return fetch(url, init);
}
