import axios from 'axios';

export const fetchMovies = async () => {
  const movies = await axios.get(
    'http://www.omdbapi.com/?i=tt3896198&apikey=ad0254e9/'
  );
  return movies;
};
