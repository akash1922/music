import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign} from "@expo/vector-icons";

const styles = StyleSheet.create({
    container:{
     position: 'absolute',
     bottom: 79,
     backgroundColor: '#131313',   
     flexDirection:'row',
     
     width: '100%',
     borderWidth: 2,
     borderColor: 'black',
     alignItems: 'center'

    },
    image:{
        width:  75,
        height: 75,
        marginRight: 10,
        },
    rightContainer: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between',

    },
    nameContainer:{

    },
    iconsContainer:{

    },
title: {
    color: 'white',
    fontSize: 18,
    fontWeight:'bold',
    margin: 10, 
     
},
 artist:{
     color: 'lightgray',
     fontSize: 18,
     
 }
})

export  default  styles;
