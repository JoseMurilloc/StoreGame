import { Container } from "./styles";

import storeGameLogo from '../../assets/storeGameLogo.svg'
import shoppingBag from '../../assets/icons/shopping_bag.svg'
import user from '../../assets/icons/user.svg'
import { Link } from "react-router-dom";


export function Header() {
  return (
    <Container>
      <Link to="/games">
        <img src={storeGameLogo} alt="store_logo" />
      </Link>


      <div className="content">
        <img className="bag" src={shoppingBag} alt="bag_icon" /> 
        <img src={user} alt="user_icon" />
      </div>
    </Container>
  )
}