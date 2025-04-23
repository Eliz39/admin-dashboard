import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/authOptions';

export const withAuth = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');
  return session;
};
