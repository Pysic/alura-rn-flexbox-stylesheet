import { Image, ImageSourcePropType, Text, View } from "react-native";
import { StarIcon } from "../icons/StarIcon";

type HeaderProps = {
  name: string;
  image: ImageSourcePropType;
};

export default function Header({ name, image }: HeaderProps) {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 64 }}>
                <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 24, color: '#F6F6F6', lineHeight: 24 * 1.25}}>DEV { name }</Text>
                <StarIcon />
            </View>

            <View>
                <View></View>
                <Image source={ image } />
            </View>
        </View>
    )
}