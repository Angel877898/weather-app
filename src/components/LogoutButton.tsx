import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../store/userSlice';

const LogoutButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
