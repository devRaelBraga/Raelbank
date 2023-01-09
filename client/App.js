import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Views/login';
import Cadastro from './src/Views/cadastro';
import Menu from './src/Views/menu';
import PixMenu from './src/Views/pix/pixmenu';
import SendPix from './src/Views/pix/sendpix';
import KeysMenu from './src/Views/pix/keysmenu';
import CardsMenu from './src/Views/card/cardmenu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#242424'}></StatusBar>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Menu" component={Menu} options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="PixMenu" component={PixMenu} options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="SendPix" component={SendPix} options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="KeysMenu" component={KeysMenu} options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="CardMenu" component={CardsMenu} options={{ cardStyleInterpolator: forFade }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const forFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});