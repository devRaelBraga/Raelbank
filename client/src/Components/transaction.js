import { View, Text, StyleSheet, Image  } from "react-native";

export default function Transaction({quantia, destino, tipo}){
    var src = require('../../assets/moneysent.png');
    if(tipo == 'recebida'){
        src = require('../../assets/moneyreceived.png');
    }

    return(
        <View style={styles.container}>
            
            <View style={{width: '100%', alignItems: 'center'}}>
                <View style={{backgroundColor: '#e3e3e3', width: '95%', height:2, marginBottom: 0, borderRadius: 50}}></View>
            </View>


            <View style={{flexDirection: 'row', maarginLeft: '2.5%', width: "95%", alignItems: 'center', height: '100%'}}>
                <View style={{backgroundColor: '#dedede', padding: 15, borderRadius: 50, marginLeft: 15, marginTop: 0}}>
                    <Image source={src} style={styles.img}></Image>
                </View>
                <View>
                    <Text style={styles.titulo}>Transferência {tipo}</Text>  
                    <Text style={styles.text}>{destino}</Text>  
                    <Text style={styles.text}>R$ {quantia}</Text>  
                </View>
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        height: 130,
        marginTop: 0,
        flexDirection: 'column'
    },
    titulo: {
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 2,
        color: '#404040',
        fontSize: 20,
    },
    text: {
        marginLeft: 20,
        color: '#454545',
        fontSize: 15,
    },
    img: {
        width: 40,
        height: 40,
    }
})