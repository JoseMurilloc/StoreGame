import { Container } from "./styles";
import addShoppingCart from '../../assets/icons/add_shopping_cart.svg'

interface CardGameProps {
  product: {
    id: number;
    name: string;
    price: number;
    score: number;
    image: string; 
  }
}

export function CardaGame({product}: CardGameProps) {
  return (
    <Container>
      <img src={product.image} alt="image_game" /> 
      <div className="content">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
      <button>
        <img src={addShoppingCart} alt="icon_add_to_cart" />
        <span>Carrinho</span>
      </button>
    </Container>
  )
}