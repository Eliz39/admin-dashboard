import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '@/app/api/fetchUsers';
import { FetchUsersResponse } from '@/app/types/FetchUsersResponse';

export const useUsers = () => {
  const { data, error, isLoading } = useQuery<FetchUsersResponse, Error>({
    queryKey: ['users'],
    queryFn: () => fetchUsers(),
  });

  return {
    totalUsers: data?.total ?? 0,
    users: data?.users ?? [],
    isLoading,
    error,
  };
};
