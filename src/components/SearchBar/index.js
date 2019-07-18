import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const SearchBar = ({ onSearchButtonPressed }) => {
  const [input, setInputValue] = useState('');

  // const { state,dispatch, actions } = useContext(StoreContext);

  return (
    <View style={styles.searchBar}>
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => onSearchButtonPressed(input)}
      >
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
