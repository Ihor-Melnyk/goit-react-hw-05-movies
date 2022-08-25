import { useState } from 'react';
import { Form } from './SearchMovie.styled';

export const SearchMovie = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const normalizedValue = inputValue.trim().toLowerCase();
    if (!normalizedValue) {
      setInputValue('');
      return;
    }

    onSubmit(normalizedValue);
    setInputValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        name="movieName"
        placeholder="Search movies"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </Form>
  );
};
