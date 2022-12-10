import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";



export default function Perfil({navigation}){
    const name = 'Manoel';
    const saldo = 283.99
            //<View style={styles.view11}>
              //  <Image source={require('../../assets/pix.png')} style={{width: 50, height: 50, marginBottom: 30}}></Image>
                //<Image source={require('../../assets/barcode.png')} style={{width: 70, height: 30, marginBottom: 30}}></Image>
          //      <Image source={require('../../assets/cartao.png')} style={{width: 70, height: 50, marginBottom: 30}}></Image>
            //</View>


    return(
        <View style={styles.container}>
        <View style={styles.view1}>

            <View style={{flex:1, flexDirection: 'row', alignItems: 'center', marginBottom: 40}}>
                <Image source={require('../../assets/user.png')} style={{width: 70, height: 70, marginLeft: 30}}></Image>
                <Text style={{color: 'white', fontSize: 30, marginLeft: 10}}>{name}</Text>
            </View>


        </View>



        <View style={styles.view2}>
            <Text style={{color: 'black', fontSize: 25, marginLeft: 10}}>Nome completo:</Text>
            <Text style={{color: 'black', fontSize: 25, marginLeft: 10}}>Idade:</Text>
            <Text style={{color: 'black', fontSize: 25, marginLeft: 10}}>Email:</Text>
            <Text style={{color: 'black', fontSize: 25, marginLeft: 10}}>Saldo:</Text>
            <Text style={{color: 'black', fontSize: 25, marginLeft: 10}}>Saldo:</Text>
            <Text style={{color: 'black', fontSize: 25, marginLeft: 10}}>Membro desde:</Text>
            <TouchableOpacity>
              <Text style={{color: 'gray', fontSize: 20, marginLeft: 10}}>Redefinir senha</Text>
            </TouchableOpacity>
        </View>




        <View style={styles.view3}>


            <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={1} underlayColor="#707CEA">
                <Image source={require('../../assets/coins.png')} style={{width: 40, height: 40, marginBottom: 30}}></Image>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../../assets/user.png')} style={{width: 40, height: 40, marginBottom: 30}}></Image>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../../assets/config.jpg')} style={{width: 40, height: 40, marginBottom: 30}}></Image>
            </TouchableOpacity>

        </View>
        
    </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    view1: {
        paddingTop: 70,
        flex: 1.8,
        backgroundColor: '#202FB3',
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
        paddingLeft: 10,
        paddingTop: 20,
        flex: 9,
        backgroundColor: '#fff',
        color: 'white',
        flexDirection: 'column',
        height: '33%',
        width: '100%',
      },
    view3: {
        paddingLeft: 10,
        paddingTop: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 0.9,
        backgroundColor: '#202FB3',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '33%',
        width: '100%',
      },
    Hisrael: {
      color: '#fff',
      fontSize: 50,
      marginBottom: 20
    },
})