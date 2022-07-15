import displayHouses from '../mapHouses/mapHouses.js';
/*export default function fetchData() {
  const url = 'https://www.anapioficeandfire.com/api/houses';

  fetch(url)
    .then(jsonObject => jsonObject.json())
    .then(javaScriptObject => displayHouses(javaScriptObject))
    .catch(error => console.error(error));
}*/

export default async function fetchData() {
  const url = 'https://www.anapioficeandfire.com/api/houses';
  const data = await (await fetch(url)).json();
  displayHouses(data);
  console.log(data);
}
