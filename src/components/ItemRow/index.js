import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const ItemRow = ({ itemData, onItemSelected }) => {
  return (
    <TouchableOpacity onPress={onItemSelected}>
      <View style={styles.itemContainer}>
        <Image style={styles.itemImage} source={{ uri: itemData.image }} />
        <View style={styles.textContainer}>
          <Text style={styles.itemTitle}>{itemData.name}</Text>
          <Text style={styles.itemStatus}>{itemData.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemRow;
