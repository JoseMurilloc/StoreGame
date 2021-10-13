import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { CardGame } from '../../components/CardGame';
import { CardLoadingProduct } from '../../components/CardLoadingProduct';
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
  const [loadProduct, setLoadProduct] = useState(true);
  const lineLoad = [0,1,2,3,4,5,6,7,8]

  async function loadProducts() {
    try {
      const response = await api('/products')

      const gamesFormatted = response.data.map((game: Game) => ({
        ...game, 
        priceFormatted: formatPrice(game.price),
        image: `http://localhost:3000/static/${game.image}`
      }))


      setGames(gamesFormatted)
    } catch(err) {
      toast.error('Problema ao carregar os produtos');
    } finally { 
      setLoadProduct(false)
    }
  }


  useEffect(() => {
    loadProducts()
  }, [])

  


  return (
    <Container>
      <Header />
      <div className="warnPriceFree">
        <span>Frete grátis acima de R$ 250,00</span>
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
          {loadProduct ? (
            lineLoad.map(item => (
              <CardLoadingProduct key={item} />
            ))
          ) : (
            games.map(game => (
              <CardGame product={game} key={game.id}  />
            ))
          )}
        </GamesGrid> 
      </div> 

    </Container>
  );
};

export default GameAvailable;
