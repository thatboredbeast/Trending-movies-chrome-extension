const popularMovies = async () => {
    try {
        const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=2d3fe3e2f63c08b2a0f90dd1dacd62c9");
        const data = await res.json();
        let n = Math.floor(Math.random() * 20);
        console.log(data.results);
        console.log(n);

        const heading = document.getElementById('heading');
        const moviesDescription = document.getElementById('movies');
        heading.append(data.results[n].title);
        moviesDescription.append(data.results[n].overview);
        
    } catch (error) {
        console.log("error");
    }
}

window.addEventListener("load", () => {
    popularMovies();
})