import { User } from '@/app/types/User';

export type FetchUsersResponse = {
  total: number;
  skip: number;
  limit: number;
  users: User[];
};
