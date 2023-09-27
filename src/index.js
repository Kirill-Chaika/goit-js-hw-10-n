
fetch('https://api.thecatapi.com/v1/images/search?limit=10')
.then(cat => console.log(cat))
.then(console.error())