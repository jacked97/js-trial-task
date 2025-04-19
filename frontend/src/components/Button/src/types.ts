import { ReactNode } from 'react';
import { GestureResponderEvent, StyleProp, ViewStyle, TextStyle } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'unset';

export interface ButtonProps {
    children: ReactNode;
    onPress: (event: GestureResponderEvent) => void;
    variant?: ButtonVariant;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}
