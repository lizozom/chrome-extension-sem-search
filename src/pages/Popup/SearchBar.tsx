import React, { useState } from 'react';
import { TextField, IconButton, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  search: (searchTerm: string) => Promise<any>;
}

const SearchBar: React.FC<SearchBarProps> = ({ search }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const result = await search(searchTerm);
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <TextField
        type="text"
        size="small"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      &nbsp;
      <IconButton size="small" type="submit" disabled={isLoading}>
        {isLoading ? <CircularProgress size={20} /> : <SearchIcon />}
      </IconButton>
    </form>
  );
};

export default SearchBar;
