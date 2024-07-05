import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface SearchInputProps {
  onSearch: (city: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <div>
      <TextField
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default SearchInput;
