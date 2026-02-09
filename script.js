let preLoadCase = [];
let amountOfPokemons = 12;

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
  let refContent = document.getElementById('content');

  for (let preLoadCaseIndex = 0; preLoadCaseIndex < preLoadCase.length; preLoadCaseIndex++) {
    refContent.innerHTML += getCardTemplate(preLoadCaseIndex);
    if (preLoadCase[preLoadCaseIndex].types.length > 1) {
      document.getElementById(`types_${preLoadCaseIndex}`).innerHTML += getTemplateSecType(preLoadCaseIndex);
    };
  };
};