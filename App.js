import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
export default function App() {
  
  return (

    <ScrollView>

      <SafeAreaView style={estilos.tela}>
        <Text style={{fontSize: 30, color: "#D80000", margin: 15}}> Tipos de chocolate </Text>
        
        <Text style={estilos.chocolates}> Ao leite </Text>
        <Image style={estilos.img} source={require("./assets/chocolates/aoleite.png")}></Image>

        <Text style={estilos.chocolates}>Amargo</Text>
        <Image style={estilos.img} source={require("./assets/chocolates/amargo.png")}></Image>

        <Text style={estilos.chocolates}>De Soja</Text>
        <Image style={estilos.img} source={require("./assets/chocolates/desoja.png")}></Image>

        <StatusBar style="auto" />
      </SafeAreaView>

    </ScrollView>

  );

}

const estilos = StyleSheet.create({

  tela: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000' },

  chocolates: { fontFamily: 'Raleway_200ExtraLight', fontSize: 20, color: "#840000", margin: 10 },

  img: { width: 290, borderRadius: 10, height: 190 }

});
