import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Details from './pages/Details';
import MoreDetails from './pages/MoreDetails';
import NewRequest from './pages/NewRequest';

const AppDetails = createStackNavigator(
  {
    Details,
    MoreDetails,
  },
  {
    navigationOptions: {
      title: 'Detalhes',
    },
  }
);

const AppRequests = createStackNavigator(
  {
    NewRequest,
  },
  {
    navigationOptions: {
      title: 'Nova Solicitação',
    },
  }
);

const Routes = () =>
  createAppContainer(createStackNavigator({ Home, AppDetails, AppRequests }));

export default Routes;
