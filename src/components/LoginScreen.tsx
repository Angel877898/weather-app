import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsername } from '../store/userSlice';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const LoginScreen: React.FC = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(setUsername(name));
    }
  };

  return (
    <Container
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" mb={2} sx={{ color: '#3f51b5' }}>
          Weather App
        </Typography>
        <Typography variant="h5" mb={2} sx={{ color: '#3f51b5' }}>
          Enter your name
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            margin="normal"
            sx={{
              marginBottom: '20px',
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              backgroundColor: '#3f51b5',
              '&:hover': {
                backgroundColor: '#303f9f',
              },
            }}
          >
            Continue
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginScreen;
