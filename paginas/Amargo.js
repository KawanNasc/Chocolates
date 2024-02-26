import React from "react";
import { SafeAreaView, Image, Text } from "react-native";
import { getEstilosGerais } from '../componentes/EstilosGerais';

const Amargo = () => {

    const estilos = getEstilosGerais();
    
    return (

        <SafeAreaView style={ estilos.body }>
            
            <Image source={ require('../assets/imgs/amargo.png')} style={ estilos.img } />
            <Text style={ estilos.descricao }> Também chamado de chocolate negro || puro é feito com grãos de cacau torrados s/ adição de leite, e algumas versões permitem utilização como base p/ sobremesas, bolos e bolachas. Deve-se usar mínimo de 35% de cacau, segundo as normas europeias. Tem como característica possuir pouco açúcar. É rico em triptofano. </Text>

        </SafeAreaView>

    );

}

export default Amargo;