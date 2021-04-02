import { useState } from 'react';
import MovieListPage from './pages/MovieListPage';
import MovieDetail from './pages/MovieDetailPage';
import './App.css';

const App = () => {
  const [movieDetail, setMovieDetail] = useState({});
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
          handleDetailClick={handleDetailClick}
        />
      ) : (
        <MovieDetail
          movieDetail={movieDetail}
          handleBackClick={handleBackClick}
        />
      )}
    </div>
  );
};

export default App;
