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

            <View style={{ height: 340, marginTop: 12, marginRight: 12, marginBottom: 48 }}>
                <View style={{ position: 'absolute', bottom: 12, left: 12, borderColor: '#22D4FD', borderRadius: 16, borderWidth: 2, width: '100%', height: '100%'}}></View>
                <Image source={ image } resizeMode="cover" style={{ borderRadius: 16, width: '100%', height: '100%' }}/>
            </View>
        </View>
    )
}