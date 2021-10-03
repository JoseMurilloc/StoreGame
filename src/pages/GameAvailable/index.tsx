import { useEffect, useState } from 'react';
import { CardaGame } from '../../components/CardGame';
import { Dropdown } from '../../components/Dropdown';
import { Header } from '../../components/Header';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import { Container, GamesGrid } from './styles';

export type Game = {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string; 
  priceFormatted?: string;
}

const GameAvailable: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  
  async function loadProducts() {
    try {
      const response = await api('/products')

      const gamesFormatted = response.data.map((game: Game) => ({
        ...game, 
        priceFormatted: formatPrice(game.price),
        image: `http://localhost:3000/static/new/${game.image}`
      }))


      setGames(gamesFormatted)
    } catch(err) {
      console.error(err);
    }
  }


  useEffect(() => {
    loadProducts()
  }, [])

  


  return (
    <Container>
      <Header />
      <div className="warnPriceFree">
        <span>Frete grátis acima de R$ 250</span>
      </div>

      <div className="content">
        <div className="header">
          <h1 className="title">Nossos jogos</h1>
          <Dropdown 
            games={games} 
            setGames={setGames}
          />
        </div>
        <GamesGrid>
          {games.map(game => (
            <CardaGame product={game} key={game.id}  />
          ))}
        </GamesGrid> 
      </div> 

    </Container>
  );
};

export default GameAvailable;
