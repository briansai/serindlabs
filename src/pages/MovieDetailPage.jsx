import { Button } from 'react-bootstrap';
import MovieDetail from '../components/movieDetail/MovieDetail';

const MovieDetailPage = ({ movieDetail, handleBackClick }) => {
  return (
    <div>
      <Button onClick={handleBackClick}>Back</Button>
      <MovieDetail movieDetail={movieDetail} />
    </div>
  );
};

export default MovieDetailPage;
