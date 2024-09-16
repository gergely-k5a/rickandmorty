import { Character } from '../../schema/types';

type CharacterDetailsProps = {
  character: Character;
};

const CharacterDetails = ({ character }: CharacterDetailsProps) => (
  <>
    <h1>{character.name}</h1>
    <article className="profile-card">
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <div>
        <p>
          <b>Species:</b> {character.species}
        </p>
        <p>
          <b>Status:</b> {character.status}
        </p>
        <p>
          <b>Location:</b> {character.location.name}
        </p>
        <p>
          <b>Gender:</b> {character.gender}
        </p>
      </div>
    </article>
    <h2>Episodes</h2>
    <ul>
      {character.episode.map(({ id, episode, name }) => (
        <li key={id}>
          {episode} - {name}
        </li>
      ))}
    </ul>
  </>
);

export default CharacterDetails;
