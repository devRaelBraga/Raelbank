import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from "../../Components/header";



export default function SendPix({navigation}){
    return(
        <View style={styles.container}>

            <Header texto={'Enviar Pix'} destino={'PixMenu'} navigation={navigation}></Header>

            <View style={styles.view2}>
                <View style={{width:350}}>
                    <Text style={styles.text}>Chave Pix do destinatário</Text>
                </View>
                <TextInput style={styles.input} keyboardType='numeric' maxLength={12}/>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home') }>
                <Text style={{color:'white', alignSelf: 'center', fontSize: 20}}>Enviar</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    view1:{
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        elevation: 20,
        width: '100%',
        height: 80,
        backgroundColor: '#242424',
    },
    view2:{
        marginTop: -100,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        width: 350,
        height: 60,
        backgroundColor: '#e6e6e6',
        borderRadius: 10,
        color: 'black',
        fontSize: 30,
        textAlign:'center'
    },
    text:{
        fontSize:20,
    },
    button:{
        position: 'absolute',
        width: 150,
        height: 80,
        backgroundColor: '#242424',
        bottom: 30,
        right: 30,
        borderRadius: 20,
        justifyContent: 'center'
    }
})

