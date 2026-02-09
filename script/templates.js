function getCardTemplate(index) {
  let pokemoName = preLoadCase[index].name.replace(/^./, char => char.toUpperCase());

  return ` 
    <section class="card bg_${preLoadCase[index].types[0].type.name}">
      <header>
        <h1>${pokemoName}</h1>
        <div class="cardNumber">#${preLoadCase[index].id}</div>
      </header>
      <figure>
        <img src="${preLoadCase[index].sprites.other.dream_world.front_default}" alt="">
        <figcaption class="types" id="types_${index}">
          <p class="type_one">${preLoadCase[index].types[0].type.name}</p>
        </figcaption>
      </figure>
    </section>
  `
}

function getTemplateSecType(preLoadCaseIndex) {
  return `
    <p class="type_two">${preLoadCase[preLoadCaseIndex].types[1].type.name}</p>
  `
}