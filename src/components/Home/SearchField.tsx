import { useCallback, useEffect, useState } from 'react';
import useStateContext from '../../hooks/useStateContext';

const SearchField = () => {
  const { state, actions } = useStateContext();
  const [search, setSearch] = useState(state.searchQuery);

  const handleSearch = useCallback(() => {
    actions.setSearchQuery(search);
    actions.setCurrentPage(1);
  }, [search]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search !== state.searchQuery) handleSearch();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search, handleSearch]);

  return (
    <input
      type="search"
      name="search"
      aria-label="Search by name"
      placeholder="Search by name"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchField;
