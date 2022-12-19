import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
const backgroundColor = '#fff';
const mainColor = '#242424';


export default function Profile({navigation}){
    const name = 'Hisrael';
    const saldo = 283.99
    const conta = '212.838.9093.394-2'


    return(
        <View style={styles.container}>


            <View style={styles.view2}>


                <View style={{width: '100%', alignItems: 'center', paddingTop: 80}}>
                    <Image source={require('../../assets/me.jpeg')} style={styles.img}></Image>
                    <Text>Conta: {conta}</Text>
                    <Text>Agência: 001</Text>
                    <Text>RaelBank</Text>
                </View>


                <View style={{marginLeft:0, marginTop: 50, alignItems: 'center'}}>
                    <Text style={{color: 'black', fontSize: 25}}>Hisrael da Silva Braga</Text>
                    <Text style={{color: 'black', fontSize: 20}}>hisraelc@gmail.com</Text>
                    <Text style={{color: 'black', fontSize: 20}}>19 anos</Text>
                    <Text style={{color: 'black', fontSize: 20}}>Membro desde 12/12/2022</Text>
                <TouchableOpacity>
                    <Text style={{color: 'gray', fontSize: 20}}>Redefinir senha</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} activeOpacity={1} underlayColor="#707CEA">
                    <Text style={{color: 'red', fontSize: 20}}>Logout</Text>
                </TouchableOpacity>
                </View>
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
        paddingTop: 70,
        flex: 1.8,
        backgroundColor: mainColor,
        color: 'white',
        flexDirection: 'column',
        height: '33%',
        width: '100%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      },
      view11:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'space-around'
      },
    view2: {
        paddingTop: 20,
        flex: 9,
        backgroundColor: backgroundColor,
        color: 'white',
        flexDirection: 'column',
        height: '33%',
        width: '100%',
      },
    view3: {
        flex: 0.9,
      },
    Hisrael: {
      color: '#fff',
      fontSize: 50,
      marginBottom: 20
    },
    img: {
        width:150,
        height: 150, 
        marginBottom: 5,
        borderRadius: 10000000, 
        borderColor: 'gray', 
        borderWidth: 2}
})