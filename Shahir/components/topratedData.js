const fetchTopRatedMovies = () => {
    return fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d98b6a4a470bc2415959e8cfff5c445e")
      .then(res => res.json())
      .then(json => json.results)
      .catch(error => {
        console.error("Error fetching best rated movies:", error);
        return []; // Return an empty array in case of error
      });
  };
  
  export default fetchTopRatedMovies;
  