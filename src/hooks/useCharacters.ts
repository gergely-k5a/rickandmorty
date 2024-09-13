import { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Character, CharacterResponse } from '../components/types';

type UseCharactersProps = {
  page: number;
  name: string;
};

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
      results {
        id
        name
        image
        species
        status
      }
      info {
        pages
      }
    }
  }
`;

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
