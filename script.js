// Creating the Li's to add to the DOM
let movieMenu = document.getElementById("film-box");
const addMoviesToDom = function (movies) {
	const movieLists = movies.map((movie) => {
		let movieLi = document.createElement("li");
		let movieA = document.createElement("a");
		let movieImg = document.createElement("img");
		movieLi.appendChild(movieA);
		movieA.setAttribute("href", "https://www.imdb.com/title/" + movie.imdbID);
		movieA.appendChild(movieImg);
		movieImg.src = movie.poster;
		return movieLi;
	});
	while (movieMenu.firstChild) {
		movieMenu.removeChild(movieMenu.lastChild);
	}
	// Adding the movies to the DOM
	movieLists.forEach((movie) => {
		movieMenu.appendChild(movie);
	});
};

addMoviesToDom(superMovies);

// The filter functions
const filterMovies = function (wordInMovie) {
	let filterMovies = superMovies.filter((movie) => {
		if (movie.title.includes(wordInMovie)) {
			return movie;
		}
	});
	addMoviesToDom(filterMovies);
};

const filterLatestMovies = function () {
	let filterLatestMovies = superMovies.filter((movie) => {
		return movie.year >= 2014;
	});
	addMoviesToDom(filterLatestMovies);
};

// Filtering the movies
const handleOnChangeEvent = function (event) {
	switch (event.target.value) {
		case "newest":
			filterLatestMovies();
			break;

		case "avengers":
			filterMovies("Avengers");
			break;

		case "x-men":
			filterMovies("X-Men");
			break;

		case "batman":
			filterMovies("Batman");
			break;

		case "princess":
			filterMovies("Princess");
			break;
	}
};

// Eventlisteners
const addEventListeners = function () {
	const filterButton = document.querySelectorAll('[name = "filter-films"]');
	filterButton.forEach((rb) => {
		rb.addEventListener("change", handleOnChangeEvent);
	});
};
addEventListeners();
