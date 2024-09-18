
async function fetchMovies() {
    try {
        const response = await fetch('https://freetestapi.com/api/v1/movies');
        const movies = await response.json();
        displayMovies(movies);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}
function displayMovies(movies) {
    const container = document.getElementById('movies-container');
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('card');
         card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p><strong>Year:</strong> ${movie.year}</p>
            <p><strong>Genre:</strong> ${movie.genre.join(', ')}</p>
            <p><strong>Rating:</strong> ${movie.rating}</p>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Plot:</strong> ${movie.plot}</p>
            <a href="${movie.trailer}" target="_blank">Watch Trailer</a>
        `;
        container.appendChild(card);
    });
}
function filter() {
    const searchQuery = document.getElementById('search-box').value.toLowerCase();
    
}
fetchMovies();
