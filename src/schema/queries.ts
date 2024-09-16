import { gql } from '@apollo/client';

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      status
      gender
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

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $name: String) {
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
