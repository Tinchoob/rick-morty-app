/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { View, FlatList } from 'react-native';

import ItemRow from '../ItemRow';

import styles from './styles';

const CharactersList = ({ data, onCharacterSelected }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ItemRow
            itemData={item}
            onItemSelected={() => onCharacterSelected(item)}
          />
        )}
      />
    </View>
  );
};

export default CharactersList;
