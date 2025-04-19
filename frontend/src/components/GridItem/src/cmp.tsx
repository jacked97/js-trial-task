import React from 'react';
import {View} from 'react-native';

import {GridItemProps} from './types';
import {styles} from './styles';

import {Text} from '@jacked97/cmp-text';
import {Image} from '@jacked97/cmp-image';

export const GridItem: React.FC<GridItemProps> = ({
  username,
  age,
  imageUrl,
  location,
  distance,
  headline,
  lastLogin,
}) => {
  return (
    <View style={styles.container}>
      <Image
        uri={imageUrl}
        style={styles.image}
        resizeMode="cover"
        accessibilityLabel={`${username}'s profile picture`}
      />
      <View style={styles.content}>
        <Text variant="h3" style={styles.spacing}>
          {username}, {age}
        </Text>
        <Text variant="paragraph" numberOfLines={2} style={styles.spacing}>
          {headline}
        </Text>
        <Text variant="labelSmall">
          {location} • {distance}
        </Text>
        <Text variant="labelSmall" style={{marginTop: 4}}>
          Last seen {lastLogin}
        </Text>
      </View>
    </View>
  );
};
