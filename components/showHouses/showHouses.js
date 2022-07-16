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

    const region = document.createElement('p');
    region.innerText = houseCard.region;
    container.append(region);

    const currentLord = document.createElement('p');
    currentLord.innerText = houseCard.currentLord;
    container.append(currentLord);
  });
}
