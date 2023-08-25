import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('/backend/NFT/NFT.json');

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
