import React, { useState } from 'react';

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
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? (
          <span>Spinner</span> // Replace this with your spinner component or element
        ) : (
          <span>Search Icon</span> // Replace this with your search icon
        )}
      </button>
    </form>
  );
};

export default SearchBar;
