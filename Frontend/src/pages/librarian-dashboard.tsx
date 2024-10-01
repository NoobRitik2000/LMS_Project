// pages/librarian-dashboard.tsx
import { Box, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import BookList from '../components/BookList'; // Importing BookList component
import SearchBar from '../components/SearchBar';

const LibrarianDashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the API
    const fetchBooks = async () => {
      const response = await fetch('/api/books');
      const data = await response.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <Box mt={5}>
      <Typography variant="h4">Librarian Dashboard</Typography>
      <SearchBar /> {/* Search functionality */}
      <Button variant="contained" color="primary" onClick={() => {/* Logic to add new book */}}>
        Add New Book
      </Button>
      <BookList books={books} />
      {/* Add more functionalities as required */}
    </Box>
  );
};

export default LibrarianDashboard;
