import { View, Text, StyleSheet, Linking, Image } from "react-native";



const version = 'v0.0.1';
const backgroundColor = '#fff';

export default function PixMenu({navigation}){


    return(
        <View style={styles.container}>
            <View style={styles.view1}>
                <View style={styles.view11}>
                        <View style={{width:'100%', flexDirection: 'row', alignItems: 'baseline'}}>
                            <Text style={{color: '#242424', fontSize: 30, marginLeft:30}}>Raelbank</Text>
                        </View>
                    </View>
                
                <View style={{backgroundColor: '#242424', width: '90%', height:5, marginLeft: 20, borderRadius: 50}}></View>
            
            
                <View style={styles.view2}>
                    <Text onPress={ ()=>{ Linking.openURL('https://github.com/devRaelBraga')}} style={{color: 'blue'}} >Github Project</Text>
                    <Text>Desenvolvido por devRaelBraga</Text>
                    <Text>{version}</Text>

                </View>
            </View>
        </View>
    );
}
