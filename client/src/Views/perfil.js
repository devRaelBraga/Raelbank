import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import ProfileData from "../Components/profiledata";
const backgroundColor = '#fff';
const mainColor = '#242424';


export default function Profile({navigation}){
    const name = 'Hisrael';
    const saldo = 283.99
    const conta = '212.838.9093.394-2'


    return(
        <View style={styles.container}>


            <View style={styles.view1}>
                <View style={{width: '100%', alignItems: 'center', paddingTop: 25}}>
                    <Image source={require('../../assets/me.jpeg')} style={styles.img}></Image>
                    <Text style={{color: 'white'}}>Conta: {conta}</Text>
                    <Text style={{color: 'white'}}>Agência: 001</Text>
                    <Text style={{color: 'white'}}>RaelBank</Text>
                </View>
            </View>


            <View style={styles.view2}>

                <View style={{width: '100%', backgroundColor: '#f0f0f5'}}>
                    <ProfileData label={'Nome'} value={'Hisrael da Silva Braga'}></ProfileData>
                    <ProfileData label={'Email'} value={'hisraelc@gmail.com'}></ProfileData>
                    <ProfileData label={'Data de Nascimento'} value={'23/02/2003'}></ProfileData>
                    <ProfileData label={'Membro desde'} value={'12/12/2022'}></ProfileData>
                </View>
            </View>


            <View style={styles.view3}>
                <TouchableOpacity>
                    <Text style={{color: 'gray', fontSize: 20}}>Redefinir senha</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} activeOpacity={1} underlayColor="#707CEA">
                    <Text style={{color: 'red', fontSize: 20}}>Logout</Text>
                </TouchableOpacity>
            </View>


    </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f0f0f5',
        flexDirection: 'column',
    },
    view1: {
        paddingTop: 20,
        flex: 5,
        backgroundColor: '#242424',
        color: 'white',
        flexDirection: 'column',
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    view2: {
        flexDirection: 'row',
        flex:5
    },
    view3: {
        flex:1.5,
        paddingTop: 30,
        paddingBottom: 50,
        alignItems: 'center',
        backgroundColor: '#f0f0f5',
        borderTopWidth: 2,
        borderTopColor: '#e6e6e6',
    },
    img: {
        width:150,
        height: 150, 
        marginBottom: 5,
        borderRadius: 10000000, 
        borderColor: 'gray', 
        borderWidth: 2
    },
})