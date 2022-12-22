import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Views/login';
import Cadastro from './src/Views/cadastro';
import Menu from './src/Views/menu';
import PixMenu from './src/Views/pix/pixmenu';
import SendPix from './src/Views/pix/sendpix';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#242424' }}>
    <NavigationContainer>
      <StatusBar backgroundColor={'#242424'}></StatusBar>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Menu" component={Menu} options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="PixMenu" component={PixMenu} options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="SendPix" component={SendPix} options={{ cardStyleInterpolator: forFade }} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}


const forFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});