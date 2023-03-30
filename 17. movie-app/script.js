const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fd6c1bd63eba86fc1f63deb142f13f02&page=1'


const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=fd6c1bd63eba86fc1f63deb142f13f02&query="'

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    // function
    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    // loop through each movie
    movies.forEach(movie => {
        // deconstruct
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
                <h3>${title}</h3>
                    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
                <h3>Overview</h3>
            ${overview}
        </div>
        `
        // putting all this into the DOM
        main.appendChild(movieEl)
    })
}

// utility function with green, orange, and red in span
function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
};


form.addEventListener('submit', (e) => {
    // so it doesnt actually submit to the page
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_URL + searchTerm)

        search.value = ''
    } else {
        // this reloads the page
        window.location.reload
    }
})