import { useState } from 'react';
import MovieListForm from '../components/movieList/MovieListForm';
import './MovieListPage.scss';

const MovieListPage = () => {
  const [movieList, setMovieList] = useState([]);
  const handleSearchClick = (e) => {
    e.preventDefault();
    console.log('hello!');
  };

  return (
    <div className="movie-list__container">
      <MovieListForm handleSearchClick={handleSearchClick} />
    </div>
  );
};

export default MovieListPage;
