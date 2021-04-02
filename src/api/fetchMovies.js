import axios from 'axios';

export const fetchMovies = async ({ movie, year }) => {
  const searchYear = year ? `&y${year}` : '';

  const movies = await axios.get(
    `http://www.omdbapi.com/?apikey=ad0254e9&t=${movie}${searchYear}`
  );

  return movies;
};
