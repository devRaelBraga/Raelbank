import { View, Text, StyleSheet, TextInput, TouchableHighlight, Image, TouchableOpacity } from "react-native";



export default function Home({navigation}){
    const name = 'Hisrael';
    const saldo = 283.99
    
    //<Image source={require('../../assets/logo.png')} style={{width: 80, height: 80, marginBottom: 30}}></Image>
    //<Text style={{color: 'white', fontSize: 30, marginLeft: 35}}>Saldo: R$ 283,99</Text>
    return(
    <View style={styles.container}>
        <View style={styles.view1}>

            <View style={{flex:1, flexDirection: 'row', alignItems: 'baseline', marginBottom: 10}}>
                <Image source={require('../../assets/logo.png')} style={{width: 70, height: 70, marginLeft: 30}}></Image>
                <Text style={{color: 'white', fontSize: 30, marginLeft: 10}}>Olá, {name}</Text>
            </View>

            <View style={styles.view11}>
                <Image source={require('../../assets/pix.png')} style={{width: 50, height: 50, marginBottom: 30}}></Image>
                <Image source={require('../../assets/barcode.png')} style={{width: 70, height: 30, marginBottom: 30}}></Image>
                <Image source={require('../../assets/cartao.png')} style={{width: 70, height: 50, marginBottom: 30}}></Image>
            </View>

        </View>



        <View style={styles.view2}>
            <Text style={{color: 'black', fontSize: 30, marginLeft: 10}}>Saldo: R$ {saldo}</Text>
        </View>




        <View style={styles.view3}>


            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} activeOpacity={1} underlayColor="#707CEA">
                <Image source={require('../../assets/coins.png')} style={{width: 40, height: 40, marginBottom: 30}}></Image>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('Perfil')} activeOpacity={1} underlayColor="#707CEA">
                <Image source={require('../../assets/user.png')} style={{width: 40, height: 40, marginBottom: 30}}></Image>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../../assets/config.jpg')} style={{width: 40, height: 40, marginBottom: 30}}></Image>
            </TouchableOpacity>

        </View>
        
    </View>
);}




const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    view1: {
        paddingTop: 70,
        flex: 2,
        backgroundColor: '#202FB3',
        color: 'white',
        flexDirection: 'column',
        height: '33%',
        width: '100%',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
      },
      view11:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'space-around'
      },
    view2: {
        paddingLeft: 10,
        paddingTop: 20,
        flex: 5,
        backgroundColor: '#fff',
        color: 'white',
        flexDirection: 'row',
        height: '33%',
        width: '100%',
      },
    view3: {
        paddingLeft: 10,
        paddingTop: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 0.7,
        backgroundColor: '#202FB3',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '33%',
        width: '100%',
      },
    Hisrael: {
      color: '#000',
      fontSize: 50,
      marginBottom: 20
    },
})