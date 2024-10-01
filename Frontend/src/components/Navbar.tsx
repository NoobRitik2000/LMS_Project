// components/Navbar.tsx
import { Typography, AppBar, Toolbar, Button } from '@mui/material';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <AppBar position="fixed" color="success">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Library Management System
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
