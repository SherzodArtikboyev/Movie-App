const elMovie = document.querySelector("#movies");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const loading = document.querySelector("#loading");

let apiKey = "e4312694";

function fetchMovies(searchQuery) {
    const apiUrl = `https://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`;
    elMovie.innerHTML = "";

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            if (data.Search) {
                const movie = data.Search;

                movie.forEach(value => {
                    const card = document.createElement("div");
                    const image = document.createElement("img");
                    const title = document.createElement("h1");
                    const subTitle = document.createElement("p");

                    image.src = value.Poster;
                    title.innerHTML = value.Title;
                    subTitle.innerHTML = value.Year;

                    card.append(image);
                    card.append(title);
                    card.append(subTitle);
                    elMovie.append(card);
                });
            }
        });
}

button.addEventListener("click", () => {
    let search = input.value.trim();

    if (search !== "") {
        fetchMovies(search);
    }
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let value = input.value.trim();
        if (value !== "") {
            fetchMovies(value);
        }
    }
});

function showFilm() {
    const film = "Harry Potter";
    fetchMovies(film);
}

showFilm();