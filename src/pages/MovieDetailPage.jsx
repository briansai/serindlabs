import { Button } from 'react-bootstrap';
import MovieDetail from '../components/movieDetail/MovieDetail';
import './MovieDetailPage.scss';

const MovieDetailPage = ({ movieDetail, handleBackClick }) => {
  return (
    <div className="movie-detail-page">
      <Button onClick={handleBackClick} className="movie-detail-page__btn">
        Back
      </Button>
      <MovieDetail movieDetail={movieDetail} />
    </div>
  );
};

export default MovieDetailPage;
