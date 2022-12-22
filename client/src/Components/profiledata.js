import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function ProfileData({navigation, route, label, value, changeable}){
    if(changeable == 'true'){
        return(
            <View style={styles.view1}>
                <Text style={{fontSize: 19}}>{label}</Text>
                <View style={{textAlignVertical: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <Text style={{fontSize: 15}}>{value}
                    </Text>
                    <TouchableOpacity>
                        <Ionicons name="chevron-forward-outline" size={25} style={{marginLeft:2}}></Ionicons>
                    </TouchableOpacity>
    
                </View>
            </View>
        )
    }

    return(
        <View style={styles.view1}>
            <Text style={{fontSize: 19}}>{label}</Text>
            <View style={{textAlignVertical: 'center', alignItems: 'center', flexDirection: 'row', marginRight: 8}}>
                <Text style={{fontSize: 15}}>{value}
                </Text>
            </View>
        </View>
    )

}



const styles = StyleSheet.create({
    view1:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#f0f0f5',
        padding: 2,
        paddingTop: 20,
        paddingLeft: 10,
        paddingBottom: 20,
        borderTopWidth: 2,
        borderTopColor: '#e6e6e6'
    },
})