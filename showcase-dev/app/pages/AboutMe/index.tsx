import profile from '@/assets/configs/profile.json'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoText from '@/components/InfoText'
import { ScrollView } from 'react-native'

export default function AboutMe() {
    return(
        <ScrollView>
            <Header name={profile.name} image={require('@/assets/images/profile.png')} />
            <InfoText title='Sobre mim' description={ profile.aboutMe } />
            <Footer />
        </ScrollView>
    )
}