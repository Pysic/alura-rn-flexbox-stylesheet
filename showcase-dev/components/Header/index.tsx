import { Image, ImageSourcePropType, Text, View } from "react-native";
import { StarIcon } from "../icons/StarIcon";
import { styles } from "./styles";

type HeaderProps = {
  name: string;
  image: ImageSourcePropType;
};

export default function Header({ name, image }: HeaderProps) {
    return (
        <View>
            <View style={ styles.topContainer }>
                <Text style={ styles.topText }>DEV { name }</Text>
                <StarIcon />
            </View>

            <View style={ styles.imageContainer }>
                <View style={ styles.imageAccessory }></View>
                <Image source={ image } resizeMode="cover" style={{ borderRadius: 16, width: '100%', height: '100%' }}/>
            </View>
        </View>
    )
}