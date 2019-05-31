import React, { useState, Component } from 'react';

import { Text, View, FlatList } from 'react-native';

import styles from './styles';
import ItemRow from '../ItemRow';

class CharactersList extends Component {
  constructor(props) {
    super(props);
    this.data = [
      { name: 'Rick Sanchez', status: 'Alive' },
      { name: 'Morty', status: 'Dead' }
    ];
  }

  render() {
    console.log(this.data);
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={this.data}
          renderItem={({ item }) => <ItemRow itemData={item} />}
        />
      </View>
    );
  }
}

export default CharactersList;
