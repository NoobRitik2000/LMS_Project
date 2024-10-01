// pages/patron-dashboard.tsx
import { Box, Typography } from '@mui/material';
import BookList from '../components/BookList'; // Importing BookList component
import SearchBar from '../components/SearchBar';

const PatronDashboard = () => {
  return (
    <Box mt={5}>
      <Typography variant="h4">Patron Dashboard</Typography>
      <SearchBar />
      <BookList books={[]} /> {/* Pass the books array from state or API */}
      {/* Add more functionalities for borrowing and account management */}
    </Box>
  );
};

export default PatronDashboard;
