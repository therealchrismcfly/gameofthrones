import displayHouses from '../mapHouses/mapHouses.js';
export default function fetchData() {
  const url = 'https://www.anapioficeandfire.com/api/houses';

  fetch(url)
    .then(jsonObject => jsonObject.json())
    .then(javaScriptObject => displayHouses(javaScriptObject))
    .catch(error => console.error(error));
}
