import profile from '@/assets/configs/profile.json'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoText from '@/components/InfoText'
import { ScrollView, View } from 'react-native'

export default function AboutMe() {
    return(
        <ScrollView style={{backgroundColor: '#000D1F'}}>
            <View style={{padding: 25, gap: 24}}>
                <Header name={profile.name} image={require('@/assets/images/profile.png')} />
                <InfoText title='Sobre mim' description={ profile.aboutMe } />
            </View>
            <Footer />
        </ScrollView>
    )
}