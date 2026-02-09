let preLoadCase = [];
let amountOfPokemons = 30;

async function fetchThenRender() {
  try {
    await fechtDataJSON();
    await getPromise();
    render();
  } catch (error) {
    console.log(error);
  }
};

async function fechtDataJSON() {
  for (let pokemonIndex = 1; pokemonIndex <= amountOfPokemons; pokemonIndex++) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`);
    let responseAsJson = await response.json();
    preLoadCase.push(responseAsJson);
  };
};

async function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (preLoadCase.length != amountOfPokemons) {
        reject("it don't work");
      } else {
        resolve("it works");
      };
    }, 500);
  });
}

function render() {
  for (let preLoadCaseIndex = 0; preLoadCaseIndex < preLoadCase.length; preLoadCaseIndex++) {
    document.getElementById("content").innerHTML += getCardTemplate(preLoadCaseIndex);

    if (preLoadCase[preLoadCaseIndex].types.length > 1) {
      document.getElementById(`types_${preLoadCaseIndex}`).innerHTML += getTemplateSecType(preLoadCaseIndex);
    };
  };
};

function showDetailedPokemonCard(index) {
  const refPokemonCard = document.getElementById("detailedPokemonCard");
  
  refPokemonCard.showModal();
  refPokemonCard.innerHTML = getTemplateDetailedPokemon(index);
  renderDetails(index)
  backdropClose(refPokemonCard);
}

function renderDetails(index) {
  let refDetails = document.getElementById("genDetails");
  console.log(preLoadCase[index].abilities[0].ability.name);
  
  refDetails.innerHTML = aboutDetails(index);
}

//close dialog
function closeDetailedPokemonCard() {
  let refPokemonCard = document.getElementById("detailedPokemonCard");
  refPokemonCard.close();
}

function backdropClose(dialog) {
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
  });
}