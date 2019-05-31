import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Counter from '../../components/Counter/index';
import SearchBar from '../../components/SearchBar';

import styles from './styles';
import CharactersList from '../../components/CharactersList';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <CharactersList />
      </View>
    );
  }
}
