import displayHouses from '../displayHouses/displayHouses.js';
export default function fetchData() {
  const url = 'https://www.anapioficeandfire.com/api/houses';

  fetch(url)
    .then(jsonObject => jsonObject.json())
    .then(javaScriptObject => displayHouses(javaScriptObject))
    .catch(error => console.error(error));
}
