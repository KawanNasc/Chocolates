import React from "react";
import { SafeAreaView, Image, Text } from "react-native";
import { getEstilosGerais } from '../componentes/EstilosGerais';

const AoLeite = () => {

    const estilos = getEstilosGerais();
    
    return (

        <SafeAreaView style={ estilos.body }>
            
            <Image source={ require('../assets/imgs/aoleite.png')} style={ estilos.img } />
            <Text style={ estilos.descricao }> Ppreparação que leva massa de cacau em proporções menores à 50% da composição, manteiga, leite (em pó || natural) e açúcar. Garante a esse tipo de chocolate coloração marrom mais clara, textura cremosa e sabor mais adocicado, que agrada boa parte dos paladares. </Text>

        </SafeAreaView>

    );

}

export default AoLeite;