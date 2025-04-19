import { StyleSheet, Platform } from 'react-native';

export const typography = StyleSheet.create({
    h1: {
        fontSize: 32,
        fontWeight: 'bold',
        ...Platform.select({ web: { lineHeight: 20 }, default: { lineHeight: 38 } }),
    },
    h2: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    h3: {
        fontSize: 24,
        fontWeight: '600',
    },
    labelLarge: {
        fontSize: 18,
        fontWeight: '600',
    },
    labelMedium: {
        fontSize: 16,
    },
    labelSmall: {
        fontSize: 14,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
    },
});
