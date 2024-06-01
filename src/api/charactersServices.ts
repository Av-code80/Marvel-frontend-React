import axios from 'axios';
import { get } from '.';
import { Character } from '../common/types/interface';

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
      console.log('Request canceled');
    } else {
      console.error('Error fetching characters:', error);
    }
    return { results: [], total: 0 };
  }
};
