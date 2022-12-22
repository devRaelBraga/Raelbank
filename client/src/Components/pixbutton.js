import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function PixButton({texto, icon, color, onpress, navigation}){
    return(
        <View style={styles.view1}>
            <TouchableHighlight underlayColor="#fff" onPress={() => navigation.navigate(onpress)}>
                <View style={styles.view11}>
                    <Ionicons name={icon} size={50} color={color} style={{ width: '30%'}}/>
                    <Text style={styles.text} >{texto}</Text>
                </View>
            </TouchableHighlight>
        </View>   
    )
}

const styles = StyleSheet.create({
    view1:{
        alignItems: 'center'
    },
    view11:{
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#dedede',
        height: 100,
        width: 300,
        alignItems: 'center',
        padding: 20,
        elevation: 5
    },
    text:{
        fontSize: 20,
        marginLeft: 15, 
        width: '67%'
    }
})

