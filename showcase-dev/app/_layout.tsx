import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layout() {
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('@/assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('@/assets/fonts/Montserrat-SemiBold.ttf'),
        'KronaOne-Regular': require('@/assets/fonts/KronaOne-Regular.ttf')
    });

if (!fontsLoaded) return null;

    return (
        <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
             <Stack
                screenOptions={{
                    headerTitle: '',
                    headerBackTitle: 'Voltar',
                }} 
            />
        </SafeAreaView>
    );
}