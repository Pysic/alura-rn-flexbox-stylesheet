import { colors } from '@/tokens/colors';
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
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background}} edges={['bottom']}>
             <Stack
                screenOptions={{
                    headerTitle: '',
                    headerBackTitle: 'Voltar',
                    headerStyle: { backgroundColor: colors.background },
                    headerTintColor: colors.onBackground
                }} 
            />
        </SafeAreaView>
    );
}