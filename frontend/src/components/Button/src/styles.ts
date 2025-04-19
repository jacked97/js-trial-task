import { StyleSheet } from 'react-native';

const base = {
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
};

export const variants = StyleSheet.create({
    primary: {
        ...base,
        backgroundColor: '#007bff',
    },
    secondary: {
        ...base,
        backgroundColor: '#6c757d',
    },
    ghost: {
        ...base,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    unset: {}, // No styling at all
    disabled: {
        opacity: 0.5,
    },
});

export const textVariants = StyleSheet.create({
    primary: {
        color: '#fff',
    },
    secondary: {
        color: '#fff',
    },
    ghost: {
        color: '#000',
    },
    unset: {
        color: '#000',
    },
});

export const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: '500',
    },
    focused: {
        opacity: 0.85,
    },
});
