import { Pressable, PressableProps, Text } from "react-native";
import { GitHubIcon } from "../icons/GitHub";
import { InstagramIcon } from "../icons/Instagram";
import { LinkedInIcon } from "../icons/LinkedIn";
import { TwitchIcon } from "../icons/Twitch";

export enum SocialNetworks { github, instagram, linkedin, twitch }

type SocialButtonProps = PressableProps & {
  socialNetwork: SocialNetworks;
};

const icon = (socialNetwork: SocialNetworks) => {
    switch (socialNetwork) {
        case SocialNetworks.github: return <GitHubIcon />
        case SocialNetworks.instagram: return <InstagramIcon />
        case SocialNetworks.linkedin: return <LinkedInIcon />
        case SocialNetworks.twitch: return <TwitchIcon />
    }
}

const title = (socialNetwork: SocialNetworks) => {
    switch (socialNetwork) {
        case SocialNetworks.github: return 'GitHub'
        case SocialNetworks.instagram: return 'Instagram'
        case SocialNetworks.linkedin: return 'LinkedIn'
        case SocialNetworks.twitch: return 'Twitch'
    }
}

export default function SocialButton({ socialNetwork, ...rest }: SocialButtonProps) {
    return (
        <Pressable style={{flexDirection: 'row', borderColor: '#22D4FD', borderWidth: 2, borderRadius: 8, padding: 23, alignItems: 'center' , justifyContent: 'center', gap: 16}} {...rest}>
            { icon(socialNetwork) }
            <Text style={{color: '#F6F6F6', fontFamily: 'Montserrat-SemiBold', fontSize: 22, lineHeight: 24 * 1.2}}>{ title(socialNetwork) }</Text>
        </Pressable>
    )
}