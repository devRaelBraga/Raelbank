import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Navbar({navigation, route}){
    return(
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around', backgroundColor: '#242424', borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={1} underlayColor="#707CEA">
                <Image source={require('../../assets/coins.png')} style={{width: 40, height: 40, marginBottom: 30, marginTop:20}}></Image>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Profile')} activeOpacity={1} underlayColor="#707CEA">
                <Ionicons name="person" size={40} style={{marginBottom: 0, marginTop:20}}></Ionicons>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Settings')} activeOpacity={1} underlayColor="#707CEA">
                <Image source={require('../../assets/config.jpg')} style={{width: 40, height: 40, marginBottom: 30, marginTop:20}}></Image>
            </TouchableOpacity>
        </View>
    )

}

