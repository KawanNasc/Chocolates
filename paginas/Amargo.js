import React from "react";
import { SafeAreaView, Image, StyleSheet } from "react-native";

const EstilosGerais = require('../componentes/EstilosGerais');

const Amargo = () => {
    
    return (

        <SafeAreaView>
            
            <Image source={ require('../assets/imgs/amargo.png')} style={ estilos.img } />

        </SafeAreaView>

    );

}

const estilos = StyleSheet.create({

    img: { width: 200, height: 200 }
    
})

export default Amargo;