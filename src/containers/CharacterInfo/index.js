/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import StyleSheetFactory from './styles';

export default class CharacterInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const { character } = navigation.state.params;

    const styles = StyleSheetFactory.getSheet();

    return (
      <View style={styles.container}>
        <View style={styles.TriangleShapeCSS} />
        <Image
          style={styles.characterImage}
          source={{ uri: character.image }}
        />
        <Text style={styles.characterName}>{character.name}</Text>

        <View style={styles.characterInfoContainer}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>Status : {character.status}</Text>
            <Text style={styles.title}>Specie : {character.species}</Text>
          </View>
          <View>
            <Text style={styles.title}>Gender : {character.gender}</Text>
            <Text style={styles.title}>Origin : {character.origin.name}</Text>
          </View>
        </View>
      </View>
    );
  }
}
