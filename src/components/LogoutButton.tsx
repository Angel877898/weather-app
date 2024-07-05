import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/userSlice';
import { Button } from '@mui/material';

const LogoutButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Button onClick={handleLogout} variant="contained" color="secondary">
      Logout
    </Button>
  );
};

export default LogoutButton;
