import { FetchUsersResponse } from '@/app/types/FetchUsersResponse';
import { PAGE_SIZE } from '@/constants/page-size';
import { getDeletedUserIds } from '@/lib/getDeletedUserIds';
import { User } from '@/app/types/User';

export const fetchUsers = async (page: number): Promise<FetchUsersResponse> => {
  const res = await fetch(
    `https://dummyjson.com/users?limit=${PAGE_SIZE}&skip=${(page - 1) * PAGE_SIZE}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await res.json();
  const deletedIds = getDeletedUserIds();

  return {
    ...data,
    users: data.users.filter((user: User) => !deletedIds.includes(user.id)),
  };
};
