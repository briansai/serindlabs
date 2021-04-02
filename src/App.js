import { useState } from 'react';
import MovieListPage from './pages/MovieListPage';
import MovieDetailPage from './pages/MovieDetailPage';
import './App.css';

const App = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const [movieForm, setMovieForm] = useState({});
  const [movieList, setMovieList] = useState([]);

  const handleDetailClick = (e, movie) => {
    e.preventDefault();
    setMovieDetail(movie);
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    setMovieDetail({});
  };

  return (
    <div className="App">
      {!movieDetail.hasOwnProperty('Title') ? (
        <MovieListPage
          movieList={movieList}
          setMovieList={setMovieList}
          movieForm={movieForm}
          setMovieForm={setMovieForm}
          handleDetailClick={handleDetailClick}
        />
      ) : (
        <MovieDetailPage
          movieDetail={movieDetail}
          handleBackClick={handleBackClick}
        />
      )}
    </div>
  );
};

export default App;
