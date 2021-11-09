import {
  useEffect, useState, useCallback,
} from 'react';
import { Container } from './styles';
import down from '../../assets/icons/down.svg';
import { Option, DropdownProps, Game } from './types';

export function Dropdown({ games, setGames }:DropdownProps) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState<Option>(
    { label: 'Ordena por', typeSelect: null },
  );

  const options: Option[] = [
    { label: 'Mais popular', typeSelect: 'bestSellers' },
    { label: 'Preço: baixo a alto', typeSelect: 'smallerPrices' },
    { label: 'Preço: alto a baixo', typeSelect: 'biggerPrices' },
    { label: 'Ordenar A-Z', typeSelect: 'Alphabet' },
    { label: 'Ordenar Z-A', typeSelect: 'AlphabetReverse' },
  ];

  const handleOrderAlphabetical = useCallback((typeOrder: string) => {
    let orderAlphabetical = games.sort(
      (a: Game, b: Game) => a.name.localeCompare(b.name),
    );

    if (typeOrder === 'AlphabetReverse') {
      orderAlphabetical = orderAlphabetical.reverse();
    }
    setGames([...orderAlphabetical]);
  }, [games, setGames]);

  const handleOrderScore = useCallback(() => {
    const orderScore = games
      .sort((a: Game, b: Game) => a.score - b.score)
      .reverse();

    setGames([...orderScore]);
  }, [games, setGames]);

  const handleOrderGamesPrices = useCallback(
    (type: 'biggerPrices' | 'smallerPrices') => {
      let gamesOrderPrices = games.sort((a: Game, b: Game) => a.price - b.price);

      if (type === 'biggerPrices') {
        gamesOrderPrices = gamesOrderPrices.reverse();
      }
      setGames([...gamesOrderPrices]);
    }, [games, setGames],
  );

  const handleChooseOption = useCallback((option: Option) => {
    setSelected(option);
    setIsActive((state) => !state);
  }, []);

  useEffect(() => {
    const { typeSelect } = selected;

    if (typeSelect === 'Alphabet' || typeSelect === 'AlphabetReverse') {
      handleOrderAlphabetical(typeSelect);
    }
    if (typeSelect === 'bestSellers') handleOrderScore();
    if (typeSelect === 'biggerPrices' || typeSelect === 'smallerPrices') {
      handleOrderGamesPrices(typeSelect);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <Container isActive={isActive}>
      <button
        type="button"
        className="resetButton dropdown"
        onClick={() => setIsActive((state) => !state)}
      >
        <span>{selected.label}</span>
        <img src={down} alt="down" />
      </button>
      <div className="wrapperOptions">
        {isActive && options.map((option) => (
          <button
            type="button"
            onClick={() => handleChooseOption(option)}
            className="resetButton dropdown-option"
            key={option.typeSelect}
          >
            {option.label}
          </button>
        ))}
      </div>
    </Container>
  );
}
