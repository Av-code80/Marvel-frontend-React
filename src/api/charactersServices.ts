import { get } from '.';
import { Character } from '../common/types/interface';

export const fetchCharacters = async (
  query: string,
  page: number,
): Promise<{ results: Character[]; total: number }> => {
  try {
    const response = await get('characters', {
      nameStartsWith: query,
      limit: 4,
      offset: (page - 1) * 4,
    });
    const { results, total } = response.data.data;
    return { results, total };
  } catch (error) {
    console.error('Error fetching characters:', error);
    return { results: [], total: 0 };
  }
};
