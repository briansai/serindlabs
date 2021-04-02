import { Fragment } from 'react';
import { ListGroup } from 'react-bootstrap';
import './MovieDetail.scss';

const MovieDetail = ({ movieDetail }) => {
  const { Title, Poster, Year, Type, Released, Genre, Ratings } = movieDetail;
  const details = Object.entries({
    Title,
    Poster,
    Year,
    Type,
    Released,
    Genre,
    Ratings,
  });

  const displayItems = (item, value) => {
    if (item === 'Ratings') {
      return (
        <ListGroup>
          <ListGroup.Item>
            Ratings:{' '}
            {value.map((rating, index) => {
              const { Source, Value } = rating;

              return (
                <ListGroup.Item key={`${Source}-${index}`}>
                  {`${Source}: ${Value}`})
                </ListGroup.Item>
              );
            })}
          </ListGroup.Item>
        </ListGroup>
      );
    } else if (item === 'Poster') {
      return (
        <ListGroup.Item>
          Image:
          <img src={value} />
        </ListGroup.Item>
      );
    }

    return <ListGroup.Item>{`${item}: ${value}`}</ListGroup.Item>;
  };

  return (
    <ListGroup variant="flush" className="detail-list__container">
      {details.map((detail, idx) => {
        const item = detail[0];
        const value = detail[1];

        return (
          <Fragment key={`${item}-${idx}`}>
            {displayItems(item, value)}
          </Fragment>
        );
      })}
    </ListGroup>
  );
};

export default MovieDetail;
