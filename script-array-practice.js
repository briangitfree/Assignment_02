




//STEP 1

// Create an array with five favorite movies
const favoriteMovies = [
  "The Dark Knight",
  "Inception",
  "Interstellar",
  "The Matrix",
  "Avengers: Endgame"
];

// Display the second movie in the array
console.log(favoriteMovies[1]);

//STEP 2

// Declare an array called movies using the Array constructor with a length of 5
const movies = new Array(5);

// Assign a favorite movie to each index
movies[0] = "The Dark Knight";
movies[1] = "Inception";
movies[2] = "Interstellar";
movies[3] = "The Matrix";
movies[4] = "Avengers: Endgame";

// Display the first movie in the array
console.log(movies[0]);

//STEP 3

// Declare an array called movies using the Array constructor with a length of 5
const movies = new Array(5);

// Assign a favorite movie to each index
movies[0] = "The Dark Knight";
movies[1] = "Inception";
movies[2] = "Interstellar";
movies[3] = "The Matrix";
movies[4] = "Avengers: Endgame";

// Add a new movie into the 3rd position (index 2)
movies.splice(2, 0, "Titanic");

// Display the length of the array
console.log(movies.length);

//STEP 4

// Declare an array called movies using literal notation
const movies = [
  "The Dark Knight",
  "Inception",
  "Interstellar",
  "The Matrix",
  "Avengers: Endgame"
];

// Remove the first movie in the array using the delete operator
delete movies[0];

// Display the contents of the array
console.log(movies);


//STEP 5

// Declare an array called movies using literal notation
const movies = [
  "The Dark Knight",
  "Inception",
  "Interstellar",
  "The Matrix",
  "Avengers: Endgame",
  "Titanic",
  "The Lord of the Rings"
];

// Use a for/in loop to iterate through the array
for (let index in movies) {
  console.log(movies[index]);
}

//STEP 6

// Declare an array called movies using literal notation
const movies = [
  "The Dark Knight",
  "Inception",
  "Interstellar",
  "The Matrix",
  "Avengers: Endgame",
  "Titanic",
  "The Lord of the Rings"
];

// Use a for/of loop to iterate through the array
for (const movie of movies) {
  console.log(movie);
}

//STEP 7

// Declare an array called movies using literal notation
const movies = [
  "The Dark Knight",
  "Inception",
  "Interstellar",
  "The Matrix",
  "Avengers: Endgame",
  "Titanic",
  "The Lord of the Rings"
];

// Sort the array alphabetically
movies.sort();

// Use a for/of loop to iterate through the sorted array
for (const movie of movies) {
  console.log(movie);
}

//STEP 8

// Declare an array called movies using literal notation
const movies = [
  "The Dark Knight",
  "Inception",
  "Interstellar",
  "The Matrix",
  "Avengers: Endgame",
  "Titanic",
  "The Lord of the Rings"
];

// Create a new array called leastFavMovies
const leastFavMovies = [
  "Movie 43",
  "Catwoman",
  "The Last Airbender"
];

// Display both arrays with the required formatting
console.log("Movies I Like:\n");

for (const movie of movies) {
  console.log(movie);
}

console.log("\nMovies I Regret Watching:\n");

for (const movie of leastFavMovies) {
  console.log(movie);
}
//STEP 9

// Declare an array called movies using literal notation
const movies = [
  "The Dark Knight",
  "Inception",
  "Interstellar",
  "The Matrix",
  "Avengers: Endgame",
  "Titanic",
  "The Lord of the Rings"
];

// Create a new array called leastFavMovies
const leastFavMovies = [
  "Movie 43",
  "Catwoman",
  "The Last Airbender"
];

// Use concat() to merge the arrays into a single array called allMovies
const allMovies = movies.concat(leastFavMovies);

// Sort the merged array in reverse alphabetical order
allMovies.sort().reverse();

// Display the list in reverse sorted order
console.log("Movies in Reverse Sorted Order:\n");

for (const movie of allMovies) {
  console.log(movie);
}
//STEP 10

// Declare an array called movies using literal notation
const movies = [
  "The Dark Knight",
  "Inception",
  "Interstellar",
  "The Matrix",
  "Avengers: Endgame",
  "Titanic",
  "The Lord of the Rings"
];

// Create a new array called leastFavMovies
const leastFavMovies = [
  "Movie 43",
  "Catwoman",
  "The Last Airbender"
];

// Use concat() to merge the arrays into a single array called allMovies
const allMovies = movies.concat(leastFavMovies);

// Sort the merged array in reverse alphabetical order
allMovies.sort().reverse();

// Display the list in reverse sorted order
console.log("Movies in Reverse Sorted Order:\n");

for (const movie of allMovies) {
  console.log(movie);
}

// Return and display the last item in the array
const lastMovie = allMovies.pop();
console.log("\nLast Movie in the Array:");
console.log(lastMovie);

//STEP 11

// Declare an array called movies using literal notation
const movies = [
  "The Dark Knight",
  "Inception",
  "Interstellar",
  "The Matrix",
  "Avengers: Endgame",
  "Titanic",
  "The Lord of the Rings"
];

// Create a new array called leastFavMovies
const leastFavMovies = [
  "Movie 43",
  "Catwoman",
  "The Last Airbender"
];

// Use concat() to merge the arrays into a single array called allMovies
const allMovies = movies.concat(leastFavMovies);

// Sort the merged array in reverse alphabetical order
allMovies.sort().reverse();

// Display the list in reverse sorted order
console.log("Movies in Reverse Sorted Order:\n");

for (const movie of allMovies) {
  console.log(movie);
}

// Return and display the first item in the array
const firstMovie = allMovies.shift();
console.log("\nFirst Movie in the Array:");
console.log(firstMovie);


//STEP 12

// Array containing both favorite and least favorite movies
let movies = [
  "The Dark Knight",
  "Inception",
  "Movie 43",
  "Interstellar",
  "Catwoman",
  "The Matrix",
  "The Last Airbender"
];

// List of movies you do not like
const leastFavMovies = [
  "Movie 43",
  "Catwoman",
  "The Last Airbender"
];

// Find the indices of the movies you do not like
const badMovieIndices = [];

for (let i = 0; i < movies.length; i++) {
  if (leastFavMovies.includes(movies[i])) {
    badMovieIndices.push(i);
  }
}

console.log("Indices of movies I don't like:");
console.log(badMovieIndices);

// Movies to replace them with
const replacementMovies = [
  "Titanic",
  "Avengers: Endgame",
  "The Lord of the Rings"
];

// Replace the disliked movies using their indices
for (let i = 0; i < badMovieIndices.length; i++) {
  movies[badMovieIndices[i]] = replacementMovies[i];
}

console.log("\nUpdated movie list:");
for (const movie of movies) {
  console.log(movie);
}
//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17
