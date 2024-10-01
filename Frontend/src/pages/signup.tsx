// pages/signup.tsx
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography, Container, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link'; // Import Link from Next.js
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2

interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string; // Add role to the inputs
}

export default function Signup() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SignupFormInputs>();
  const password = watch('password');
  const router = useRouter();

  const onSubmit = async (data: SignupFormInputs) => {
    localStorage.setItem('userData', JSON.stringify(data));
    try {
      // API call for signup
      const response = await axios.post('/api/signup', data);

      // Display success message
      if (response.status === 200) {
        Swal.fire({
          title: 'Registered Successfully!',
          text: 'You will be redirected to your dashboard.',
          icon: 'success',
          timer: 2000, // Close the dialog after 2 seconds
          showConfirmButton: false,
        });

        // Redirect to the appropriate dashboard after 2 seconds
        setTimeout(() => {
          if (data.role === 'Librarian') {
            router.push('/dashboard/librarian'); // Redirect to librarian dashboard
          } else if (data.role === 'Patron') {
            router.push('/dashboard/patron'); // Redirect to patron dashboard
          }
        }, 2000); // Wait for 2 seconds before redirecting
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error',
        text: 'Something went wrong during registration. Please try again.',
        icon: 'error',
      });
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: 'calc(100vh - 64px)', // Full height minus AppBar height
        display: 'flex',
        flexDirection: 'column', // Align items vertically
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        marginTop: '64px' // Push content below the AppBar
      }}
    >
      <Box>
        <Typography variant="h4" gutterBottom>Signup</Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' } })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters long' } })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            {...register('confirmPassword', { validate: value => value === password || 'Passwords do not match' })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
          <FormControl fullWidth margin="normal" error={!!errors.role}>
            <InputLabel>Role</InputLabel>
            <Select
              {...register('role', { required: 'Role is required' })}
              label="Role"
            >
              <MenuItem value="Librarian">Librarian</MenuItem>
              <MenuItem value="Patron">Patron</MenuItem>
            </Select>
            {errors.role && <Typography color="error">{errors.role.message}</Typography>}
          </FormControl>

          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
            Signup
          </Button>
        </form>
        <Typography variant="body2" mt={2}>
          Already have an account? <Link href="/login">Login here</Link>
        </Typography>
      </Box>
    </Container>
  );
}
