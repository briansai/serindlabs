import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { movieType } from '../../constants/constants';

const inputText = {
  movie: '',
  year: '',
};

const MovieListForm = ({ handleSearchClick }) => {
  const [field, setField] = useState('Select Movie Type');
  const [{ movie, year }, setState] = useState({ inputText });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Form onSubmit={(e) => handleSearchClick(e, movie, year)}>
      <Form.Group>
        <Form.Label>Search</Form.Label>
        <Form.Control
          type="text"
          name="movie"
          onChange={(e) => handleInputChange(e)}
          placeholder="Search movie"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Type</Form.Label>
        <Form.Control as="select" custom>
          {movieType.map((type, idx) => (
            <option key={`${type}-${idx}`}>{type}</option>
          ))}
          <option>Movie</option>
          <option>Series</option>
          <option>Episodes</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Year</Form.Label>
        <Form.Control
          onChange={(e) => handleInputChange(e)}
          type="text"
          name="year"
          placeholder="Year"
        />
      </Form.Group>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default MovieListForm;
