import React from 'react';
import {FlatList} from 'react-native';

const VirtualizedList = ({children, style}) => {
  return (
    <FlatList
      data={[]}
      keyExtractor={() => 'key'}
      renderItem={null}
      ListHeaderComponent={<>{children}</>}
      style={{...style}}
    />
  );
};

export default VirtualizedList;
