export default function showHouses(houseCards) {
  const pageContent = document.querySelector('[data-js="content"]');
  console.log(pageContent);
  houseCards.forEach(houseCard => {
    const container = document.createElement('article');
    container.classList.add('cards');
    houseCard.innerText = 'blabal';
    pageContent.append(container);
  });
}
