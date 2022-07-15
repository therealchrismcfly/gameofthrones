export default function displayHouses(houses) {
  const houseCards = houses.map(house => {
    return {
      name: house.name,
      region: house.region,
      coatOfArms: house.coatOfArms,
    };
  });
  console.log(houseCards);
}
