import { Table, Button } from 'react-bootstrap';
import { tableHeaders } from '../../constants/constants';
import './MovieList.scss';

const MovieList = ({ movieList }) => {
  return (
    <div className="movie-list__container">
      <Table striped bordered hover>
        <thead>
          <tr>
            {tableHeaders.map((header, idx) => (
              <th key={`${header}-${idx}`}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {movieList.map((movies, idx) => {
            const { Title, Year, Poster, Type } = movies;
            return (
              <tr key={`${Title}-${idx}`} className="movie-list__description">
                <td>{Title}</td>
                <td>
                  <img src={Poster} height="32" width="32" alt="movie"></img>
                </td>
                <td>{Year}</td>
                <td>{Type}</td>
                <td>
                  <Button>Detail</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default MovieList;
