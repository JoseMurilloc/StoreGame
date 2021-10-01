import {Container, BestGameToYou} from './styles'
import storeGameLogo from '../../assets/storeGameLogo.svg'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Container>
      <img src={storeGameLogo} alt="storeGameLogo" />

      <BestGameToYou>
        <span> - Experiências incríveis</span>
        <h1>Melhores jogos para você</h1>
        <h3>
          Conheça nossos jogos Conheça nossos jogos Conheça nossos jogos Conheça nossos jogos
        </h3>

        <Link to="/games">Conheça nossos jogos</Link>
      </BestGameToYou>
    </Container>
  ) 
}
