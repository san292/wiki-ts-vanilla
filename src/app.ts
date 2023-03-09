import { displayLoading, removeLoading } from "./loader";
import { fetchAPI } from "./api/fetchApi";
import { clearResults } from "./clearResults";
import { createResultElement } from "./templateResults";
import { Wikiapi} from "./types/api";
import {  Search } from "./types/api";

const results = document.querySelector(".results") as HTMLInputElement;
const inputEl = document.querySelector(".wiki-input") as HTMLInputElement;

async function renderResults(queryData: Wikiapi) {
  clearResults(results);

  queryData.query.search.forEach((result:Search) => {
    console.log('rselr', result);
    
    return createResultElement(result, results) 
  });
}

async function search(searchTerm: string) {
  displayLoading();
  try {
    const results = await fetchAPI(searchTerm);
    renderResults(results);
    removeLoading();
  } catch (error) {
    console.log(error);
  }
}

function onInputValue(e: Event) {
  const input = e.target as HTMLInputElement;
  search(input.value);
}
inputEl.addEventListener("input", onInputValue);

window.addEventListener("load", () => {
  removeLoading();
  search("typeScript");
});
