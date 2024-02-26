import React from "react";
import { SafeAreaView, Image, Text } from "react-native";
import { getEstilosGerais } from '../componentes/EstilosGerais';

const DeSoja = () => {

    const estilos = getEstilosGerais();
    
    return (

        <SafeAreaView style={ estilos.body }>
            
            <Image source={ require('../assets/imgs/desoja.png')} style={ estilos.img } />
            <Text style={ estilos.descricao }> Sim, existe chocolate de soja. Não é novidade que esse grão é substituto para alguns de origem animal como o leite e carne. O leite de vaca é substituído pelo de soja e açúcar refinado dá lugar a sucralose (Adoçante químico). Por isso, o chocolate de soja é ideal para quem tem alergia ao leite, intolerância à lactose ou segue uma dieta vegana. </Text>

        </SafeAreaView>

    );

}

export default DeSoja;