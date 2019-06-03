import { from } from 'rxjs';
import APIClientService from './APIClientService';

const getAllCharacters = () => {
  return from(APIClientService.getAllCharacters());
};

export default { getAllCharacters };
