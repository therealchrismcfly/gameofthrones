import mapHouses from '../mapHouses/mapHouses.js';
import showHouses from '../showHouses/showHouses.js';
/*export default function fetchData() {
  const url = 'https://www.anapioficeandfire.com/api/houses';

  fetch(url)
    .then(result => result.json())
    .then(data => {
      data.forEach(house => {
        fetch(house.currentLord)
          .then(currentLordResult => currentLordResult.json())
          .then(currentLordData => {
            house.lordName = currentLordData.name;
            //return data;
          })
          .catch(error => console.log(error));
      });
      //console.log(data);
      return data;
    })
    .then(newData => showHouses(newData))
    .catch(error => console.error(error));
}*/

export default async function fetchData() {
  const url = 'https://www.anapioficeandfire.com/api/houses';
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.map(house => {
    const theName = async d => {
      const response = await fetch(this.currentLord);
      console.log('a' + response);
    };
    return {
      rasdf: name,
      region: 'Blaba',
      lordName: 'ja',
    };
  });

  /*const newData =  data.map(async (house) => {
    if (house.currentLord) {
      //console.log(house.currentLord);
      const currentLordResult = await fetch(house.currentLord);
      const currentLordData = await currentLordResult.json();

      house.lordName = await currentLordData.name;

      //console.log(house.name + ' / ' + house.lordName);
      //console.log(data);
    }
  });
  //await console.log('---->' + newData);*/
  showHouses(newData);
}
