import { Pressable, PressableProps, Text } from "react-native";

type PrimaryButtonProps = PressableProps & {
  title: string;
};

export default function PrimaryButton({ title, ...rest }: PrimaryButtonProps) {
    return (
        <Pressable style={{backgroundColor: '#22D4FD', borderRadius: 16, padding: 23, alignItems: 'center'}} {...rest}>
            <Text style={{color: '#000D1F', fontFamily: 'Montserrat-SemiBold', fontSize: 22, lineHeight: 24 * 1.2}} >{ title }</Text>
        </Pressable>
    )
}