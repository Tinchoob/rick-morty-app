import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

const SearchBar = () => {
  const [input, setInputValue] = useState('');

  return (
    <View style={styles.searchBar}>
      <TouchableOpacity style={styles.searchButton}>
        <FontAwesomeIcon icon={faSearch} color='grey' size={20} />
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        placeholder='Buscar personaje'
        onChangeText={value => setInputValue(value)}
      />
    </View>
  );
};

export default SearchBar;
