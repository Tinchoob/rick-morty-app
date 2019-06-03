import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../containers/Home';
import CharacterInfo from '../containers/CharacterInfo';

const AppNavigator = createStackNavigator(
  {
    Home,
    CharacterInfo
  },
  {
    headerStyle: {
      elevation: 0
    }
  }
);

export default createAppContainer(AppNavigator);
