// Filtering the movies
const handleOnChangeEvent = function (event) {
	console.log("value = " + event.target.value);
	return event.target.value;
};

// Eventlisteners
const addEventListeners = function () {
	const filterButton = document.querySelectorAll('[name = "filter-films"]');
	filterButton.forEach((rb) => {
		rb.addEventListener("change", handleOnChangeEvent);
	});
};
addEventListeners();

// Creating the Li's to add to the DOM
const movieLists = superMovies.map((movie) => {
	let movieLi = document.createElement("li");
	let movieA = document.createElement("a");
	let movieImg = document.createElement("img");
	movieLi.appendChild(movieA);
	movieA.setAttribute("href", "https://www.imdb.com/title/" + movie.imdbID);
	movieA.appendChild(movieImg);
	movieImg.src = movie.poster;
	return movieLi;
});

// Adding the movies to the DOM
movieLists.forEach((movie) => {
	let movieMenu = document.getElementById("film-box");
	movieMenu.appendChild(movie);
});
