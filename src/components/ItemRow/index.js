import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

const ItemRow = ({ itemData }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{itemData.name}</Text>
      <Text style={styles.itemStatus}>{itemData.status}</Text>
    </View>
  );
};

export default ItemRow;
