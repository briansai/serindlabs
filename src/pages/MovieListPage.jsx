import { useState } from 'react';
import MovieListForm from '../components/movieList/MovieListForm';
import MovieList from '../components/movieList/MovieList';
import { fetchMovies } from '../api/fetchMovies';
import './MovieListPage.scss';

const MovieListPage = () => {
  const [movieList, setMovieList] = useState([]);
  const handleSearchClick = async (e, movie, year) => {
    e.preventDefault();
    const movies = await fetchMovies({ movie, year });
    console.log(movies);
    setMovieList([movies.data]);
  };

  return (
    <div className="movie-list__container">
      <MovieListForm handleSearchClick={handleSearchClick} />
      {movieList.length ? (
        <MovieList movieList={movieList} />
      ) : (
        <div className="movie-list__no-movie">
          Please search for a movie, series, or episode
        </div>
      )}
    </div>
  );
};

export default MovieListPage;
