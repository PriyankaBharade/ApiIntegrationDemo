
import SearchScreen from './src/screens/SearchScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



const navigator = createAppContainer(
  createStackNavigator(
    {
      SearchScreen: SearchScreen
    },
    {
      initialRouteName: 'SearchScreen',
     
    }
  )
);

export default navigator