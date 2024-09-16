import { Link } from 'react-router-dom';
import { Character } from '../../schema/types';

type CharacterTableProps = {
  characters: Character[];
};

const CharacterTable = ({ characters }: CharacterTableProps) => (
  <table className="table striped">
    <thead>
      <tr>
        <th>Avatar</th>
        <th>Name</th>
        <th>Species</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {characters.map((character) => (
        <tr key={character.id}>
          <td>
            <img src={character.image} alt={character.name} width="50" />
          </td>
          <td>
            <Link to={`/profile/${character.id}`}>{character.name}</Link>
          </td>
          <td>{character.species}</td>
          <td>{character.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CharacterTable;
