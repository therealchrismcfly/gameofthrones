export default function showHouses(houseCards) {
  const pageContent = document.querySelector('[data-js="content"]');

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
    <li>Current Lord: ${houseCard.currentLordName}</li>`;
    console.log(houseCard); //currentLordName is there, look at House Baelish
    console.log(houseCard.currentLordName); //now currentLordName is shown as undefined
    container.append(infoList);
  });
}
