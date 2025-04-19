import { LoginHistory } from '@/app/types/LoginHistory';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  lastActive: Date;
  status: string;
  role: string;
  avatar: string;
  loginHistory: LoginHistory[];
};
