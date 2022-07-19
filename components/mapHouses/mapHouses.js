import showHouses from '../showHouses/showHouses.js';

export default function mapHouses(houses) {
  console.log(houses);
  const houseCards = houses.map(house => {
    console.log(house);
    return {
      name: house.name,
      region: house.region,
      coatOfArms: house.coatOfArms,
      seats: house.seats,
      currentLordi: "ja " + house["currentLordName"],
      test: "test"
    };
  });
//console.log(houseCards);
  showHouses(houseCards);
}
