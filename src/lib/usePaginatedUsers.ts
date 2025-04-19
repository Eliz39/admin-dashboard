import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '@/app/api/fetchUsers';
import { FetchUsersResponse } from '@/app/types/FetchUsersResponse';
import { PAGE_SIZE } from '@/constants/page-size';
import { useSearchParams } from 'next/navigation';

export const usePaginatedUsers = (initialPage: number) => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page') || 1);

  const { data, error, isLoading } = useQuery<FetchUsersResponse, Error>({
    queryKey: ['users', currentPage],
    queryFn: () => fetchUsers(currentPage),
  });

  const totalPages = data ? Math.ceil(data.total / PAGE_SIZE) : 0;

  return {
    totalUsers: data?.total ?? 0,
    users: data?.users ?? [],
    totalPages,
    currentPage,
    isLoading,
    error,
  };
};
