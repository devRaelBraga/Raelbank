import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import Navbar from "../Components/navbar";



const version = 'v0.0.1';
const backgroundColor = '#fff';

export default function Config({navigation}){


    return(
        <View style={styles.container}>
            <View style={styles.view1}>
                <View style={styles.view11}>
                        <View style={{width:'100%', flexDirection: 'row', alignItems: 'baseline'}}>
                            <Image source={require('../../assets/logodark.png')} style={{width: 90, height: 90, marginLeft: 30}}></Image>
                            <Text style={{color: '#242424', fontSize: 30, marginLeft:30}}>Raelbank</Text>
                        </View>
                    </View>
                
                <View style={{backgroundColor: '#242424', width: '90%', height:5, marginLeft: 20, borderRadius: 50}}></View>
            
            
            <View style={styles.view2}>
                <Text>Desenvolvido por devRaelBraga</Text>
                <Text>{version}</Text>

            </View>
            </View>

            <View style={styles.navbar}>
                <Navbar navigation={navigation}></Navbar>
            </View>
        </View>
    );
}









const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: {backgroundColor},
        flexDirection: 'column',
    },
    view1: {
        flex: 1,
    },
    view11: {
        flex:1, 
        flexDirection: 'row', 
        alignItems: 'baseline', 
        marginBottom: 20,
        paddingTop: 40,
    },
    view2:{
        paddingTop: 10,
        flex: 6,
        alignItems: 'center'
    },
    navbar: {
        flex: 0.1,
        backgroundColor: '#fff'
    }
});