import { colors } from '@/tokens/colors'
import { fontFamily, fontSize, lineHeight } from '@/tokens/typography'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create(
    {
        shape: { 
            flexDirection: 'row', 
            borderColor: colors.primary, 
            borderWidth: 2, 
            borderRadius: 8, 
            padding: 23, 
            alignItems: 'center' , 
            justifyContent: 'center', 
            gap: 16 
        },
        text: { 
            color: colors.onBackground, 
            fontFamily: fontFamily.montserrat.semibold, 
            fontSize: fontSize.body.xl, 
            lineHeight: fontSize.body.xl * lineHeight.body
        }
    }
)