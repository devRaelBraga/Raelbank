import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Navbar from "../Components/navbar";
import Transaction from "../Components/transaction";
import Home from "./home";
import Config from "./config";
import Profile from "./perfil";
import HomeTest from "./hometest";

const backgroundColor = '#fff';
const mainColor = '#242424';
const Tab = createBottomTabNavigator();

export default function Menu({navigation}){
    const name = 'Hisrsael';
    const saldo = 'R$ 283,99';
    
    //<Image source={require('../../assets/logo.png')} style={{width: 80, height: 80, marginBottom: 30}}></Image>
    //<Text style={{color: 'white', fontSize: 30, marginLeft: 35}}>Saldo: R$ 283,99</Text>
    
    return(
        <Tab.Navigator
          screenOptions={
            ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'wallet-outline'
                  : 'wallet-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-outline' : 'ios-list-outline';
              } else{
                iconName = focused ? 'person-outline' : 'person-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={32} color={color} style={{}}/>;
            },
            tabBarActiveTintColor: '#202fb3',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
            tabBarStyle:{height: 80, backgroundColor: '#242424', borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10},
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeTest} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Settings" component={Config} />
        </Tab.Navigator>
);}




const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: backgroundColor,
        flexDirection: 'column',
    },
    view1: {
        paddingTop: 50,
        flex: 0.5,
        backgroundColor: mainColor,
        color: 'white',
        flexDirection: 'column',
        width: '100%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      },
      view11:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        justifyContent: 'space-around',
        paddingLeft: 0
      },
    view2: {
        paddingTop: 0,
        flex: 1,
        backgroundColor: backgroundColor,
        color: 'white',
        flexDirection: 'column',
        width: '100%',
      },
    view3: {
        flex: 0.15,
        backgroundColor: mainColor,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
    Hisrael: {
      color: '#000',
      fontSize: 50,
      marginBottom: 20
    },
})