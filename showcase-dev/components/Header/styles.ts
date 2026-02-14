import { colors } from '@/tokens/colors'
import { fontFamily, fontSize, lineHeight } from '@/tokens/typography'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create(
    {
        topContainer: {
            flexDirection: 'row',
            alignSelf: 'center',
            marginBottom: 64
        },
        topText: {
            fontFamily: fontFamily.montserrat.semibold,
            fontSize: fontSize.headings.h3,
            color: colors.onBackground, 
            lineHeight: fontSize.headings.h3 * lineHeight.headings
        },
        imageContainer: { 
            height: 340, 
            marginTop: 12, 
            marginRight: 12, 
            marginBottom: 48 
        },
        imageAccessory: { 
            position: 'absolute', 
            bottom: 12, 
            left: 12, 
            borderColor: colors.primary, 
            borderRadius: 16, 
            borderWidth: 2, 
            width: '100%', 
            height: '100%' 
        },
        image: { 
            borderRadius: 16, 
            width: '100%', 
            height: '100%' 
        }
    }
)