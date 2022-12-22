import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Config from "./config";
import Profile from "./perfil";
import Home from "./home";

const backgroundColor = '#fff';
const mainColor = '#242424';
const Tab = createBottomTabNavigator();

export default function Menu({navigation}){
    return(
        <Tab.Navigator
          screenOptions={
            ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let barcolor;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'wallet-outline'
                  : 'wallet-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-outline' : 'ios-list-outline';
              } else{
                iconName = focused ? 'person-outline' : 'person-outline';
              }

              barcolor = focused ? 'white' : '#242424';
  
              // You can return any component that you like here!
              return (
                <View style={{borderBottomWidth: 5, borderColor: barcolor, height: '90%', paddingLeft: 30, paddingRight: 30}}>
                  <Ionicons name={iconName} size={32} color={color} style={{ marginTop: '25%'}}/>
                </View>
              );
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
            tabBarStyle:{height: 80, backgroundColor: '#242424', borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 0, alignItems: 'baseline'},
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={Home} />
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