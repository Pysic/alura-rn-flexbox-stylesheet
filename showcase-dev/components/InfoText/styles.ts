import { colors } from '@/tokens/colors'
import { fontFamily, fontSize, lineHeight } from '@/tokens/typography'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create(
    {
        title: {
            fontFamily: fontFamily.kronaOne.regular,
            fontSize: fontSize.headings.h3, 
            color: colors.onBackground, 
            lineHeight: fontSize.headings.h3 * lineHeight.headings 
        },
        highlight: { 
            color: colors.primary 
        },
        description: { 
            fontFamily: fontFamily.montserrat.regular, 
            fontSize: fontSize.body.md, 
            color: colors.onBackground, 
            lineHeight: fontSize.body.md * lineHeight.body 
        }
    }
)