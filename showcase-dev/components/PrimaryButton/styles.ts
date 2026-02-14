import { colors } from '@/tokens/colors'
import { fontFamily, fontSize, lineHeight } from '@/tokens/typography'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create(
    {
        shape: { 
            backgroundColor: colors.primary, 
            borderRadius: 16, 
            padding: 23, 
            alignItems: 'center' 
        },
        text: { 
            color: colors.background, 
            fontFamily: fontFamily.montserrat.semibold, 
            fontSize: fontSize.body.xl, 
            lineHeight: fontSize.body.xl * lineHeight.body
        }
    }
)