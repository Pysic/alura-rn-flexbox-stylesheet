import profile from '@/assets/configs/profile.json'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoText from '@/components/InfoText'
import PrimaryButton from '@/components/PrimaryButton'
import SocialButton, { SocialNetworks } from '@/components/SocialButton'

import { router } from 'expo-router'
import { Linking, ScrollView, Text } from 'react-native'

export default function Home() {
    return(
        <ScrollView>
            <Header name={profile.name} image={require('@/assets/images/profile.png')} />

            <InfoText title='Eleve seu negócio digital a outro nível' highlightTitle='com qualidade!' description={ profile.summary } />
            <PrimaryButton title='Sobre mim' onPress={() => router.push('/pages/AboutMe')} />
            <PrimaryButton title='Entre em Contato' onPress={() => Linking.openURL(`tel:${profile.phone}`)} />

            <Text>Acesse minhas redes:</Text>

            <SocialButton socialNetwork={ SocialNetworks.github } onPress={() => Linking.openURL(profile.github)}/>
            <SocialButton socialNetwork={ SocialNetworks.linkedin } onPress={() => Linking.openURL(profile.linkedin)}/>
            <SocialButton socialNetwork={ SocialNetworks.instagram } onPress={() => Linking.openURL(profile.instagram)}/>
            <SocialButton socialNetwork={ SocialNetworks.twitch } onPress={() => Linking.openURL(profile.twitch)}/>

           <Footer />
        </ScrollView>
    )
}