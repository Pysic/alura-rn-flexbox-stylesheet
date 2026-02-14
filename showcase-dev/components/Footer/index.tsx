import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Footer() {
    return (
        <View style={ styles.shape }>
            <Text style={ styles.text }>Desenvolvido por Alura.</Text>
            <Text style={ styles.text }>Projeto fictício sem  fins comerciais.</Text>
        </View>
    )
}