import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Character } from '../schema/types';
import { CharacterResponse } from '../schema/types';
import { GET_CHARACTERS } from '../schema/queries';

type UseCharactersProps = {
  page: number;
  name: string;
};

const useCharacters = ({ page, name }: UseCharactersProps) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const { loading, error, data } = useQuery<CharacterResponse>(GET_CHARACTERS, {
    variables: { page, name },
  });

  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
      setTotalPages(data.characters.info.pages);
    }
  }, [data]);

  return { loading, error, characters, totalPages };
};

export default useCharacters;
