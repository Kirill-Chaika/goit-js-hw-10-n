
const creatInfo = pokim => {
    return pokim.map(
      ({ name, weight, height, abilities, sprites }) =>
    `<div class="card">
        <div class="card-img-top">
            <img src="${sprites.front_default}" alt="${name}">
        </div>
        <div class="card-body">
            <h2 class="card-title">Имя: ${name}</h2>
            <p class="card-text">Вес: ${weight}</p>
            <p class="card-text">Рост: ${height}</p>
    
            <p class="card-text">Умения</p>
    
            <ul class="list-group">
                <li class="list-group-item">${abilities.ability.name}</li>
            </ul>
        </div>
        </div>`
    );
  };


  const createResult = country => {
    if (country.length === 1) {
        cleanMarkup(countryList);
      countryInfo.innerHTML = creatInfo(country);
    } else {
        cleanMarkup(countryInfo);
      countryList.innerHTML = creatList(country);
    }
  };


fetch('https://pokeapi.co/api/v2/pokemon/2')
  .then(response => {
    return response.json();
})
.then(pokemon => {
    console.log(pokemon)
    const markup = creatInfo(pokemon);
    console.log(createResult.markup)
}).catch(error => {
    console.log(error)
})
