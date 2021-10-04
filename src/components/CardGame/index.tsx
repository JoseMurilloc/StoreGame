import { Container } from "./styles";
import addShoppingCart from '../../assets/icons/add_shopping_cart.svg'
import { useCart } from "../../hook/cart";

interface CardGameProps {
  product: {
    id: number;
    name: string;
    price: number;
    score: number;
    image: string;
    priceFormatted?: string;
  }
}

export function CardaGame({product}: CardGameProps) {
  
  const { addProduct } = useCart()

  return (
    <Container>
      <img className="image-game" src={product.image} alt="image_game" /> 
      <div className="content">
        <span className="name">{product.name}</span>
        <span className="price">{product.priceFormatted}</span>
      </div>
      <button
        onClick={() => addProduct(product.id)}
      >
        <img src={addShoppingCart} alt="icon_add_to_cart" />
        <span>Carrinho</span>
      </button>
    </Container>
  )
}