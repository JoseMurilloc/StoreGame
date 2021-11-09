import { Switch } from 'react-router-dom';
import Route from './Router';
import { Cart } from '../pages/Cart';
import { GameAvailable } from '../pages/GameAvailable';
import { Home } from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/games" component={GameAvailable} />
    <Route path="/cart" component={Cart} />
  </Switch>
);

export default Routes;
