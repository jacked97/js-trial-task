import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ButtonProps} from './types';
import {variants, textVariants, styles} from './styles';

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  variant = 'primary',
  disabled = false,
  style,
  textStyle,
}) => {
  const isUnset = variant === 'unset';

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        !isUnset && variants[variant],
        disabled && !isUnset && variants.disabled,
        style,
      ]}
    >
      {typeof children === 'string' ? (
        <Text
          style={[!isUnset && textVariants[variant], styles.label, textStyle]}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};
