import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Navbar from "../Components/navbar";
import Transaction from "../Components/transaction";
const backgroundColor = '#fff';
const mainColor = '#242424';


export default function Home({navigation}){
    const name = 'Hisrael';
    const saldo = 'R$ 283,99';
    
    //<Image source={require('../../assets/logo.png')} style={{width: 80, height: 80, marginBottom: 30}}></Image>
    //<Text style={{color: 'white', fontSize: 30, marginLeft: 35}}>Saldo: R$ 283,99</Text>
    return(
    <View style={styles.container}>
        <View style={styles.view1}>

            <View style={{flex:1, flexDirection: 'row', alignItems: 'baseline', marginBottom: 20}}>
                <Image source={require('../../assets/logo.png')} style={{width: 70, height: 70, marginLeft: 30}}></Image>
                <Text style={{color: 'white', fontSize: 30, marginLeft: 10}}>Olá, {name}</Text>
            </View>
            <View style={{alignItems: 'center', width:'100%'}}>
                <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>{saldo}</Text>

            </View>

            <View style={styles.view11}>
                <Image source={require('../../assets/pix.png')} style={{width: 40, height: 40, marginBottom: 30, paddingLeft: 5}}></Image>
                <Image source={require('../../assets/barcode.png')} style={{width: 40, height: 30, marginBottom: 30}}></Image>
                <Image source={require('../../assets/cartao.png')} style={{width: 45, height: 30, marginBottom: 30}}></Image>
            </View>

        </View>



        <ScrollView style={styles.view2}>
            <Transaction destino={'Hisrael da Silva Braga'} quantia={'283,99'} tipo={'enviada'}></Transaction>
            <Transaction destino={'Hisrael'} quantia={'3,99'} tipo={'recebida'}></Transaction>
            <Transaction destino={'Hisrael da Silva Braga'} quantia={'283,99'} tipo={'enviada'}></Transaction>
            <Transaction destino={'Hisrael da Silva Braga'} quantia={'283,99'} tipo={'enviada'}></Transaction>
            <Transaction destino={'Hisrael da Silva Braga'} quantia={'283,99'} tipo={'enviada'}></Transaction>
            <Transaction destino={'Hisrael'} quantia={'3,99'} tipo={'recebida'}></Transaction>
            <Transaction destino={'Hisrael'} quantia={'3,99'} tipo={'recebida'}></Transaction>
            <Transaction destino={'Hisrael'} quantia={'3,99'} tipo={'recebida'}></Transaction>
        </ScrollView>




        <View style={styles.view3}>
            <Navbar navigation={navigation}></Navbar>

        </View>
        
    </View>
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