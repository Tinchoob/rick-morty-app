import React, { Component } from 'react';
import { View } from 'react-native';
import charactersService from '../../service/charactersService';
import SearchBar from '../../components/SearchBar';

import styles from './styles';
import CharactersList from '../../components/CharactersList';

export default class Home extends Component {
  componentWillMount() {
    charactersService.getAllCharacters();
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <CharactersList />
      </View>
    );
  }
}
