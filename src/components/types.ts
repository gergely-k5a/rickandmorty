export type Character = {
  id: number;
  name: string;
  species: string;
  status: string;
  image: string;
  episode: Episode[];
  location: Location;
  gender: string;
  origin: Location;
};

export type CharacterInfo = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

export type CharacterResponse = {
  characters: {
    info: CharacterInfo;
    results: Character[];
  };
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
};

export type Episode = {
  id: number;
  name: string;
  episode: string;
};
