import React from 'react';
import {Text as RNText} from 'react-native';
import {useTranslation} from 'react-i18next';

import {TextProps} from './types.ts';
import {typography} from './styles.ts';
import {resolveText} from './utils.ts';

export const Text: React.FC<TextProps> = ({
  variant = 'paragraph',
  translationKey,
  variables,
  children,
  style,
  numberOfLines,
}) => {
  const {t} = useTranslation();
  const content = resolveText(t, translationKey, variables, children);

  return (
    <RNText style={[typography[variant], style]} numberOfLines={numberOfLines}>
      {content}
    </RNText>
  );
};
