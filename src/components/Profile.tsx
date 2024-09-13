import { Link, useParams } from 'react-router-dom';
import useCharacter from '../hooks/useCharacter';
import CharacterDetails from './CharacterDetails';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

const Profile = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, character } = useCharacter(id!);

  return (
    <>
      <Link to="/">{'<< Back'}</Link>
      <hr></hr>
      <ErrorMessage error={error} />
      <Loader loading={loading}>
        {character && <CharacterDetails character={character} />}
      </Loader>
    </>
  );
};

export default Profile;
