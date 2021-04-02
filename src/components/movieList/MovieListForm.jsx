import { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
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
    <Form onSubmit={handleSearchClick}>
      <Form.Group>
        <Form.Label>Search</Form.Label>
        <Form.Control
          type="text"
          name="movie"
          onChange={(e) => handleInputChange(e)}
          placeholder="Search movie"
        />
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Label>Type</Form.Label>
        <Form.Control as="select" multiple value={field}>
          {movieType.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
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
