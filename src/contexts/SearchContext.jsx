import { createContext, useState } from 'react';

const SearchContext = createContext();

export default SearchContext;

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, updateSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};
