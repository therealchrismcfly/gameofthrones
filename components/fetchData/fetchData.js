import displayHouses from '../mapHouses/mapHouses.js';
export default function fetchData() {
  const url = 'https://www.anapioficeandfire.com/api/houses';

  fetch(url)
    .then(jsonObject => jsonObject.json())
    .then(javaScriptObject => displayHouses(javaScriptObject))
    .catch(error => console.error(error));

  /*const promise = fetch('https://www.anapioficeandfire.com/api/houses');
  const data = promise.then(response => response.json());
  data.then(result => console.log(result.houseCards));*/
}
