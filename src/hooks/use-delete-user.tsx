import { useQueryClient } from '@tanstack/react-query';

import { addDeletedUserId } from '@/lib/addDeletedUserId';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return (userId: number) => {
    addDeletedUserId(userId);
    queryClient.invalidateQueries({ queryKey: ['users'] });
  };
};
