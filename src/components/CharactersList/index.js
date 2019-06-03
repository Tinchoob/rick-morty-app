import React from 'react';
import { View, FlatList } from 'react-native';

import styles from './styles';
import ItemRow from '../ItemRow';

const CharactersList = ({ data }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ItemRow itemData={item} />}
      />
    </View>
  );
};

export default CharactersList;
