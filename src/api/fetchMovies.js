import axios from 'axios';

export const fetchMovies = async ({ movie, year, type }) => {
  const searchYear = year ? `&y=${year}` : '';
  const searchType = type ? `&type=${type}` : '';
  const movies = await axios.get(
    `http://www.omdbapi.com/?apikey=ad0254e9&t=${movie}${searchYear}${searchType}`
  );

  return movies;
};
