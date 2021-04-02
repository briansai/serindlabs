import { useState } from 'react';
import MovieListForm from '../components/movieList/MovieListForm';
import './MovieListPage.scss';

const MovieListPage = () => {
  const [movieList, setMovieList] = useState([]);
  const handleSearchClick = (e, movie, year) => {
    e.preventDefault();
    console.log(movie, year);
  };

  return (
    <div className="movie-list__container">
      <MovieListForm handleSearchClick={handleSearchClick} />
    </div>
  );
};

export default MovieListPage;
