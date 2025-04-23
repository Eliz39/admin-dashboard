import { DELETED_IDS_LS_KEY } from '@/constants/local-storage';

export const getDeletedUserIds = (): number[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(DELETED_IDS_LS_KEY);
  return stored ? JSON.parse(stored) : [];
};
