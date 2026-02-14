import { colors } from '@/tokens/colors'
import { fontFamily, fontSize, lineHeight } from '@/tokens/typography'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create(
    {
        scroll: { 
            backgroundColor: colors.background
        },
        container: { 
            padding: 25, 
            gap: 24 
        },
        title: {
            fontFamily: fontFamily.kronaOne.regular, 
            fontSize: fontSize.headings.h4, 
            color: colors.onBackground, 
            alignSelf: 'center', 
            lineHeight: fontSize.headings.h4 * lineHeight.headings,
            paddingTop: 24, 
            paddingBottom: 8
        }
    }
)