import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsername } from '../store/userSlice';
import { TextField, Button, Container, Typography } from '@mui/material';

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
    <Container>
      <Typography variant="h4">Welcome! Please enter your name to continue</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Continue
        </Button>
      </form>
    </Container>
  );
};

export default LoginScreen;
