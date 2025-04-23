import { FetchUsersResponse } from '@/app/types/FetchUsersResponse';
import { getDeletedUserIds } from '@/lib/getDeletedUserIds';
import { User } from '@/app/types/User';

export const fetchUsers = async (): Promise<FetchUsersResponse> => {
  const res = await fetch(`https://dummyjson.com/users?limit=1000`);
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
