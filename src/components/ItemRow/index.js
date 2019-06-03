import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

const ItemRow = ({ itemData }) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.itemImage} source={{ uri: itemData.image }} />
      <View style={styles.textContainer}>
        <Text style={styles.itemTitle}>{itemData.name}</Text>
        <Text style={styles.itemStatus}>{itemData.status}</Text>
      </View>
    </View>
  );
};

export default ItemRow;
