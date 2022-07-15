export default function showHouses(houseCards) {
  const pageContent = document.querySelector('[data-js="content"]');
  console.log(pageContent);
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
    <li>Current Lord: ${houseCard.currentLord}</li>`;
    container.append(infoList);
  });
}
