import { Switch } from 'react-router-dom';
import GameAvailable from '../pages/GameAvailable';
import Home from '../pages/Home';
import Route from './Router';


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact  path="/" component={Home} />
      <Route path="/games" component={GameAvailable} />
    </Switch>
  );
}

export default Routes;