import axios from 'axios';

const API_KEY = '25243201-da43b78e8715fb1cc3094e420';

axios.defaults.baseURL = 'https://pixabay.com/api';

const searchParams = new URLSearchParams({
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
});

export const getImages = async (query, page, perPage) => {
  const response = await axios.get(
    `/?q=${query}&page=${page}&per_page=${perPage}&${searchParams}`
  );
  return response.data;
};
