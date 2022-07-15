export default function fetchCharacter(url) {
  fetch(url)
    .then(jsonObject => jsonObject.json)
    .then();
}
