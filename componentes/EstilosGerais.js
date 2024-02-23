import { StyleSheet } from "react-native";
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';

export const getEstilosGerais = () => {

    let [fontsLoaded, fontError] = useFonts({ Pacifico_400Regular }) 

    if (!fontsLoaded && !fontError) { return {}; }

    return StyleSheet.create({

        body: { flex: 1, justifyContent: "center", backgroundColor: "#840000" }, 

        titulo: { fontFamily: "Pacifico_400Regular", color: "#840000", backgroundColor: "#e6e600", borderRadius: 20, alignSelf: "center", margin: 10, padding: 5, marginTop: 25 },

        img: { width: 290, borderRadius: 10, height: 190, alignSelf: "center" }

    });

}