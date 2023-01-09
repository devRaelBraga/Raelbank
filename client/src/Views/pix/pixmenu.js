import { View, Text, StyleSheet, Linking, Image, TouchableOpacity } from "react-native";
import Header from "../../Components/header";
import PixButton from "../../Components/pixbutton";


const backgroundColor = '#fff';

export default function PixMenu({navigation}){


    return(
        <View style={styles.container}>

            <Header texto={'Menu Pix'} destino={'Home'} navigation={navigation}></Header>

            {/* BOTOES DA TELA DO PIX */}
            <View style={styles.view2}>  
                <View style={styles.view21}>
                    <PixButton texto={'Enviar Pix'} color={'black'} icon={'paper-plane-outline'} navigation={navigation} onpress={'SendPix'}></PixButton>
                    <View style={{marginTop: 50, marginBottom: 50}}>
                        <PixButton texto={'Chaves Pix'} color={'black'} icon={'key-outline'} navigation={navigation} onpress={'KeysMenu'}></PixButton>
                    </View>
                    <PixButton texto={'QR Code'} color={'black'} icon={'qr-code-outline'} navigation={navigation} onpress={'QRCode'}></PixButton>

                </View>
            </View>

        </View>
    );
}









const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: backgroundColor,
        flexDirection: 'column',
    },
    title:{
        color: 'white',
        fontSize: 25
    },
    view1: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        elevation: 20,
        width: '100%',
        height: 80,
        backgroundColor: '#242424',
    },
    view11: {
        flex:1, 
        flexDirection: 'row', 
        alignItems: 'baseline', 
        marginBottom: 20,
        paddingTop: 40,
    },
    view2:{
        flex: 7.5,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    view21:{
        flexDirection: 'column',
        marginTop: 0,
        justifyContent: 'center',
        width: '100%'
    },
});