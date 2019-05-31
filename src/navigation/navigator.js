import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../containers/Home';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  }
});

export default createAppContainer(AppNavigator);
