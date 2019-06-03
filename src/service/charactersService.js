import { from } from 'rxjs';
import APIClientService from './APIClientService';

const getAllCharacters = () => {
  return from(APIClientService.getAllCharacters());
};

const getCharactersByName = name => {
  return from(APIClientService.getCharactersByName(name));
};

export default { getAllCharacters, getCharactersByName };
