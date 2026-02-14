import { Pressable, PressableProps, Text } from "react-native";

type PrimaryButtonProps = PressableProps & {
  title: string;
};

export default function PrimaryButton({ title, ...rest }: PrimaryButtonProps) {
    return (
        <Pressable {...rest}>
            <Text>{ title }</Text>
        </Pressable>
    )
}