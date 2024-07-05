import React, { useState } from 'react';
import { TextField, Button, Autocomplete } from '@mui/material';

interface SearchInputProps {
  onSearch: (city: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [options, setOptions] = useState<string[]>([]);

  const handleSearch = () => {
    if (city) {
      onSearch(city);
      setCity('');
    }
  };

  const handleInputChange = async (event: React.ChangeEvent<{}>, value: string) => {
    setCity(value);
    if (value.length > 2) {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${value}&format=json&limit=5`);
        const data = await response.json();
        setOptions(data.map((item: any) => item.display_name));
      } catch (error) {
        console.error('Error fetching city suggestions:', error);
      }
    } else {
      setOptions([]);
    }
  };

  return (
    <div>
      <Autocomplete
        freeSolo
        options={options}
        inputValue={city}
        onInputChange={handleInputChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="City"
            
          />
        )}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default SearchInput;
