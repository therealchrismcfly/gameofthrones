export default function showHouses(houseCards) {
  const pageContent = document.querySelector('[data-js="content"]');
  console.log(houseCards);
  houseCards.forEach(houseCard => {
    const container = document.createElement('article');
    container.classList.add('cards');
    pageContent.append(container);

    const headline = document.createElement('h2');
    headline.classList.add('card__headline');
    headline.innerText = houseCard.name;
    container.append(headline);

    const infoList = document.createElement('ul');
    infoList.innerHTML = `
    <li>Region: ${houseCard.region}</li> 
    <li>Coat of Arms: ${houseCard.coatOfArms}</li>
    <li>Seat: ${houseCard.seats}</li>
    <li>Current Lord: ${houseCard.lordName}</li>`;
    console.log(houseCard.lordName);
    container.append(infoList);
  });
}
