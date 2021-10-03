import { Container } from './styles';
import down from '../../assets/icons/down.svg'
import { useState } from 'react';

interface DropdownProps { 
  selected: string
  setSelected: any
}

export function Dropdown({selected, setSelected}:DropdownProps) {
  const [isActive, setIsActive] = useState(false); 
  
  const options = [
    'Mais vendidos', 
    'Preço: baixo a alto', 
    'Preço: alto a baixo', 
    'Ordem alfabética'
  ]

  function handleActiveOptions() {
    setIsActive(state => !state)
  }
  function handleChooseOption(option: string) {
    setSelected(option)
    handleActiveOptions()
  }
  
  return (
    <Container isActive={isActive}>
      <div className="dropdown" onClick={handleActiveOptions}>
        { selected.length > 0 
          ? <span>{selected}</span> 
          : <span>Ordena por</span>
        }
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