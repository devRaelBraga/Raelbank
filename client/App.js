import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Views/login';
import Cadastro from './src/Views/cadastro';
import Home from './src/Views/home';
import Perfil from './src/Views/perfil';
import Config from './src/Views/config';
import Menu from './src/Views/menu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#242424' }}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ cardStyleInterpolator: forFade }} />
          <Stack.Screen name="Menu" component={Menu} options={{ cardStyleInterpolator: forFade }} />
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