import { Pressable, PressableProps, Text } from "react-native";
import { GitHubIcon } from "../icons/GitHub";
import { InstagramIcon } from "../icons/Instagram";
import { LinkedInIcon } from "../icons/LinkedIn";
import { TwitchIcon } from "../icons/Twitch";
import { styles } from "./styles";

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
        <Pressable style={ styles.shape } {...rest}>
            { icon(socialNetwork) }
            <Text style={ styles.text }>{ title(socialNetwork) }</Text>
        </Pressable>
    )
}