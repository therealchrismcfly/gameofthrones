import showHouses from '../showHouses/showHouses.js';

/* export default function fetchData() {
  const url = 'https://www.anapioficeandfire.com/api/houses';

  fetch(url) //fetch the houses data
    .then(result => result.json())
    .then(data => {
      data.forEach(house => {
        fetch(house.currentLord) //fetch the data for the currtent lord
          .then(currentLordResult => currentLordResult.json())
          .then(currentLordData => {
            house.currentLordName = currentLordData.name; //set the name of the person fetch as currentLordName in houses data
          })
          .catch(error => console.log(error));
      });

      return data; //return the modified data
    })
    .then(newData => showHouses(newData)) //directly calls showHoses, i skipped mapHouses to reduce avoid posisble sources of errors
    .catch(error => console.error(error));
} */

/* This does basicly the same as the function above and has exactly the same problem: */

export default async function fetchData() {
  const url = 'https://www.anapioficeandfire.com/api/houses';
  const response = await fetch(url);
  const data = await response.json();
  data.forEach(async house => {
    if (house.currentLord) {
      const currentLordResult = await fetch(house.currentLord); //fetch the data for the currtent lord
      const currentLordData = await currentLordResult.json();
      house.currentLordName = currentLordData.name; //set the name of the person fetch as currentLordName in houses data
    }
  });

  showHouses(data);
}

/*

A third version, totally not working:

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
  });*/
