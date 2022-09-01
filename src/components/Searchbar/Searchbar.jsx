import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { IoSearchOutline } from 'react-icons/io5';
import { Box } from '../Box';
import { Form, Input, Button } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => setSearchQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      return emptySearchFieldNotification();
    }
    onSubmit(searchQuery);
  };

  const emptySearchFieldNotification = () => {
    toast.info('Please enter a keyword for search');
  };

  return (
    <Box
      as="header"
      position="fixed"
      display="flex"
      justifyContent="center"
      p={2}
      width="100%"
      bg="blue"
    >
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          type="text"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <Button type="submit" aria-label="search button">
          <IoSearchOutline />
        </Button>
      </Form>
    </Box>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { Searchbar };
