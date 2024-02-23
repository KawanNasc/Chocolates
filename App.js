import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, PTSerif_700Bold_Italic } from '@expo-google-fonts/pt-serif';

import Home from './paginas/Home'; import AoLeite from './paginas/AoLeite'; import Amargo from './paginas/Amargo'; import DeSoja from './paginas/DeSoja';

const Stack = createStackNavigator();

const Navegacao = () => {

  let [fontsLoaded, fontError] = useFonts({ PTSerif_700Bold_Italic }) 

  if (!fontsLoaded && !fontError) { return null; }

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerMode: "float", headerTintColor: "#D80000", headerStyle: { backgroundColor: "#840000", borderWidth: 10, borderColor: "#4d0000"},  headerTitleAlign: "center", headerTitleStyle: { fontFamily: "PTSerif_700Bold_Italic" } }}>
    
        <Stack.Screen name="Tipos de Chocolates" component={Home}></Stack.Screen>      
        <Stack.Screen name="AoLeite" component={AoLeite}></Stack.Screen>
        <Stack.Screen name="Amargo" component={Amargo}></Stack.Screen>
        <Stack.Screen name="DeSoja" component={DeSoja}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>

  );

}

export default Navegacao;