import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

type PrimaryButtonProps = PressableProps & {
  title: string;
};

export default function PrimaryButton({ title, ...rest }: PrimaryButtonProps) {
    return (
        <Pressable style={ styles.shape } {...rest}>
            <Text style={ styles.text } >{ title }</Text>
        </Pressable>
    )
}