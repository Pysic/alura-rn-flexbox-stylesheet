import { Text, View } from "react-native";

export default function Footer() {
    return (
        <View style={{backgroundColor: '#22D4FD', padding: 16, alignItems: 'center'}}>
            <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 13, color: '#000D1F' }}>Desenvolvido por Alura.</Text>
            <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 13, color: '#000D1F' }}>Projeto fictício sem  fins comerciais.</Text>
        </View>
    )
}