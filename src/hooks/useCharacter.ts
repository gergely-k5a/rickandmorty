import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Character } from '../schema/types';
import { GET_CHARACTER } from '../schema/queries';

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
