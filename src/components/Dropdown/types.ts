import { Dispatch } from 'react';

export type Game = {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
  priceFormatted?: string;
};

export interface DropdownProps {
  games: Array<Game>
  setGames: Dispatch<React.SetStateAction<Game[]>>
}

export type TypesSelectOptions = 'smallerPrices' | 'biggerPrices' | 'Alphabet' | 'bestSellers' | 'AlphabetReverse' | null

export type Option = {
  label: string;
  typeSelect: TypesSelectOptions;
}
