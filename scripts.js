// scripts.js

document.getElementById('addMovieForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const director = document.getElementById('director').value;
    const category = document.getElementById('category').value;
    const releaseDate = document.getElementById('releaseDate').value;
    const duration = document.getElementById('duration').value;
    const description = document.getElementById('description').value;

    const movie = {
        title,
        director,
        category,
        releaseDate,
        duration,
        description
    };

    addMovieToList(movie);
    this.reset();
});

function addMovieToList(movie) {
    const moviesList = document.getElementById('moviesList');
    const noMovies = document.getElementById('noMovies');
    
    if (noMovies) {
        noMovies.remove();
    }

    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');

    movieItem.innerHTML = `
        <h3>${movie.title}</h3>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Category:</strong> ${movie.category}</p>
        <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
        <p><strong>Duration:</strong> ${movie.duration}</p>
        <p><strong>Description:</strong> ${movie.description}</p>
        <button class="details-button">Details</button>
    `;

    moviesList.appendChild(movieItem);
}
