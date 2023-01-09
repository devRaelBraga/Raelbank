import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from "../../Components/header";


export default function KeysMenu({navigation}){
    const pixKey = '1234-5678-9101'
    return(
        <View style={styles.container}>

            <Header texto={'Chaves Pix'} destino={'PixMenu'} navigation={navigation}></Header>

            <View style={styles.view2}>
                <View style={{width:350}}>
                    <Text style={styles.text}>Sua chave pix:</Text>
                </View>
                <Text style={styles.input}>{pixKey}</Text>
            </View>

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
        textAlign:'center',
        textAlignVertical: "center"
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

