import { StyleSheet } from "react-native";
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { JosefinSans_600SemiBold } from '@expo-google-fonts/josefin-sans';

export const getEstilosGerais = () => {

    let [fontsLoaded, fontError] = useFonts({ Pacifico_400Regular, JosefinSans_600SemiBold }) 

    if (!fontsLoaded && !fontError) { return {}; }

    return StyleSheet.create({

        body: { flex: 1, justifyContent: "center", backgroundColor: "#840000" }, 

        titulo: { fontFamily: "Pacifico_400Regular", fontSize: 30, color: "#840000", backgroundColor: "#e6e600", borderRadius: 20, alignSelf: "center", margin: 10, padding: 5, marginTop: 25 },

        img: { width: 270, borderRadius: 20, height: 170, alignSelf: "center" },

        descricao: { fontFamily: "JosefinSans_600SemiBold", fontSize: 20, backgroundColor: "#ff9900", margin: 35, padding: 20, borderRadius: 10, color: "#ffffff" }
    });

}