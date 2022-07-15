import showHouses from '../showHouses/showHouses.js';
import fetchCharacter from '../fetchCharacter/fetchCharacter.js';

export default function mapHouses(houses) {
  const houseCards = houses.map(house => {
    fetchCharacter(house.currentLord);
    return {
      name: house.name,
      region: house.region,
      coatOfArms: house.coatOfArms,
      seats: house.seats,
      currentLord: house.currentLord,
    };
  });

  showHouses(houseCards);
}
