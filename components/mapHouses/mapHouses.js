import showHouses from '../showHouses/showHouses.js';

export default function mapHouses(houses) {
  const houseCards = houses.map(house => {
    return {
      name: house.name,
      region: house.region,
      coatOfArms: house.coatOfArms,
      seats: house.seats,
      currentLord: house.currentLordName,
    };
  });

  showHouses(houseCards);
}
