import { useParams, useNavigate } from 'react-router-dom';
import useCharacter from '../../hooks/useCharacter';
import CharacterDetails from './CharacterDetails';
import Loader from '../common/Loader';
import ErrorMessage from '../common/ErrorMessage';

const Profile = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, character } = useCharacter(id!);
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <button onClick={clickHandler} className="outline contrast">
        {'<< Back'}
      </button>
      <hr></hr>
      <ErrorMessage error={error} />
      <Loader loading={loading}>
        {character && <CharacterDetails character={character} />}
      </Loader>
    </>
  );
};

export default Profile;
