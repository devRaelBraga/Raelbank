import { View, Text, StyleSheet, TextInput, TouchableHighlight, Image } from "react-native";


export default function Login({navigation}){
    
    return(
    <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={{width: 100, height: 100, marginBottom: 30}}></Image>
        
        <TextInput style={styles.input} placeholder='email'  placeholderTextColor='#5b5b5b'></TextInput>

        <TextInput style={styles.input} placeholder='digite sua senha...'   placeholderTextColor='#5b5b5b'></TextInput>

        <TouchableHighlight style={styles.botao} onPress={() => navigation.navigate('Home')} activeOpacity={1} underlayColor="#707CEA">
            <Text style={styles.text}>Login</Text>
        </TouchableHighlight>
        <View style={styles.link}>
            <Text style={styles.linktxt}>Não possui conta?<Text style={{color: 'yellow'}} onPress={() => navigation.navigate('Cadastro')}> Cadastrar-se...</Text></Text>

        </View>
    </View>
);}

function ok(navigation){
    console.log("ok");
    navigation.navigate('Profile')
}
//fazer requisições pra API funciona 👍
async function nsei(){
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
        }
    
        let bodyContent = JSON.stringify({
        "email":  'hisraelc@gmail.com',
        "senha":  1234
        });
    
        let response = await fetch("http://34.235.153.33:3005/user/login", { 
        method: "POST",
        body: bodyContent,
        headers: headersList
        });
    
        if(response.status != (404 || 401)){ //SE O LOGIN FOR VÁLIDO
            let data = await response.text();
            data = data.substring(1, data.length - 1);
            console.log(JSON.stringify({
                "token": data
            }));
        }
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
    },
    link:{
        display: 'flex',
        justifyContent: "flex-start",
        textAlign: "left",
        width: '70%',
        marginTop: 5
    },
    linktxt: {
        color: 'white',
    }
});