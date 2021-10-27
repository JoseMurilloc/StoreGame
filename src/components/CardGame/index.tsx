import { useState } from 'react';
import { Container, Loader } from './styles';
import addShoppingCart from '../../assets/icons/add_shopping_cart.svg';
import { useCart } from '../../hook/cart';

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

export function CardGame({ product }: CardGameProps) {
  const [loadAddProduct, setLoadAddProduct] = useState(false);
  const { addProduct } = useCart();

  async function handleAddProduct(productId: number) {
    setLoadAddProduct(true);
    await addProduct(productId);
    setLoadAddProduct(false);
  }

  return (
    <Container>
      <img className="image-game" src={product.image} alt="image_game" />
      <div className="content">
        <span className="name">{product.name}</span>
        <span className="price">{product.priceFormatted}</span>
      </div>
      <button
        type="button"
        onClick={() => handleAddProduct(product.id)}
        disabled={loadAddProduct}
      >
        {loadAddProduct ? (
          <Loader />
        ) : (
          <img className="addCart" src={addShoppingCart} alt="icon_add_to_cart" />
        )}
        <span>Carrinho</span>
      </button>
    </Container>
  );
}
