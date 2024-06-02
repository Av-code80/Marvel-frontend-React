import axios from 'axios';
import { get } from '.';
import { Character } from '../common/types/interface';

/**
 * Fetches characters list from the API based query and pagination
 * @param {string} query - characters by name
 * @param {number} page - The current page number for pagination
 * @param {AbortSignal} signal - To abort the request if needed
 * @returns {Promise<{ results: Character[]; total: number }>} - Promise to resolves provide results & total number of characters
 * @throws {Error} - Error: canceled req || another error occurs
 */

export const fetchCharacters = async (
  query: string,
  page: number,
  signal: AbortSignal,
): Promise<{ results: Character[]; total: number }> => {
  try {
    const response = await get(
      'characters',
      {
        nameStartsWith: query,
        limit: 4,
        offset: (page - 1) * 4,
      },
      { signal },
    );
    const { results, total } = response.data.data;
    return { results, total };
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error('Error fetching characters:', error);
    } else {
      throw new Error('Request canceled');
    }
    return { results: [], total: 0 };
  }
};
