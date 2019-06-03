import React, { useState, Component } from 'react';

import { View, FlatList } from 'react-native';

import { map } from 'rxjs/operators';
import charactersService from '../../service/charactersService';
import styles from './styles';
import ItemRow from '../ItemRow';

class CharactersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    this.getCharactersData();
  }

  getCharactersData = () => {
    charactersService
      .getAllCharacters()
      .pipe(map(result => result.data.results))
      .subscribe(
        result =>
          this.setState(prevState => ({
            data: prevState.data.concat(result)
          })),
        err => console.log(err)
      );
  };

  render() {
    const { data } = this.state;

    return (
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <ItemRow itemData={item} />}
        />
      </View>
    );
  }
}

export default CharactersList;
