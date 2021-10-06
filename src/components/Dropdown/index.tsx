import { Container } from './styles';
import down from '../../assets/icons/down.svg'
import { useEffect, useState, Dispatch, useCallback } from 'react';
import { Game } from '../../pages/GameAvailable';


interface DropdownProps { 
  games: Array<Game>
  setGames: Dispatch<React.SetStateAction<Game[]>>
}

type Option = {
  label: string;
  typeSelect: 'smallerPrices' | 'biggerPrices' | 'Alphabet' | 'bestSellers' | ''
}

export function Dropdown({games, setGames}:DropdownProps) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState<Option>(
    {label:'Ordena por', typeSelect: ''}
  );

  const options: Option[] = [
    {label: 'Mais popular', typeSelect: 'bestSellers'}, 
    {label: 'Preço: baixo a alto', typeSelect: 'smallerPrices'}, 
    {label: 'Preço: alto a baixo', typeSelect: 'biggerPrices'}, 
    {label: 'Ordem alfabética', typeSelect: 'Alphabet'},
  ]

  
  useEffect(() => {
    const {typeSelect} = selected

    if (typeSelect === 'Alphabet') handleOrderAlphabetical()
    if (typeSelect === 'bestSellers') handleOrderScore()
    if (typeSelect === 'biggerPrices' || typeSelect === 'smallerPrices') {
      handleOrderGamesPrices(typeSelect)
    } 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])
  

  const handleOrderScore = useCallback(() => {
    const orderScore = games
      .sort((a: Game, b: Game) => a.score - b.score)
      .reverse()

    setGames([...orderScore])
  }, [games, setGames]) 
    
  const handleOrderAlphabetical = useCallback(() => {
    const orderAlphabetical = games.sort((a: Game, b: Game) => {
      return a.name.localeCompare(b.name);
    })    
    setGames([...orderAlphabetical])
  }, [games, setGames]) 

  const handleOrderGamesPrices = useCallback(
    (type: 'biggerPrices' | 'smallerPrices') => {
      let gamesOrderPrices = games.sort((a: Game, b: Game) => a.price - b.price)
      
      if (type === 'biggerPrices') {
        gamesOrderPrices = gamesOrderPrices.reverse()
      }
      setGames([...gamesOrderPrices])
  }, [games, setGames])
  

  function handleChooseOption(option: Option) {
    setSelected(option)
    setIsActive(state => !state)
  }
  
  return (
    <Container isActive={isActive}>
      <div className="dropdown" onClick={() => setIsActive(state => !state)}>
          <span>{selected.label}</span>
          <img src={down} alt="down" /> 
      </div>
      <div className="wrapperOptions">
        {options.map(option => (
          <div 
            onClick={() => handleChooseOption(option)}
            className="dropdown-option"
            key={option.typeSelect}
          >
            {option.label}
          </div>
        ))}
      </div>
    </Container>
  )
}