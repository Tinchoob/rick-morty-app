import React, { Component } from 'react';
import { View } from 'react-native';
import { map } from 'rxjs/operators';
import charactersService from '../../service/charactersService';
import SearchBar from '../../components/SearchBar';

import styles from './styles';

import CharactersList from '../../components/CharactersList';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    this.getCharactersData();
  }

  handleSearchButtonPressed = name => {
    charactersService
      .getCharactersByName(name)
      .pipe(map(result => result.data.results))
      .subscribe(
        result => this.setState({ data: result }),
        err => console.log(err)
      );
  };

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
      <View style={styles.container}>
        <SearchBar onSearchButtonPressed={this.handleSearchButtonPressed} />
        <CharactersList data={data} />
      </View>
    );
  }
}
