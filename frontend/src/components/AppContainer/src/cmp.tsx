import React from 'react';
import {SafeContainerProps} from './types';
import {styles} from './styles';
import {SafeAreaView} from 'react-native';

export const SafeContainer: React.FC<SafeContainerProps> = ({
  children,
  style,
}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};
