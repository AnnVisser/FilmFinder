// Adding the movies to the DOM
const movieLists = superMovies.map((movie) => {
	let movieLi = document.createElement("li");
	movieLi.innerHTML = movie.title;
	return movieLi;
});

movieLists.forEach((movie) => {
	let movieMenu = document.getElementById("film-box");
	movieMenu.appendChild(movie);
});

console.log(movieLists);
// Step 2: Iterate through all the movies in the movie
// list. That takes this function as an argument. First,
// you want to "convert" each movie into a complete <li>
// element(a Dom node) with a .map function. We then put
// it into a variable. The result from the .map function
// will be an array with <li> elements.

// Step 3: In the .map function, for each movie,
// create a li and put the title of the movie as a
// string temporary in it. We will turn that later
// into an image.

// Step 4: Outside the .map function: place a newly made
// array with <li> elements in the DOM by adding each li
// to the ul. Our suggestion: Use a .forEach loop.

// Step 5: Check if you got a nice list with all the
// movie titles in it on your screen.

// Step 6: Since you successfully prompted the movies
// into the DOM, the movie posters will be very easy.
// Instead of the text that you added as an li, you are
// going to create an img, which the src will be an
// attribute movie. Poster. Caution! The data of the
// movies are in capital letters (you mostly can't do
// anything about the format you get from the data).
