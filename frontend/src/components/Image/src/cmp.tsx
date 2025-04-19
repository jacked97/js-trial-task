import React, {useState} from 'react';
import {Platform, View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ImageProps} from './types.ts';

const DEFAULT_FALLBACK_IMAGE =
  'https://static.thenounproject.com/png/504708-200.png';
export const Image = ({
  uri,
  style,
  containerStyle,
  fallbackUri = DEFAULT_FALLBACK_IMAGE,
  resizeMode = 'cover',
  lazyLoad = true,
  alt,
  accessibilityLabel,
  ...rest
}: ImageProps) => {
  const [error, setError] = useState(false);
  const flattenedStyle = StyleSheet.flatten(style) as React.CSSProperties;

  if (Platform.OS === 'web') {
    return (
      <img
        src={error && fallbackUri ? fallbackUri : uri}
        alt={alt || accessibilityLabel || ''}
        loading={lazyLoad ? 'lazy' : 'eager'}
        style={flattenedStyle}
        onError={() => {
          if (fallbackUri) setError(true);
        }}
      />
    );
  }

  return (
    <View style={containerStyle}>
      <FastImage
        {...rest}
        source={{uri: error && fallbackUri ? fallbackUri : uri}}
        resizeMode={resizeMode as any}
        style={style}
        onError={() => {
          console.log('cant load image');
          if (fallbackUri) setError(true);
        }}
        accessibilityLabel={accessibilityLabel || alt}
      />
    </View>
  );
};
