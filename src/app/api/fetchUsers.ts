import { FetchUsersResponse } from '@/app/types/FetchUsersResponse';
import { PAGE_SIZE } from '@/constants/page-size';

export const fetchUsers = async (page: number): Promise<FetchUsersResponse> => {
  const res = await fetch(
    `https://dummyjson.com/users?limit=${PAGE_SIZE}&skip=${(page - 1) * PAGE_SIZE}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  return res.json();
};
