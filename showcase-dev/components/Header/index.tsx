import { Image, ImageSourcePropType, Text, View } from "react-native";
import { StarIcon } from "../icons/StarIcon";

type HeaderProps = {
  name: string;
  image: ImageSourcePropType;
};

export default function Header({ name, image }: HeaderProps) {
    return (
        <View>
            <Text>DEV { name }</Text>
            <StarIcon />

            <View>
                <View></View>
                <Image source={ image } />
            </View>
        </View>
    )
}