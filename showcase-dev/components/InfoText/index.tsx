import { Text } from "react-native";
import { styles } from './styles';

type InfoTextProps = {
  title: string;
  highlightTitle?: string;
  description: string
};

export default function InfoText({ title, highlightTitle, description }: InfoTextProps) {
    return (
        <Text>
            <Text style={ styles.title }>{ title }</Text>
            <Text style={ styles.highlight }> { highlightTitle }</Text>
            <Text style={ styles.description }>{'\n\n'}{ description }</Text>
        </Text>
    )
}