import { colors } from '@/tokens/colors'
import { fontFamily, fontSize } from '@/tokens/typography'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create(
    {
        shape: { 
            backgroundColor: colors.primary, 
            padding: 16, 
            alignItems: 'center' 
        },
        text: { 
            fontFamily: fontFamily.montserrat.regular, 
            fontSize: fontSize.body.s, 
            color: colors.onPrimary 
        }
    }
)