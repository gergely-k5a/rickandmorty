import { GET_CHARACTER } from '../../schema/queries';

export default {
  request: {
    query: GET_CHARACTER,
    variables: { id: '1' },
  },
  result: {
    data: {
      character: {
        id: '1',
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          __typename: 'Location',
        },
        location: {
          name: 'Earth (Replacement Dimension)',
          __typename: 'Location',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        episode: [
          {
            id: '1',
            name: 'Pilot',
            air_date: 'December 2, 2013',
            episode: 'S01E01',
            __typename: 'Episode',
          },
          // Add more episodes if needed
        ],
        __typename: 'Character',
      },
    },
  },
};
