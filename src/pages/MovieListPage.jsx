import MovieListHeader from '../components/movieList/MovieListHeader';
import MovieListForm from '../components/movieList/MovieListForm';
import MovieList from '../components/movieList/MovieList';
import { fetchMovies } from '../api/fetchMovies';
import './MovieListPage.scss';

const MovieListPage = ({
  movieList,
  setMovieList,
  movieForm,
  setMovieForm,
  handleDetailClick,
}) => {
  const handleSearchClick = async (e, movie, year, type) => {
    e.preventDefault();
    const movies = await fetchMovies({ movie, year, type });
    setMovieForm({ movie, year, type });
    setMovieList([movies.data]);
  };

  const displayMovieList = () => {
    if (movieList.length && movieList[0].Error) {
      return (
        <div className="movie-list-page__no-movie">
          Your search does not exist. Please try again.
        </div>
      );
    } else if (!movieList.length) {
      return (
        <div className="movie-list-page__no-movie">
          Please search for a movie, series, or episode
        </div>
      );
    }

    return (
      <MovieList movieList={movieList} handleDetailClick={handleDetailClick} />
    );
  };

  return (
    <div className="movie-list-page__container">
      <MovieListHeader />
      <MovieListForm
        movieForm={movieForm}
        handleSearchClick={handleSearchClick}
      />
      {displayMovieList()}
      {/* {movieList.length ? (
        <MovieList
          movieList={movieList}
          handleDetailClick={handleDetailClick}
        />
      ) : (
        <div className="movie-list-page__no-movie">
          Please search for a movie, series, or episode
        </div>
      )} */}
    </div>
  );
};

export default MovieListPage;
