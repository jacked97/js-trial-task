import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_SIZE = width / 2 - 16;

export const styles = StyleSheet.create({
    container: {
        width: ITEM_SIZE,
        margin: 8,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
    },
    image: {
        width: '100%',
        height: ITEM_SIZE,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    content: {
        padding: 10,
    },
    spacing: {
        marginBottom: 4,
    },
});
