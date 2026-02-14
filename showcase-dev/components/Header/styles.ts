import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create(
    {
        topContainer: { flexDirection: 'row', alignSelf: 'center', marginBottom: 64 },
        topText: { fontFamily: 'Montserrat-SemiBold', fontSize: 24, color: '#F6F6F6', lineHeight: 24 * 1.25},
        imageContainer: { height: 340, marginTop: 12, marginRight: 12, marginBottom: 48 },
        imageAccessory: { position: 'absolute', bottom: 12, left: 12, borderColor: '#22D4FD', borderRadius: 16, borderWidth: 2, width: '100%', height: '100%'},
        image: { borderRadius: 16, width: '100%', height: '100%' }
    }
)