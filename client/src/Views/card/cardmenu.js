import { View, Text, StyleSheet, Linking, Image, TouchableOpacity } from "react-native";
import Header from "../../Components/header";
import PixButton from "../../Components/pixbutton";
import RequestCard from "./requestCard";
import ViewCard from "./viewCard";

const possuiCartão = false

const backgroundColor = '#fff';

export default function CardsMenu({navigation}){

    if(possuiCartão == true){
        return(
            <ViewCard navigation={navigation}></ViewCard>
        )
    }
    return(
        <RequestCard navigation={navigation}></RequestCard>
    )
}