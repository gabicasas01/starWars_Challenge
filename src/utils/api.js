import axios from 'axios';

const API_BASE_URL = 'https://swapi.dev/api';

export const getFilms = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/films/`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching films');
  }
};

export const getCharacters = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/films/${id}`);
    const charactersUrls = response.data.characters;
    const characters = await Promise.all(charactersUrls.map(url => axios.get(url)));
    return characters.map(response => response.data);
  } catch (error) {
    throw new Error('Error fetching characters');
  }
};
