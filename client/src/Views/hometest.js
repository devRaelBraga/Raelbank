import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Transaction from "../Components/transaction";
import Ionicons from 'react-native-vector-icons/Ionicons';




const backgroundColor = '#fff';
const mainColor = '#242424';


export default function HomeTest({navigation}){
    const name = 'Hisrael';
    const saldo = 'R$ 283,99';
    
    //<Image source={require('../../assets/logo.png')} style={{width: 80, height: 80, marginBottom: 30}}></Image>
    //<Text style={{color: 'white', fontSize: 30, marginLeft: 35}}>Saldo: R$ 283,99</Text>
    return(
    <View style={styles.container}>
        <View style={styles.view1}>

            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 0}}>
                <Image source={require('../../assets/logo.png')} style={{width: 70, height: 70, marginLeft: 30, marginRight: 30}}></Image>
            <View style={{alignItems: 'flex-start'}}>
                <Text style={{color: 'white', fontSize: 30, marginLeft: 0}}>Olá, {name}</Text>
                <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>{saldo}</Text>
            </View>
            </View>

            <View style={styles.view11}>
                <Image source={require('../../assets/pix.png')} style={{width: 40, height: 40, marginBottom: 0, paddingLeft: 5}}></Image>
                <Ionicons name={'barcode-outline'} size={40} color={'#fff'}/>
                <Ionicons name={'card-outline'} size={40} color={'#fff'}/>
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
        flex: 0.35,
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