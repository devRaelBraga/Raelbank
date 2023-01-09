import { View, Text, StyleSheet, Linking, Image, TouchableOpacity, Button } from "react-native";
import Header from "../../Components/header";
import PixButton from "../../Components/pixbutton";


const backgroundColor = '#fff';

export default function RequestCard({navigation}){


    return(
        <>
            <View style={styles.container}>
                <Header navigation={navigation} destino={'Home'} texto={'Solicitar Cartão'}></Header>
                <View style={styles.view}>
                    <Button title="oi"></Button>
                </View>

            </View>
        </>
    );
}


const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor: 'red',
            flexDirection: 'column'
        },
        view:{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center'
        }
    }
)