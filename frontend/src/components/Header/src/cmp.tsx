import React from 'react';
import {View} from 'react-native';
import {HeaderProps} from './types';
import {styles} from './styles';
import {Text} from '@jacked97/cmp-text'; // your custom text component

export const Header: React.FC<HeaderProps> = ({title, left, right, style}) => {
  const renderTitle = () => {
    if (typeof title === 'string') {
      return <Text variant="h3">{title}</Text>;
    }
    return title;
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.side}>{left}</View>
      <View style={styles.titleContainer}>{renderTitle()}</View>
      <View style={styles.side}>{right}</View>
    </View>
  );
};
