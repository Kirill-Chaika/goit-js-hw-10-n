export default class newsApiService {
    constructor(){
        this.searchQuery = '';
        this.page = 1;
    }

    fetchArticles(){
        console.log(this)
        const options = {
            headers: {
              Authorization: "643a28fe9d3045ffa0d46bffb6ab95e6",
            },
          };
          const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=10&page=${this.page}`;

          return fetch(url, options)
          .then((r) => r.json())
          .then(data => {
            this.incrementPage();
            return data.articles;
          });
    }
    incrementPage(){
        this.page += 1;
    }
    resetPage(){
        this.page = 1;
    }
    get query (){
        return this.searchQuery;
    }
    set query (newQuery){
        this.searchQuery = newQuery;
    }
}