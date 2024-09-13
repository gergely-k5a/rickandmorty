import { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Character } from '../components/types';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      gender
      name
      image
      species
      status
      location {
        name
      }
      origin {
        name
      }
      episode {
        id
        name
        episode
      }
    }
  }
`;

const useCharacter = (id: string) => {
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    if (data) {
      setCharacter(data.character);
    }
  }, [data]);

  return {
    loading,
    error,
    character,
  };
};

export default useCharacter;
