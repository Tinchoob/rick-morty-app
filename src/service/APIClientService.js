import CONSTANTS from '../config/constants';
import Service from './APIClient';

const getAllCharacters = () => {
  return Service.get(CONSTANTS.API_ENDPOINTS.ALL_CHARACTERS);
};

const getCharactersByName = name => {
  return Service.get(CONSTANTS.API_ENDPOINTS.ALL_CHARACTERS, {
    params: { name }
  });
};

export default {
  getAllCharacters,
  getCharactersByName
};
