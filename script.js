// Adding the movies to the DOM
console.log(superMovies);
const addMoviesToDom = function (movies) {
	let movieLi = document.createElement("li");
	let movieMenu = document.getElementById("film-box");
	console.log(movieLi);
	console.log(movieMenu);
	movieMenu.appendChild(movieLi);
	movieLi.innerHTML = movies;
};

let movies = superMovies.map((moviePoster) => {
	return moviePoster.forEach(());
	
});

addMoviesToDom(movies);
