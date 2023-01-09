import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function Header({texto, destino, navigation}){
    return(
        <View style={styles.view1}>
            <View style={styles.seta}>
                <TouchableOpacity onPress={() => navigation.navigate(destino)} activeOpacity={1}>
                    <Ionicons name={'arrow-back-outline'} size={40} color={'white'}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>{texto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view1:{
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 20,
        width: '100%',
        height: 80,
        backgroundColor: '#242424',
    },
    title:{
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        width: '100%'
    },
    seta:
    {
        position: 'absolute', 
        top: 20, 
        left: 20, 
        zIndex: 2
    },
})

