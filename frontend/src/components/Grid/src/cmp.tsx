import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {GridItem} from '@jacked97/cmp-grid-item';

type Props = {
  items: any[];
  onItemRender: (args: {item: any}) => React.ReactNode;
  numColumns: number;
  estimatedItemSize: number;
};

export const Grid = ({
  items,
  onItemRender,
  numColumns = 2,
  estimatedItemSize = 100,
}: Props) => {
  return (
    <FlashList
      data={items}
      keyExtractor={(item, index) => `${item}-${index}`}
      renderItem={({item}) => onItemRender({item})}
      numColumns={numColumns}
      estimatedItemSize={estimatedItemSize}
    />
  );
};
