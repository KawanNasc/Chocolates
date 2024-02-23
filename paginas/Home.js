import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getEstilosGerais } from '../componentes/EstilosGerais';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {

    const navigation = useNavigation();
    const estilos = getEstilosGerais(); 

    if (!estilos.body) { return null;  }

    return (
        <ScrollView>
            <SafeAreaView style={estilos.body}>
                <TouchableOpacity onPress={ () => navigation.navigate('AoLeite', require('../assets/imgs/aoleite.png')) }>
                    <Text style={ estilos.titulo }> Ao Leite </Text>
                    <Image source={ require('../assets/imgs/aoleite.png') } style={ estilos.img } />
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('Amargo', require('../assets/imgs/amargo.png')) }>
                    <Text style={ estilos.titulo }> Amargo </Text>
                    <Image source={ require('../assets/imgs/amargo.png') } style={ estilos.img } />
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('DeSoja', require('../assets/imgs/desoja.png')) }>
                    <Text style={ estilos.titulo }> De Soja </Text>
                    <Image source={ require('../assets/imgs/desoja.png') } style={ estilos.img } />
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    );
}

export default Home;
