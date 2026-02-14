import { Text } from "react-native";

type InfoTextProps = {
  title: string;
  highlightTitle?: string;
  description: string
};

export default function InfoText({ title, highlightTitle, description }: InfoTextProps) {
    return (
        <Text>
            <Text style={{fontFamily: 'KronaOne-Regular', fontSize: 24, color: '#F6F6F6', lineHeight: 24 * 1.25}}>{ title }</Text>
            <Text style={{fontFamily: 'KronaOne-Regular', fontSize: 24, color: '#22D4FD', lineHeight: 24 * 1.25}}>{ highlightTitle }</Text>
            <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 16, color: '#F6F6F6', lineHeight: 16 * 1.2}}>{ description }</Text>
        </Text>
    )
}