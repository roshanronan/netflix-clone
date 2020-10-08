const API_KEY='10c3e0d2d9785954f69f0231ee0d4867'

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,///trending/all/week?api_key=10c3e0d2d9785954f69f0231ee0d4867&language=en-US
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;