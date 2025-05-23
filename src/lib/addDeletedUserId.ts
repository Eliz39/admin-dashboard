import { DELETED_IDS_LS_KEY } from '@/constants/local-storage';
import { getDeletedUserIds } from '@/lib/getDeletedUserIds';

export const addDeletedUserId = (id: number) => {
  if (typeof window === 'undefined') return;

  const current = getDeletedUserIds();
  const updated = [...new Set([...current, id])];
  localStorage.setItem(DELETED_IDS_LS_KEY, JSON.stringify(updated));
};
