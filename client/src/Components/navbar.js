import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

export default function Navbar({navigation}){
    return(
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around', backgroundColor: '#242424', borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={1} underlayColor="#707CEA">
                <Image source={require('../../assets/coins.png')} style={{width: 40, height: 40, marginBottom: 30, marginTop:20}}></Image>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Perfil')} activeOpacity={1} underlayColor="#707CEA">
                <Image source={require('../../assets/user.png')} style={{width: 40, height: 40, marginBottom: 30, marginTop:20}}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Config')} activeOpacity={1} underlayColor="#707CEA">
                <Image source={require('../../assets/config.jpg')} style={{width: 40, height: 40, marginBottom: 30, marginTop:20}}></Image>
            </TouchableOpacity>
        </View>
    )

}

