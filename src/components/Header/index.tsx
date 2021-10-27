import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { Cart, Container } from './styles';

import storeGameLogo from '../../assets/storeGameLogo.svg';
import shoppingBag from '../../assets/icons/shopping_bag.svg';
import user from '../../assets/icons/user.svg';
import { useCart } from '../../hook/cart';

export function Header() {
  const { cart } = useCart();

  const amountProductOfCart = useMemo(() => cart.length, [cart]);

  return (
    <Container>
      <Link to="/games">
        <img src={storeGameLogo} alt="store_logo" />
      </Link>
      <div className="content">
        <Cart to="/cart" countgames={amountProductOfCart}>
          <img className="bag" src={shoppingBag} alt="bag_icon" />
        </Cart>
        <img src={user} alt="user_icon" />
      </div>
    </Container>
  );
}
