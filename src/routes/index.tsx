import { Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Route from './Router';


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact  path="/" component={Home} />
      {/* <Route path="/dashboard" component={Dashboard} isPrivate={true} /> */}
    </Switch>
  );
}

export default Routes;