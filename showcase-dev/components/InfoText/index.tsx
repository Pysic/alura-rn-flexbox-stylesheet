import { Text } from "react-native";

type InfoTextProps = {
  title: string;
  highlightTitle?: string;
  description: string
};

export default function InfoText({ title, highlightTitle, description }: InfoTextProps) {
    return (
        <Text>
            <Text>{ title }</Text>
            <Text>{ highlightTitle }</Text>
            <Text>{ description }</Text>
        </Text>
    )
}