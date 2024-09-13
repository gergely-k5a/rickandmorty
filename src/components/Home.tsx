import { useCallback, useEffect, useState } from 'react';
import useCharacters from '../hooks/useCharacters';
import CharacterTable from './CharacterTable';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';

const Home = () => {
  const [search, setSearch] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, characters, totalPages } = useCharacters({
    page: currentPage,
    name: searchQuery,
  });

  const handleSearch = useCallback(() => {
    setSearchQuery(search);
    setCurrentPage(1);
  }, [search]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search, handleSearch]);

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <input
        type="search"
        name="search"
        aria-label="Search by name"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ErrorMessage error={error} />
      <Loader loading={loading}>
        <CharacterTable characters={characters} />
      </Loader>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
};

export default Home;
