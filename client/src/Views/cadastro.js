import { View, Text, StyleSheet, TextInput, TouchableHighlight, Image } from "react-native";

export default function Cadastro({navigation}){
    return(
    <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={{width: 100, height: 100, marginBottom: 30}}></Image>

        <TextInput style={styles.input} placeholder='nome'  placeholderTextColor='#5b5b5b'></TextInput>

        <TextInput style={styles.input} placeholder='email'   placeholderTextColor='#5b5b5b'></TextInput>
        
        <TextInput style={styles.input} placeholder='digite sua senha...'   placeholderTextColor='#5b5b5b'></TextInput>
        
        <TextInput style={styles.input} placeholder='digite sua senha novamente...'   placeholderTextColor='#5b5b5b'></TextInput>



        <TouchableHighlight style={styles.botao} onPress={() => navigation.navigate('Login')} activeOpacity={1} underlayColor="#707CEA">
            <Text style={styles.text}>Voltar</Text>
        </TouchableHighlight>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242424',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        tintColor: 'white',
      },
    Hisrael: {
      color: '#fff',
      fontSize: 50,
      marginBottom: 20
    },
    input: {
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#191919',
        width: '70%',
        marginBottom: 5,
        borderRadius: 10,
    },
    botao:{
        width: '70%',
        marginTop: 5,
        backgroundColor: '#202FB3',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
    },
    text:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
    }
});