const apiKey = "";
const baseURL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () =>
{
    const response = await fetch(`${baseURL}/movie/popular?api_key=${apiKey}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => 
{
    const response = await fetch(`${baseURL}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};