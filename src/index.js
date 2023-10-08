
const BASE_URL = 'https://api.thecatapi.com/v1';
const BASE_KEYS = '&api_key=REPLACE_ME'
fetch(`${BASE_URL}/images/search?limit=10${BASE_KEYS}`)
.then(cat => console.log(cat))
.then(console.error())
// fetchArticles(){
//     console.log(this)
//     const options = {
//         headers: {
//           Authorization: "643a28fe9d3045ffa0d46bffb6ab95e6",
//         },
//       };
//       const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=10&page=${this.page}`;

//       return fetch(url, options)
//       .then((r) => r.json())
//       .then(data => {
//         this.incrementPage();
//         return data.articles;
//       });
// }

const creatInfoCat = (cat) => {
    return cat
      .map(
        ({ url, id, width, height }) =>
          `<li>
          <a href="${url}" target="_blank" rel="noopener noreferrer">
            <article>
              <img src="${urlToImage}" alt="" width="${width} height="${height}">
              <h2>${id}</h2>
            </article>
          </a>
        </li>`
      )
      .join();
  };



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