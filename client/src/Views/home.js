import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, StatusBar } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Transaction from "../Components/transaction";

const data = [
  {
  destino: 'Hisrael',
  quantia: '15,13',
  tipo: 'recebida',
  id: 'asdasd3213213as'
},
  {
  destino: 'Hisrael',
  quantia: '15,13',
  tipo: 'enviada',
  id: 'asdaas13as'
},
  {
  destino: 'Hisrael',
  quantia: '15,13',
  tipo: 'recebida',
  id: 'asdasd3d213as'
},
  {
  destino: 'Hisrael',
  quantia: '15,13',
  tipo: 'enviada',
  id: 'aasde213as'
},
  {
  destino: 'Hisrael',
  quantia: '15,13',
  tipo: 'recebida',
  id: 'asda234d213as'
},
  {
  destino: 'Hisrael',
  quantia: '15,13',
  tipo: 'enviada',
  id: 'asdasasd13as'
},
  {
  destino: 'Hisrael',
  quantia: '15,13',
  tipo: 'recebida',
  id: 'asdasd654213as'
},
  {
  destino: 'Hisrael',
  quantia: '15,13',
  tipo: 'enviada',
  id: 'asdasd98763as'
},
]

const backgroundColor = '#fff';
const mainColor = '#242424';


export default function Home({navigation}){
    const name = 'Marcelly';
    const saldo = 'R$ 283,99';
    
    return(
      <>
        <View style={styles.container}>
            <View style={styles.view1}>

                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 0}}>
                  <Image source={require('../../assets/logo.png')} style={{width: 70, height: 70, marginLeft: 30, marginRight: 30}}></Image>
                  <View style={{alignItems: 'flex-start'}}>
                      <Text style={{color: 'white', fontSize: 30, marginLeft: 0, fontWeight: "200"}}>Olá, {name}</Text>
                      <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>{saldo}</Text>
                  </View>
                </View>

                <View style={styles.view11}>
                  <TouchableOpacity onPress={() => navigation.navigate('PixMenu')} activeOpacity={1} underlayColor="#707CEA">
                    <Image source={require('../../assets/pix.png')} style={{width: 40, height: 40, marginBottom: 0, paddingLeft: 5}}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => alert('Ainda não implementado!')}>
                    <Ionicons name={'barcode-outline'} size={40} color={'#fff'}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('CardMenu')}>
                    <Ionicons name={'card-outline'} size={40} color={'#fff'}/>
                  </TouchableOpacity>
                </View>



            </View>
          <ScrollView style={styles.view2}>
            <Text style={{fontSize: 20, padding: 15}}>Histórico de transações</Text>
            {
              data.map(item => (
                <Transaction destino={item.destino} quantia={item.quantia} tipo={item.tipo} key={item.id}/>
              ))
            }

            {/* <Transaction destino={'Hisrael da Silva Braga'} quantia={'283,99'} tipo={'enviada'}></Transaction>
            <Transaction destino={'Hisrael'} quantia={'3,99'} tipo={'recebida'}></Transaction>
            <Transaction destino={'Hisrael da Silva Braga'} quantia={'283,99'} tipo={'enviada'}></Transaction>
            <Transaction destino={'Hisrael da Silva Braga'} quantia={'283,99'} tipo={'enviada'}></Transaction>
            <Transaction destino={'Hisrael da Silva Braga'} quantia={'283,99'} tipo={'enviada'}></Transaction>
            <Transaction destino={'Hisrael'} quantia={'3,99'} tipo={'recebida'}></Transaction>
            <Transaction destino={'Hisrael'} quantia={'3,99'} tipo={'recebida'}></Transaction>
            <Transaction destino={'Hisrael'} quantia={'3,99'} tipo={'recebida'}></Transaction> */}
        </ScrollView>
            
        </View>
      </>
);}




const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
    },
    view1: {
        paddingTop: 20,
        flex: 0.35,
        backgroundColor: mainColor,
        color: 'white',
        flexDirection: 'column',
        width: '100%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        elevation: 10
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