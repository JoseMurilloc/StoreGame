import { Container } from './styles';
import down from '../../assets/icons/down.svg'
import { useEffect, useState, Dispatch, useCallback } from 'react';
import { Game } from '../../pages/GameAvailable';


interface DropdownProps { 
  games: Array<Game>
  setGames: Dispatch<React.SetStateAction<Game[]>>
}

export function Dropdown({games, setGames}:DropdownProps) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('Ordena por');

  
  useEffect(() => {
    if (selected === 'Ordem alfabética') {
      handleOrderAlphabetical()
    }

    if (selected === 'Mais popular') {
      handleOrderScore()
    }

    if (selected === 'Preço: baixo a alto') {
      handleOrderGamesPrices('smallerPrices')
    } 
    
    if (selected  === 'Preço: alto a baixo') {
      handleOrderGamesPrices('biggerPrices')
    }
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
  

  const options = [
    'Mais popular', 
    'Preço: baixo a alto', 
    'Preço: alto a baixo', 
    'Ordem alfabética',
  ]

  function handleChooseOption(option: string) {
    setSelected(option)
    setIsActive(state => !state)
  }
  
  return (
    <Container isActive={isActive}>
      <div className="dropdown" onClick={() => setIsActive(state => !state)}>
          <span>{selected}</span>
          <img src={down} alt="down" /> 
      </div>
      <div className="wrapperOptions">
        {options.map(option => (
          <div 
            onClick={() => handleChooseOption(option)}
            className="dropdown-option"
            key={option}
          >
            {option}
          </div>
        ))}
      </div>
    </Container>
  )
}