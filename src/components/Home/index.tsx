import useCharacters from '../../hooks/useCharacters';
import CharacterTable from './CharacterTable';
import ErrorMessage from '../common/ErrorMessage';
import Loader from '../common/Loader';
import useStateContext from '../../hooks/useStateContext';
import SearchField from './SearchField';
import Pagination from './Pagination';

const Home = () => {
  const { state } = useStateContext();

  const { loading, error, characters, totalPages } = useCharacters({
    page: state.currentPage,
    name: state.searchQuery,
  });

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <SearchField />
      <ErrorMessage error={error} />
      <Loader loading={loading}>
        <CharacterTable characters={characters} />
        <Pagination totalPages={totalPages} />
      </Loader>
    </>
  );
};

export default Home;
