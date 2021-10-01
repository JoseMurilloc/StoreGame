import { useEffect, useState } from 'react';
import { CardaGame } from '../../components/CardGame';
import { Header } from '../../components/Header';
import api from '../../services/api';
import { Container, GamesGrid } from './styles';

type Game = {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string; 
}

const GameAvailable: React.FC = () => {
 
  const [games, setGames] = useState<Game[]>([]);
  
  async function loadProducts() {
    try {
      const response = await api('/products')

      const games = response.data.map((game: Game) => ({...game, image: `http://localhost:3000/static/${game.image}`}))


      setGames(games)
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
        <h1 className="title">Nossos jogos</h1>
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
