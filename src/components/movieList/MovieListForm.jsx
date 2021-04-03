import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import './MovieListForm.scss';

const inputText = {
  movie: '',
  year: '',
};

const MovieListForm = ({ handleSearchClick, movieForm }) => {
  const [type, setType] = useState(movieForm.type || '');
  const [{ movie, year }, setState] = useState({ ...(movieForm || inputText) });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleTypeChange = (e) => {
    const { value } = e.target;
    setType(value);
  };

  return (
    <Form onSubmit={(e) => handleSearchClick(e, movie, year, type)}>
      <Form.Group className="form">
        <Form.Label>Search: </Form.Label>
        <Form.Control
          type="text"
          name="movie"
          onChange={(e) => handleInputChange(e)}
          placeholder="Search movie"
          defaultValue={movie}
          required
        />
      </Form.Group>
      <Form.Group className="form">
        <Form.Label>Type: </Form.Label>
        <Form.Control
          as="select"
          defaultValue={movieForm.type || '-Select-'}
          onChange={handleTypeChange}
        >
          <option disabled>-Select-</option>
          <option>movie</option>
          <option>series</option>
          <option>episode</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="form">
        <Form.Label>Year: </Form.Label>
        <Form.Control
          onChange={(e) => handleInputChange(e)}
          type="text"
          name="year"
          defaultValue={year}
          placeholder="Year"
        />
      </Form.Group>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default MovieListForm;
