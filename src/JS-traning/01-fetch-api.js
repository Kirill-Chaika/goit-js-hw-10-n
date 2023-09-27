import API from "./api-service";
import getRefs from "./get-refs";
import NewsApiService from "./Components/news-service";
// const creatInfo = (pokemon) => {
//   return pokemon
//     .map(
//       ({ name, weight, height, sprites }) =>
//         `<div class="card">
//         <div class="card-img-top">
//             <img src="${sprites.front_default}" alt="${name}">
//         </div>
//         <div class="card-body">
//             <h2 class="card-title">Имя: ${name}</h2>
//             <p class="card-text">Вес: ${weight}</p>
//             <p class="card-text">Рост: ${height}</p>
//         </div>
//         </div>`
//     )
//     .join();
// };

const creatInfoCat = (cat) => {
  return cat
    .map(
      ({ url, urlToImage, title, author, description }) =>
        `<li>
        <a href="${url}" target="_blank" rel="noopener noreferrer">
          <article>
            <img src="${urlToImage}" alt="" width="480">
            <h2>${title}</h2>
            <p>Post by: ${author}</p>
            <p>${description}</p>
          </article>
        </a>
      </li>`
    )
    .join();
};



// const createResult = (country) => {
//   if (country.length === 1) {
//     cleanMarkup(countryList);
//     countryInfo.innerHTML = creatInfo(country);
//   } else {
//     cleanMarkup(countryInfo);
//     countryList.innerHTML = creatList(country);
//   }
// };
// const refs = getRefs();
// refs.searchForm.addEventListener("submit", onSearch);

// function onSearch(e) {
//   e.preventDefault();
//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;

//   API.fetchPokemon(searchQuery)
//     .then(renderPokemonCard)
//     .catch(onFetchError)
//     .finally(() => form.reset());
// }

// function renderPokemonCard(pokemon) {
//   const massToMarkup = [pokemon];
//   const markup = creatInfo(massToMarkup);
//   refs.cardContainer.innerHTML = markup;
// }
// function onFetchError (error) {
//   alert("Упс, что-то пошло не так , мы не нашли вашего покемона");
// }
// =========================================================================
// 643a28fe9d3045ffa0d46bffb6ab95e6

const refs = {
  searchForm: document.querySelector(".js-search-form"),
  articlesContainer: document.querySelector(".js-articles-container"),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener("submit", onSearch);
refs.loadMoreBtn.addEventListener("click", onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.resetPage();
  newsApiService.fetchArticles().then(appendArticlesMarkup)
}
function onLoadMore() {
  newsApiService.fetchArticles().then(appendArticlesMarkup)
}
function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', creatInfoCat(articles));
}
