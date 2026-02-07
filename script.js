async function fetchDataJason() {
  let response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  let responseAsJson = await response.json();
  console.log(responseAsJson);
  document.getElementById('content').innerHTML = `<h1>${responseAsJson.name}</h1><img src="${responseAsJson.sprites.front_default}" alt="">`
}