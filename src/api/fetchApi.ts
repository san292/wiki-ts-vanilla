import { Wikiapi } from "../types/api";

export const fetchAPI = async (searchText:string): Promise<Wikiapi> => {
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch`;
  const response = await fetch(`${url}=${searchText}`);
  const data: Wikiapi = await response.json();
  console.log('dat', data);
  
  return data;
};
