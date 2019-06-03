import CONSTANTS from '../config/constants';
import Service from './APIClient';

const getAllCharacters = () => {
  return Service.get(CONSTANTS.API_ENDPOINTS.ALL_CHARACTERS);
};

export default {
  getAllCharacters
};
