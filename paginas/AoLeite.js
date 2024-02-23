import React from "react";
import { SafeAreaView, Image, StyleSheet } from "react-native";

const AoLeite = () => {
    
    return (

        <SafeAreaView>
            
            <Image source={ require('../assets/imgs/aoleite.png')} style={ estilos.img } />

        </SafeAreaView>

    );

}

const estilos = StyleSheet.create({

    img: { width: 200, height: 200 }
    
});

export default AoLeite;